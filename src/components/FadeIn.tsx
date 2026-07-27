import {
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
  Children,
} from 'react';

interface FadeInProps {
  delay?: number;
  transitionDuration?: number;
  className?: string;
}

/**
 * Scroll-triggered reveal: each direct child fades + slides up the first
 * time it enters the viewport (IntersectionObserver), rather than all at
 * once on mount. Falls back to immediately visible if IO isn't available.
 */
export default function FadeIn({
  children,
  delay = 50,
  transitionDuration = 700,
  className,
}: PropsWithChildren<FadeInProps>) {
  const items = Children.toArray(children);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(items.map(() => true));
      return;
    }

    const observers: IntersectionObserver[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible((prev) => {
                if (prev[i]) return prev;
                const next = [...prev];
                next[i] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  return (
    <div className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          style={{
            transition: `opacity ${transitionDuration}ms ease-out ${i * delay}ms, transform ${transitionDuration}ms ease-out ${i * delay}ms`,
            transform: visible[i] ? 'none' : 'translateY(28px)',
            opacity: visible[i] ? 1 : 0,
            willChange: 'opacity, transform',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

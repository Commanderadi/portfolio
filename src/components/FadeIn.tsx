import {
  type PropsWithChildren,
  useEffect,
  useState,
  Children,
} from 'react';

interface FadeInProps {
  delay?: number;
  transitionDuration?: number;
  className?: string;
}

/** Section stagger fade — same idea as yujisatojr/react-portfolio-template */
export default function FadeIn({
  children,
  delay = 50,
  transitionDuration = 700,
  className,
}: PropsWithChildren<FadeInProps>) {
  const [visibleCount, setVisibleCount] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    if (visibleCount >= count) return;
    const t = setTimeout(() => setVisibleCount((n) => n + 1), delay);
    return () => clearTimeout(t);
  }, [visibleCount, count, delay]);

  return (
    <div className={className}>
      {Children.map(children, (child, i) => (
        <div
          key={i}
          style={{
            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
            transform: visibleCount > i ? 'none' : 'translateY(20px)',
            opacity: visibleCount > i ? 1 : 0,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

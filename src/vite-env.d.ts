/// <reference types="vite/client" />

declare module 'react-vertical-timeline-component' {
  import type { CSSProperties, FC, ReactNode } from 'react';

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: string;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    children?: ReactNode;
  }

  export const VerticalTimeline: FC<{ children?: ReactNode }>;
  export const VerticalTimelineElement: FC<VerticalTimelineElementProps>;
}

import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': {
        icon?: string;
        width?: string | number;
        height?: string | number;
        'stroke-width'?: string | number;
        className?: string;
        style?: React.CSSProperties;
        [key: string]: any;
      };
    }
  }
}

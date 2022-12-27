import '@emotion/react';

import { image } from './theme';

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

declare module '@emotion/react' {
  export interface Theme {
    image: typeof image;
    color: {
      white: string;
      black: string;
    };
  }
}

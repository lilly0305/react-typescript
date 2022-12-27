import { Theme } from '@emotion/react';

export const image = {
  image01: './assets/images/image01.jpg',
};

export const AppTheme: Theme = {
  image,
  color: {
    white: '#ffffff',
    black: '#111111',
  },
};

export type ITheme = typeof AppTheme;

export default AppTheme;

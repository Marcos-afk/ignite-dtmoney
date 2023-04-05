/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { DEFAULT_THEME } from '../theme/default';

type ThemeType = typeof DEFAULT_THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

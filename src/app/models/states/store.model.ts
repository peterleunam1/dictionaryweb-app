import { Theme, TypographyName } from '../constants/theme.model';

export interface AppStore {
  theme: string;
  typography: TypographyName;
  searches: boolean;
}

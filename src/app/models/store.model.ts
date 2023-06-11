import { Theme, TypographyName } from './theme.model';

export interface AppStore {
  theme: string;
  typography: TypographyName;
}

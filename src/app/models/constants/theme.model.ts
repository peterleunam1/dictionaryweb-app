export interface Theme {
  theme: string;
}
export interface ThemeConstant {
  light: string;
  dark: string;
}
export interface Typography {
  id: number;
  name: TypographyName['name'];
}
export interface TypographyName {
  name: 'Epilogue' | 'Montserrat' | 'Roboto';
}

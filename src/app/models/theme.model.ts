export interface Theme {
  theme: string;
}
export interface Typography {
  id: number;
  name: TypographyName['name'];
}
export interface TypographyName {
  name: 'Epilogue' | 'Montserrat' | 'Roboto';
}

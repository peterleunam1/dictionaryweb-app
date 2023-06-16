export interface OrientationsModel {
  htzl: string;
  vert: string;
}
export interface animationSection {
  message: string;
  code: letterAnimated[];
}
export interface letterAnimated {
  letter: string;
  animation: string;
  color: boolean;
}

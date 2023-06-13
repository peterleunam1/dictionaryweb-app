import { createReducer, on } from '@ngrx/store';
import { TypographyActions } from '../actions/typography.action';
import { TypographyName } from 'src/app/models/constants/theme.model';

const initialState: TypographyName = {
  name: 'Epilogue',
};

export const typographyReducer = createReducer(
  initialState,
  on(TypographyActions.setTypography, (state, { typography }) => typography)
);

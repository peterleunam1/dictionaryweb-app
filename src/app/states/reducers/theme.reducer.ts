import { createReducer, on } from '@ngrx/store';
import { ThemeActions } from '../actions/theme.action';
import { themeConstants } from 'src/app/constants/theme.constant';

const initialState: string = themeConstants.light;

export const themeReducer = createReducer(
  initialState,
  on(ThemeActions.toggleTheme, (_, { theme }) => theme)
);

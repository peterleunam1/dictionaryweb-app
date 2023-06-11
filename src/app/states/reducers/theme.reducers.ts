import { createReducer, on } from '@ngrx/store';
import { ThemeActions } from '../actions/theme.actions';

const initialState: string = 'light';

export const themeReducer = createReducer(
  initialState,
  on(ThemeActions.toggleTheme, (state, { theme }) => theme)
);

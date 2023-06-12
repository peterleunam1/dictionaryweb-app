import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from '../models/store.model';
import { themeReducer } from './reducers/theme.reducer';
import { typographyReducer } from './reducers/typography.reducer';

export const STORE: ActionReducerMap<AppStore> = {
  theme: themeReducer,
  typography: typographyReducer,
};

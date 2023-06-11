import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from '../models/store.model';
import { themeReducer } from './reducers/theme.reducers';
import { typographyReducer } from './reducers/typography.reducers';

export const STORE: ActionReducerMap<AppStore> = {
  theme: themeReducer,
  typography: typographyReducer,
};

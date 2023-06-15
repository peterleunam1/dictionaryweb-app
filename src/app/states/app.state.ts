import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from '../models/states/store.model';
import { themeReducer } from './reducers/theme.reducer';
import { typographyReducer } from './reducers/typography.reducer';
import { searchesReducer } from './reducers/searches.reducer';

export const STORE: ActionReducerMap<AppStore> = {
  theme: themeReducer,
  typography: typographyReducer,
  searches: searchesReducer,
};

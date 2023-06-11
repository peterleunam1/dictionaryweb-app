import { AppStore } from 'src/app/models/store.model';

export const selectTheme = (state: AppStore) => state.theme;

import { createReducer, on } from '@ngrx/store';
import { UpdateSearches } from '../actions/searches.action';

const initialState: boolean = false;

export const searchesReducer = createReducer(
  initialState,
  on(UpdateSearches, state => {
    return !state;
  })
);

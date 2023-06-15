import { lastSearches } from '../models/pages/search.model';
import { getLocalStorage } from './getLocalStorage';

export const addSearchToLocalStorage = (values: lastSearches) => {
  const data = getLocalStorage('lastSearches');
  !data && localStorage.setItem('lastSearches', JSON.stringify([values]));
  !data.find((item: lastSearches) => item.keyowrd === values.keyowrd)
    ? localStorage.setItem('lastSearches', JSON.stringify([...data, values]))
    : localStorage.setItem(
        'lastSearches',
        JSON.stringify([
          ...data.filter(
            (item: lastSearches) => item.keyowrd !== values.keyowrd
          ),
          values,
        ])
      );
};

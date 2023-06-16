import { animationSection } from '../models/constants/ui-texts.model';
import { OrientationsModel } from '../models/constants/ui-texts.model';

export const orientations: OrientationsModel = {
  htzl: 'horizontal',
  vert: 'vertical',
};

export const inputTexts = {
  placeholder: 'Search for a word here...',
  errorMessage: 'Please enter a valid search term',
};

export const notFound: animationSection = {
  message: 'The word you entered has not been found',
  code: [
    {
      letter: '4',
      animation: 'easyoutelastic',
      color: true,
    },
    {
      letter: '0',
      animation: '',
      color: false,
    },
    {
      letter: '4',
      animation: 'rotatedrop',
      color: true,
    },
  ],
};

export const empty: animationSection = {
  message: 'No words have been registered yet',
  code: [
    {
      letter: 'e',
      animation: 'rotatedropinverse',
      color: true,
    },
    {
      letter: 'm',
      animation: '',
      color: false,
    },
    {
      letter: 'p',
      animation: 'easyoutelastic',
      color: true,
    },
    {
      letter: 't',
      animation: '',
      color: false,
    },
    {
      letter: 'y',
      animation: 'rotatedrop',
      color: true,
    },
  ],
};

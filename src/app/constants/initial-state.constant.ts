import { KeywordMeaning } from '../models/search-model';

export const initalState: KeywordMeaning = {
  license: {
    name: '',
    url: '',
  },
  meanings: [
    {
      antonyms: [],
      definitions: [
        {
          antonyms: [],
          definition: '',
          example: '',
          synonyms: [],
        },
      ],
      partOfSpeech: '',
      synonyms: [],
    },
  ],
  phonetic: '',
  phonetics: [
    {
      audio: '',
      license: {
        name: '',
        url: '',
      },
      sourceUrl: '',
      text: '',
    },
  ],
  sourceUrls: [''],
  word: '',
};

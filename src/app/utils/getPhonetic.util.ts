import { Phonetic } from '../models/search-model';

export const getPhonetic = (phonetics: Phonetic[]) => {
  if (phonetics.length > 0) {
    const audio =
      phonetics.find(phonetic => phonetic.audio !== '') || undefined;
    return audio?.audio;
  }
  return undefined;
};

import { Phonetic } from '../models/pages/search.model';

export const getPhonetic = (phonetics: Phonetic[]) => {
  if (!phonetics.length) return undefined;
  return phonetics.find(phonetic => phonetic.audio !== '')?.audio;
};

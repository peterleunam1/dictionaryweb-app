import { Phonetic } from '../models/search-model';

export const fAudio = (phonetics: Phonetic[]) => {
  if (phonetics.length > 0) {
    const audio = phonetics.find(p => p.audio !== '') || undefined;
    return audio;
  }
  return undefined;
};

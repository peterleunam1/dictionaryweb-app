export interface Phonetic {
  audio: string;
  license?: License;
  sourceUrl?: string;
  text: string;
}
export interface License {
  name: string;
  url: string;
}

export const fAudio = (phonetics: Phonetic[]) => {
  if (phonetics.length > 0) {
    const audio = phonetics.find(p => p.audio !== '') || undefined;
    return audio;
  }
  return undefined;
};

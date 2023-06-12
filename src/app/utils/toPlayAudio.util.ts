export const toPlayAudio = (src: string) => {
  const audio = new Audio();
  audio.src = src;
  audio.load();
  audio.play();
  return audio;
};

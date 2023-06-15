export const getHours = (date: Date): string => {
  let hour = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  let time = 'am';
  hour >= 12 && (time = 'pm');
  hour > 12 && (hour -= 12);

  return ` ${hour}:${minutes <= 9 ? `0${minutes}` : minutes} ${time}`;
};

export const getDays = (date: Date): string => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  if (new Date(date).toLocaleDateString() === today.toLocaleDateString()) {
    return 'Today';
  } else if (
    new Date(date).toLocaleDateString() === yesterday.toLocaleDateString()
  ) {
    return 'Yesterday';
  } else if (
    new Date(date).toLocaleDateString() === twoDaysAgo.toLocaleDateString()
  ) {
    return '2 days ago';
  } else {
    return 'Days ago';
  }
};

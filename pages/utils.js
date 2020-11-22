export const getAgo = (timestamp) => {
  const date = new Date(timestamp);
  const d = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  const min = 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;

  if (d < min * 1) {
    return {
      value: `just before`,
      next: min - d,
    };
  } else if (d < hour) {
    const minutes = Math.floor(d / min);
    return `${minutes} minutes ago`;
  } else if (d < day) {
    const hours = Math.floor(d / hour);
    return `${hours} hour${hours > 1 ? `s` : ``} ago`;
  } else if (d < week) {
    const days = Math.floor(d / day);
    return `${days} day${days > 1 ? `s` : ``} ago`;
  } else {
    const weeks = Math.floor(d / week);
    return `${weeks} week${weeks > 1 ? `s` : ``} ago`;
  }
};

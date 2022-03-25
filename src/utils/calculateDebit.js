export const calculateDebit = (dailies) => {
  return dailies
    .map((daily) => {
      if (daily.type == 2) return -daily.value;

      return daily.value;
    })
    .reduce((prev, current) => prev + current,0);
};

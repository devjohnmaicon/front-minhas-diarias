const sumDailies = (dailies) => {
  return dailies
    ?.map((daily) => daily.value)
    ?.reduce((prev, current) => {
      return prev + current;
    }, 0);
};

export default sumDailies;

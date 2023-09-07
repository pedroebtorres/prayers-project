const randomPrayer = (prayers) => {
  const choosePrayer = Math.floor(Math.random() * prayers.length);

  return prayers[choosePrayer];
};

export default randomPrayer;

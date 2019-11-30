export const formatPrice = money => {
  return Math.abs(money)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

export const getShortString = (longString, maxLength) => {
  if (longString.length > maxLength) {
    return longString.substring(0, maxLength) + "...";
  } else {
    return longString;
  }
};

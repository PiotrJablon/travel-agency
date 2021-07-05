export const promoPrice = (price, percentage) => {
  if (typeof price === 'undefined' || price < 0 && percentage < 0) {
    return null;
  }
  else if(typeof price === 'number') {
    return price - (price * (percentage / 100));
  } else {
    const priceParsed = price.replace(/^\$\s*/, '').replace(/,/g, '');
    return priceParsed - (priceParsed * (percentage / 100));
  }
};

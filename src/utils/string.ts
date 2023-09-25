export const addCommaSeparator = (s: string) => {
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const truncating = (num: string | number, maxFraction: number) => {
  const castToNumber: number = +num;
  const numberWithSpicificFraction = castToNumber.toFixed(maxFraction);
  return numberWithSpicificFraction;
};

export const truncatingLiquidity = (
  num: string | number,
  maxFraction: number
) => {
  const castToNumber: number = +num;
  if (castToNumber === 0) {
    return 0;
  } else if (castToNumber < Math.pow(10, -maxFraction)) {
    return `<${Math.pow(10, -maxFraction)}`;
  } else {
    const numberWithSpicificFraction = castToNumber.toFixed(maxFraction);
    return numberWithSpicificFraction;
  }
};

export const ellipsisBetween = (
  str: string,
  numberOfShownCharacter: number
) => {
  const length = str.length;
  const shortenStringFirstSide = str
    .substring(0, numberOfShownCharacter)
    .concat('...');
  const shortenStringLastSide = str.substring(
    length - numberOfShownCharacter,
    length
  );
  const shortenString = shortenStringFirstSide.concat(shortenStringLastSide);
  return shortenString;
};

export const isNonZeroValue = (value: string) => {
  return value !== '' && value !== '0.' && !/^0+(\.0+)?$/gm.test(value);
};

export const castStringToNumber = (value: string | number) => {
  return isNaN(Number(value)) ? 0 : Number(value);
};

import { DEFAULT_SLIPPAGE_PERCENTAGE } from '@/config';
import { divide, multiply, subtract } from 'precise-math';

export const calRemainValueOfPercentage = (
  value: bigint | number | string,
  percentage: number | string
) => {
  const valueInNumerType = isNaN(Number(value)) ? 0 : Number(value);
  const percentageInNumerType =
    isNaN(Number(percentage)) || percentage === ''
      ? Number(DEFAULT_SLIPPAGE_PERCENTAGE)
      : Number(percentage);

  const differenceOfOneHundred = subtract(100, percentageInNumerType);

  const percentageOfDiffrence = divide(differenceOfOneHundred, 100);

  return multiply(valueInNumerType, percentageOfDiffrence);
};

export const isNegative = (value: number | string) => {
  const valueInNumerType =
    typeof value === 'string' ? parseFloat(value) : value;
  return valueInNumerType < 0;
};

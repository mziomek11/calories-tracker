export function toDecimalPlaces(num: number, decimalPlaces: number): number {
  if (decimalPlaces < 0) throw Error("Decimal places can't be less than 0");

  const poweredTen = Math.pow(10, decimalPlaces);
  return Math.round(num * poweredTen) / poweredTen;
}

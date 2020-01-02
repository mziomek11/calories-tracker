export function reverseDayMonthYear(date: string): string {
  const [a, b, c] = date.split("-");
  return `${c}-${b}-${a}`;
}

export function dateToISO(date: Date) {
  return date.toISOString().slice(0, 10);
}

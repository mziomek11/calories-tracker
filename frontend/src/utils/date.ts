export function dateToDayMonthYearIso(date: Date) {
  const isoDate = date.toISOString();
  const [year, month, day] = isoDate.slice(0, 10).split("-");
  const dayMonthYearIso = `${day}-${month}-${year}`;

  return dayMonthYearIso;
}

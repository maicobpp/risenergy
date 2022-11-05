export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const dateToEnUs = new Intl.DateTimeFormat('en-US');

export const floatFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
});

export const integerFormatter = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 0,
});

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const removeTime = ((date: string) => {
  return date.substring(0, 10);
});

export const addTime = ((date: string) => {
  return `${date} 00:00:00`;
});

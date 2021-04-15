export const convertDiscountPipe = (value) => {
  if (value.includes('-')) {
    const saleNum = value.replace(/-|%/g, '');
    if (value.includes('%')) {
      return value;
    }
    return `${value}K`;
  }
  return '';
}

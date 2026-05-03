const formatter = new Intl.NumberFormat("us-US", {
  style: "currency",
  currency: "USD",
});

export function formatPrice(amountInMinorUnits: number): string {
  return formatter.format(amountInMinorUnits / 100);
}

export function calculateDiscountedPrice(
  price: number,
  percentage: number,
): number {
  return Math.round((price * (100 - percentage)) / 100);
}

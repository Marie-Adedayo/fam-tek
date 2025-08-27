// src/utils/currency.ts

export const ngn = (n: number): string =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0, // remove decimals (₦1,000 not ₦1,000.00)
  }).format(n);

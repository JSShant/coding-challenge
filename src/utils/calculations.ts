import { DataObject } from "./types";

export function calculateRevenue(data: DataObject): number {
  return data.data
    .filter((entry) => entry.account_category === "revenue")
    .reduce((acc, entry) => acc + entry.total_value, 0);
}

export function calculateExpenses(data: DataObject): number {
  return data.data
    .filter((entry) => entry.account_category === "expense")
    .reduce((acc, entry) => acc + entry.total_value, 0);
}

export function calculateGrossProfitMargin(
  data: DataObject,
  revenue: number
): number {
  const salesRevenue = data.data
    .filter(
      (entry) => entry.account_type === "sales" || entry.value_type === "debit"
    )
    .reduce((acc, entry) => acc + entry.total_value, 0);
  return salesRevenue / revenue;
}

export function calculateNetProfitMargin(
  revenue: number,
  expenses: number
): number {
  return (revenue - expenses) / revenue;
}

export function calculateWorkingCapitalRatio(data: DataObject): number {
  const assets = data.data.reduce((acc, entry) => {
    if (
      entry.account_category === "assets" &&
      (entry.account_type === "current" ||
        entry.account_type === "bank" ||
        entry.account_type === "current_accounts_receivable")
    ) {
      return (
        acc +
        (entry.value_type === "debit" ? entry.total_value : -entry.total_value)
      );
    }
    return acc;
  }, 0);

  const liabilities = data.data.reduce((acc, entry) => {
    if (
      entry.account_category === "liability" &&
      (entry.account_type === "current" ||
        entry.account_type === "current_accounts_payable")
    ) {
      return (
        acc +
        (entry.value_type === "credit" ? entry.total_value : -entry.total_value)
      );
    }
    return acc;
  }, 0);

  return assets / liabilities;
}

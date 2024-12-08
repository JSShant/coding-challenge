import {
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
} from "./utils/calculations";
import { DataObject } from "./utils/types";
import data from "./data/data.json";
import { formatCurrency, formatPercentage } from "./utils/formatters";

const dataObject: DataObject = data;

const revenue = calculateRevenue(dataObject);
const expenses = calculateExpenses(dataObject);
const grossProfitMargin = calculateGrossProfitMargin(dataObject, revenue);
const netProfitMargin = calculateNetProfitMargin(revenue, expenses);
const workingCapitalRatio = calculateWorkingCapitalRatio(dataObject);

console.log(`Revenue: ${formatCurrency(revenue)}`);
console.log(`Expenses: ${formatCurrency(expenses)}`);
console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
console.log(`Net Profit Margin: ${formatPercentage(netProfitMargin)}`);
console.log(`Working Capital Ratio: ${workingCapitalRatio.toFixed(2)}`);

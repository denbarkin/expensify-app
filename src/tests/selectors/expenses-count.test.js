import expenses from "../fixtures/expenses";
import getCountExpenses from "../../selectors/expenses-count";

test('should count total number of expense', () => {
    const result = getCountExpenses(expenses);
    expect(result).toBe(3);
})

test('should count 0 for null array', () => {
    const result = getCountExpenses([]);
    expect(result).toBe(0);
})
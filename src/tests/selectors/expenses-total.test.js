import expenses from "../fixtures/expenses";
import getTotalExpenses from "../../selectors/expenses-total";

test('should sum amount of expenses', () => {
    const total = getTotalExpenses(expenses);
    expect(total).toBe(101030);
})

test('should return 0 if no expenses passed to get Total amount', () => {
    const total = getTotalExpenses([]);
    expect(total).toBe(0);
})

test('should return 100 if ve give only 1 number', () => {
    const total = getTotalExpenses([{amount:100}]);
    expect(total).toBe(100);
})
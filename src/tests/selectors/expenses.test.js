import expenseSelector  from "../../selectors/expenses";
import expenses from "../fixtures/expenses";



test('should filter by text', () => {
    const filters = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };

    const results = expenseSelector(expenses,filters);
    expect(results).toEqual([expenses[2], expenses[1]]);
});
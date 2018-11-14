const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('Add function test', () => {
    const result = add(4,3);
    expect(result).toBe(7);
})

test('Generate Greeting', () => {
    const name = generateGreeting('Barkin');
    expect(name).toBe(name);
})

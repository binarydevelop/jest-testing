const functions = require('./functions');

test('Output should be 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Output should not be undefined', () => {
    expect(functions.add(undefined , 0)).not.toBe(undefined)
})
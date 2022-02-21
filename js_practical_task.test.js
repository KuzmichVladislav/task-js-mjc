// npm test

const {secondsToDate, toBase2Converter, substringOccurrencesCounter, repeatingLitters, redundant, matrixMultiplication}
    = require('./js_practical_task');

test('secondsToDate', () => {
    expect(secondsToDate(5))
        .toStrictEqual(new Date(2020, 0, 2, -21, 0, 5, 0));
})

test('toBase2Converter', () => {
    expect(toBase2Converter(5)).toBe(101)
    expect(toBase2Converter(10)).toBe(1010)
});

test('substringOccurrencesCounter', () => {
    expect(substringOccurrencesCounter('a', 'test it')).toBe(0);
    expect(substringOccurrencesCounter('t', 'test it')).toBe(3);
    expect(substringOccurrencesCounter('T', 'test it')).toBe(3);
});

test('repeatingLitters', () => {
    expect(repeatingLitters('Hello')).toBe('HHeelllloo');
    expect(repeatingLitters('Hello world')).toBe('HHeelllloo  wwoorrlldd');
});

test('redundant', () => {
    expect(redundant('Hello')).toBe('Hello');
    expect(redundant('Hello world')).toBe('Hello world');
});

test('matrixMultiplication', () => {
    const a = [[8, 3], [2, 4], [3, 6]],
        b = [[1, 2, 3], [4, 6, 8]],
        sum = [[20, 34, 48], [18, 28, 38], [27, 42, 57]];
    expect(matrixMultiplication(a, b)).toStrictEqual(sum);
});

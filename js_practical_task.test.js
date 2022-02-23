const {
    secondsToDate,
    toBase2Converter,
    substringOccurrencesCounter,
    repeatingLitters,
    redundant,
    matrixMultiplication,
    towerHanoi,
    gather
}
    = require('./js_practical_task');

test('secondsToDate', () => {
    expect(secondsToDate(31536000))
        .toStrictEqual(new Date("2021-06-01T00:00:00.000Z"));
    expect(secondsToDate(0))
        .toStrictEqual(new Date("2020-06-01T00:00:00.000Z"));
    expect(secondsToDate(86400))
        .toStrictEqual(new Date("2020-06-02T00:00:00.000Z"));
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

test('towerHanoi', () => {
    expect(towerHanoi(3)).toBe(7);
    expect(towerHanoi(4)).toBe(15);
});

test('matrixMultiplication', () => {
    const a = [[8, 3], [2, 4], [3, 6]],
        b = [[1, 2, 3], [4, 6, 8]],
        sum = [[20, 34, 48], [18, 28, 38], [27, 42, 57]];
    expect(matrixMultiplication(a, b)).toStrictEqual(sum);
});

test('gather', () => {
    expect(gather("a", "b", "c")(0, 1, 2)).toBe("abc");
    expect(gather("a", "b", "c")(2, 1, 0)).toBe("cba");
    expect(gather("e", "l", "o", "l", "!", "h")(5, 0, 1, 3, 2, 4)).toBe("hello!");
});

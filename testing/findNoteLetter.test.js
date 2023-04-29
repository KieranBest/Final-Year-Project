const findLetter = require('./findNoteLetter');

test('key with number 79 equals a G', () => {
  expect(findLetter(79)).toBe("G");
});

test('key with number 58 equals a A#', () => {
  expect(findLetter(58)).toBe("A#");
});

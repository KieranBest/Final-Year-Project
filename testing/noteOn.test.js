  const onFunctions = require('./noteOn');

test('note 48 on keyboard should be in position 0 on visual keyboard', () => {
  expect(onFunctions.keyboardOn(48)).toBe(0);
});

test('note 66 on keyboard should be in position 10.75 on visual keyboard', () => {
    expect(onFunctions.keyboardOn(66)).toBe(10.75);
  });

test('note 48 on keyboard should be in position 10.5 on visual staff', () => {
    expect(onFunctions.staffOn(48)).toBe(10.5);
});

test('note 66 on keyboard should be in position 5.5 on visual staff', () => {
    expect(onFunctions.staffOn(66)).toBe(5.5);
});

test('note 66 on keyboard should be added on to notes held list', () => {
    expect(onFunctions.notesHeld(66)).toStrictEqual([62,67,71,66]);
});

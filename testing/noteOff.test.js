const removeNoteFromList = require('./noteOff.js');

test('note 48 on keyboard should be in position 0 on visual keyboard', () => {
    expect(removeNoteFromList(66)).toStrictEqual([62,67,71]
        );
  });

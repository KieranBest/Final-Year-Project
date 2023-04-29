// Releasing a single note uses the exact same method as pressing a note, so no test is needed as it will just become a duplicate.
// Releasing a note on the staff and visual keyboard both use the same method of removing from an array.
notesHeldList=[62,66,67,71]

function removeNoteFromList(note) {
    notesHeldList = notesHeldList.filter(function(without){
        return without !== (note)
    })
    return notesHeldList
}
module.exports = removeNoteFromList;

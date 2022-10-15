"use strict";
let subjects = ["Spider-Man", "Captain America", "Iron Man", "Doctor Strange", "Venom", "Thanos", "Black Panther"];
let predicates = ["benutzt", "isst", "zaubert", "zerstört", "liebt", "will", "besucht"];
let objects = ["das halbe Universum", "Inifinity Steine", "Kuchen", "ein Vibranium Schild", "Zeitmaschine", "New York", "Wakanda"];
for (let i = subjects.length; i > 0; i--) {
    let verseResult = getVerse(subjects, predicates, objects);
    console.log(verseResult);
}
function getVerse(_subjects, _predicates, _objects) {
    let randomSubjects = Math.floor(Math.random() * _subjects.length);
    let randomObjects = Math.floor(Math.random() * _objects.length);
    let randomPredicates = Math.floor(Math.random() * _predicates.length);
    let createdVerse = _subjects[randomSubjects] + " " + _predicates[randomPredicates] + " " + _objects[randomObjects] + "!";
    _subjects.splice(randomSubjects, 1);
    _predicates.splice(randomPredicates, 1);
    _objects.splice(randomObjects, 1);
    return (createdVerse);
}
//# sourceMappingURL=script.js.map
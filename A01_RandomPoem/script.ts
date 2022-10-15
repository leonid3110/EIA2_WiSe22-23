
    let subjects: string[] = ["Spider-Man", "Captain America", "Iron Man", "Doctor Strange", "Venom", "Thanos" , "Black Panther"];
let predicates: string[] = ["benutzt", "isst", "zaubert", "zerstört", "liebt", "will", "besucht"];
let objects: string[] = ["das halbe Universum", "Inifinity Steine", "Kuchen", "ein Vibranium Schild", "Zeitmaschine", "New York", "Wakanda"];

    for (let i: number  = subjects.length; i > 0; i--) {
        let verseResult: string = getVerse(subjects, predicates, objects);
        console.log(verseResult);
        
    }

    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]) {
        
        let randomSubjects: number = Math.floor(Math.random() * _subjects.length);
        let randomObjects: number = Math.floor(Math.random() * _objects.length);
        let randomPredicates: number = Math.floor(Math.random() * _predicates.length);
        

        let createdVerse: string  = _subjects[randomSubjects] + " " + _predicates[randomPredicates]+ " " +_objects[randomObjects] + "!";
        _subjects.splice(randomSubjects, 1);
        _predicates.splice(randomPredicates, 1);
        _objects.splice(randomObjects, 1);
        return(createdVerse);
    }
 


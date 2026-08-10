// Task 1 : marks in letters 

function marksInLetters(mark){

    if(100 < mark || mark < 0){
        console.log("Wrong mark");
        return;
    }

    switch(true){
        case (95 < mark && mark <= 100):
            console.log("Your mark: A");
            break;
        case (90 < mark && mark <= 95):
            console.log("Your mark: B");
            break;
        case (75 < mark && mark <= 90):
            console.log("Your mark: C");
            break;
        case (66 < mark && mark <= 75):
            console.log("Your mark: D");
            break;
        case (60 < mark && mark <= 66):
            console.log("Your mark: E");
            break;
        default:
            console.log("Your mark: F");
    }
}

console.log(marksInLetters(91));
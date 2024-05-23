function checkgrade(exam,marks){
    if(exam == "Final exam" && marks>=90){
        return true;
    }

    else if(exam != "Final exam" && marks>=89){
        return true;
    }

    else{
        return false;
    }
}

console.log(checkgrade("Final exam",90));
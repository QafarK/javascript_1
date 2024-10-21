var mark = 65

switch(true){

    case (mark>0 && mark<=50):
        mark="F"
        break;
    case (mark>50 && mark<=65):
        mark="D"
        break;
    case (mark>65 && mark<=75):
        mark="C"
        break;             
    case (mark>75 && mark<=85):
        mark="B"
        break;
    case (mark>85 && mark<=100):
        mark="A"
        break;
    default:
        console.log("Error")
        break;
}
console.log(mark)
let age = prompt("Enter your age: ");
console.log(+age);




switch (true){
    case (age < 13):
        console.log("Is a minor")
        break;
    case (age >= 13 && age <= 19):
        console.log("Is a teenager")
        break;
    case (age >= 20 && age <= 35):
        console.log("Is a youth")
        break;
    default:
        console.log("Is an adult")
        break;
}

//(age<13) ? console.log("Is a mino") : console.log("is NOT a minor") ? (age >= 13 && age <= 19): console.log("Is a teenager") ? (age >= 20 && age <= 35):  console.log("Is a youth") ? console.log("Is an adult")


/*if (age > 18){
    console.log("Greater than 18")
}else{
    console.log("Not greater than 18")
}
*/

//ask user for age
//if age is below 13, print "Is minor"
//if age is between 13 and 19, print is a teenager
//if age is 20 to 35, print "is a Youth"
//if age is above 35, print "is an adult"

//if (age < 13){
 //   console.log("Is minor");
//}else if (age >= 13 && age <= 19){
  //  console.log("Is a teenager");
//}else if (age >= 20 && age <= 35){
  //  console.log("Is a youth");
//}else{
  //  console.log("Is an adult");
//}
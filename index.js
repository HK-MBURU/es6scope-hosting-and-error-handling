// // Question 1
const user = { id: 339,
name: 'Fred',
age: 42,
education: { degree: 'Masters' } }

const{id,name,age,education}=user
const{degree}=education
console.log(degree);

// 2. Write a JavaScript program to check whether a given number is in a given range. e.g. 60, rage 50-100 returns true

function inRage(num){
    return (num>=50)&&(num<=100)
}
console.log(inRage(60));

// question 3
let name = "Mary";
function greetPeople() { 
    let name = "Clause";
    console.log(`Hello ${name}`) 
}
 greetPeople()

//  the output is Hello Clause

// question 4
let sumOfMarksObtained= 80+77+88+95+68
let total_number_of_students=5
let average=sumOfMarksObtained/total_number_of_students


function gradingSystem(average){
    let grade
    if(average<60){
        grade='F'
    
    }else if(average>60 && average<70){
        grade='D'
    }
    else if(average>70 && average<80){
        grade='C'
    }else if(average>80 && average<90){
        grade='B'
    }else{
        grade='A'
    }
    console.log(`The mean grade is  ${grade}`);
}
gradingSystem(average)

// question 5
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"]

let i=1

while( i<=color.length){
    if(i==1){
        console.log(`${i}${o[1]} choice is ${color[i-1]}`);
    }
    else if(i==2){
        console.log(`${i}${o[2]} choice is ${color[i-1]}`);
    }else if(i==3){
        console.log(`${i}${o[3]} choice is ${color[i-1]}`);
    }else{
        console.log(`${i}${o[0]} choice is ${color[i-1]}`);
    }
    i++

}
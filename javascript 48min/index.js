//VARIABLE

let namee = 'Subodh';
console.log(name);

//cannot be a reserved keyword 
//should be meaningfull 
//cannot start with a n number '1name'
//cannot contain a space or hypen -
// are case sensitive 


let name1 = 'SUBODH';
let lastName = 'kamble'



//COSTANTS
 // cant reassin the constant
// const intrestRate = 0.3;
// intrestRate =  1;
// console.log(intrestRate)

let intrestRate = 0.3;
intrestRate =  1;
console.log(intrestRate)


//primittive types 

let name = 'subodh ' // string litral 
let age = 30; // number litral
let isApproved =true; // boolean Litraal
let firstName = undifined; // 
let selectedColor = null;


//objects in javascript 
let person = {
    name: 'subodh',
    age: 18
};

//dot notation 
person.name = 'sumedh';

//bracket notatio
person['name'] = 'mary'



console.log(person);

//ARRAYS
let selectedColor = ['red', 'blue'];
selectedColor[2] ='green';
console.log(selectedColor);


 //FUNCTIONS performing a task
function greet () {
    console.log('hello ' + name + ' '+ lastName);
}

greet('john');
greet('mary')

// CALCULATING A VALUE
function square(number) {
    return number * number;
}

console.log(square(2));
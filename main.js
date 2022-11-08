// // Variables

// var name = 'Lydia';
// console.log(name);

// // variable name should be meaningful,cannot start with numbers, contain space or hyphen 





// // Uses of let and const
// let price = 250;
// const name = 'Ariyan'
// console.log(price,name);

// // let can be reassigned but const can't
// let goods = 300;
// goods = 400;
// const surname = 'Stephen'
// console.log(goods,surname);





// Primitive data types (string, number, boolean, undefined, null)
// let name = 'Ariyan';
// console.log(typeof name);

// let surname = "Lydia"
// console.log(typeof surname);

// let age = 40;
// console.log(age);

// let isMarried = true;
// console.log(typeof isMarried);

// let colors;
// console.log(typeof colors);

// let myName = undefined;
// console.log(typeof myName);

// let selectColor = null;
// console.log(typeof selectColor);






// Reference type object
// let name = 'Lydia';
// let age = 30;
// let hobby = 'Reading';

// let user = {
//     name : 'Lydia',
//     age : 30,
//     hobby : 'Reading',
// }
// console.log(user);
// // To display single property using dot notation
// console.log(user.name);
// console.log(user.age);

// // To display single property using bracket notation
// console.log(user['hobby']);
// console.log(user['age']);
// console.log(user['name']);







// // JS Array
// let friends = ['Emma', 'Hossy', 'Bryan'] 
// console.log(friends);
// // Arrays starts with 0
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(typeof friends);
// console.log(friends.length);








// JS Function
// function showMyName(){
//     console.log('My name is Lydia');
// }
// showMyName();
// showMyName();

// function showMySurname(name){
//     console.log(name);
// }
// showMySurname('Lee');
// showMySurname('Nazzy');
// showMySurname('Jane');


// function showMyNickname(name){
//     console.log('My name is ' + name);
// }
// showMyNickname('Lizzy');
// showMyNickname('Nazzy');
// showMyNickname('Rapoo');

// let num1 = 30;
// let num2 = 20;
// let sum = num1 + num2;
// let minus = num1 - num2;
// let multiplication = num1 * num2;

// console.log(sum);
// console.log(minus);
// console.log(multiplication);

// function calcSum(num1,num2) {
//     const sum = num1 + num2;
//     return sum;
// }
// const result = calcSum(30,30);
// console.log(result);


// function calcMinus(num1,num2) {
//     const minus = num1 - num2;
//     return minus;
// }
// const output = calcMinus(30,30);
// console.log(output );









// Template Literals
// let name = 'Lydia';
// console.log('My name is ' + name);

// let Surname = 'Stephen';
// console.log(`my Surname is ${Surname} `);
// console.log(`${ 20 + 30}`);
// console.log(`${ name + Surname}`);

// let message = 'my name is \nkazi ariyan';
// console.log(message);

// let myName = `my name is 
// lydia`;
// console.log(myName);






// Exercise
// let person = {
//     name: 'Lydia',
//     age: 40,
//     isMarried: true, 
//     homeAddress: {
//         long: 44.55,
//         lat: 33.44,
//     },
//     friends : ['Lee', 'Rap', 'Presh', 'Leo'],
// };
// console.log(person);
// console.log(person.name);
// console.log(person.homeAddress.lat);
// console.log(person.friends[1]);





// JS Operators

// Arithmetic Operators
// let num1 = 10;
// let num2 = 5;

// console.log(num1 + num2); 
// console.log(num1 - num2); 
// console.log(num1 * num2); 
// console.log(num1 / num2); 
// console.log(num1 ** num2); 
// console.log(num1 % num2); 





// Assignment Operators
// let num1 = 10;
// let num2 = num1;
// console.log(num2);
// console.log(num1,num2);

// num1 = num1 + 5;
// console.log(num1);

// num1 +=5; 
// console.log(num1);

// num1 = num1 - 5;
// console.log(num1);

// num1 -= 5;
// console.log(num1);

// num1 = num1 * 5;
// num1 *= 5;

// num1 = num1 + 1;
// num1 += 1;
// num1++;
// console.log(num1);

// num1 = num1 - 1;
// num1 -= 1;
// num1--;
// console.log(num1);








// Comparison Operator
// < > <= >= === !==

// let price = 200;

// console.log(price > 300);
// console.log(price >= 200);
// console.log(price < 100);
// console.log(price <= 500);
// console.log(price === 500);
// console.log(price !== 500);






// // Logical Operator
// // and(&&), or(||), not(!)

// let goods = 10;
// console.log(goods > 5 && goods < 15);
// // true && true

// console.log(goods > 50 || goods < 20);

// console.log(!(goods > 50));
// console.log(!(goods > 5));







// Equality Operators

// let price = 10;

// console.log(price === 10);
// console.log(price !== 10);

// console.log(price == 10);
// console.log(price != 10);

// console.log(price === '10');





// // Problem: Swap two numbers

// let apple = 10;
// let orange = 20;
// apple = orange;
// orange = apple;
// console.log(apple, orange);

// let guava = 10;
// let kiwi = 20;
// let temp = guava

// guava = kiwi;
// kiwi = temp;
// console.log(guava, kiwi);







// Conditional Statements
// if(condition1){
//     statements
// }else if(condition2){
//     statements
// }else if(condition3){
//     statements
// } else{

// }


// let number = 10;

// if(number > 0){
//     console.log('This is a positive number')
// }else if(number < 0){
//     console.log('This is a negative number')
// }else{
//     console.log('This is a zero number')

// }


// let digit = -10;

// if(digit > 0){
//     console.log('This is a positive number')
// }else if(digit < 0){
//     console.log('This is a negative number')
// }else{
//     console.log('This is a zero number')

// }


// let numeric = 0;

// if(numeric > 0){
//     console.log('This is a positive number')
// }else if(numeric < 0){
//     console.log('This is a negative number')
// }else{
//     console.log('This is a zero number')

// }






// // Conditional Statement 
// // Switch case

// let color = 'black';

// switch (color){
//     case 'black':
//         console.log('This is black');

//     case 'white':
//         console.log('This is white');

//     case 'red':
//         console.log('This is red');
// }


// let col = 'black';

// switch (col){
//     case 'black':
//         console.log('This is black');
//         break;

//     case 'white':
//         console.log('This is white');
//         break;

//     case 'red':
//         console.log('This is red');
//         break;
// }








// // Conditional Statement 
// Ternary Operator

// let num1 = 10;
// let num2 = 2;

// let maxValue;
// if(num1 > num2){
//     maxValue = num1;
// }else{
//     maxValue = num2;
// }

// let max = num1 > num2 ? num1 : num2;
// console.log(maxValue);
// console.log(max);







// Problem : FizzBuzz
// Take a Number
// If it is divisible by 3, Print Fizz 
// If it is divisible by 5, Print Buzz 
// If it is divisible by both 3 & 5, Print Fizzbuzz 
// Otherwise print Nothing. 

let number = 10;
if(number % 3 === 0 && number % 5 === 0){
    console.log('Fizzbuzz');
}
else if(number % 3 === 0){
    console.log('Fizz')

} 
else if(number % 5 === 0){
    console.log('Buzz')

}
else{
    console.log('Nothing')
    
}


let Number = 15;
if(Number % 3 === 0 && Number % 5 === 0){
    console.log('Fizzbuzz');
}
else if(Number % 3 === 0){
    console.log('Fizz')

} 
else if(Number % 5 === 0){
    console.log('Buzz')

}
else{
    console.log('Nothing')
    
}


let count = 16;
if(count % 3 === 0 && count % 5 === 0){
    console.log('Fizzbuzz');
}
else if(count % 3 === 0){
    console.log('Fizz')

} 
else if(count % 5 === 0){
    console.log('Buzz')

}
else{
    console.log('Nothing')
    
}


// Fizzbuzz exercise using ternary operator
let digit = 16;
console.log(
digit % 3 === 0 && digit % 5 === 0
? 'Fizzbuzz'
:digit % 3 === 0
? 'Fizz'
:digit % 5 === 0
? 'Buzz'
: 'Nothing'
);







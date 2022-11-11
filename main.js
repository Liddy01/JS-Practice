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

// let number = 10;
// if(number % 3 === 0 && number % 5 === 0){
//     console.log('Fizzbuzz');
// }
// else if(number % 3 === 0){
//     console.log('Fizz')

// } 
// else if(number % 5 === 0){
//     console.log('Buzz')

// }
// else{
//     console.log('Nothing')
    
// }


// let Number = 15;
// if(Number % 3 === 0 && Number % 5 === 0){
//     console.log('Fizzbuzz');
// }
// else if(Number % 3 === 0){
//     console.log('Fizz')

// } 
// else if(Number % 5 === 0){
//     console.log('Buzz')

// }
// else{
//     console.log('Nothing')
    
// }


// let count = 16;
// if(count % 3 === 0 && count % 5 === 0){
//     console.log('Fizzbuzz');
// }
// else if(count % 3 === 0){
//     console.log('Fizz')

// } 
// else if(count % 5 === 0){
//     console.log('Buzz')

// }
// else{
//     console.log('Nothing')
    
// }


// // Fizzbuzz exercise using ternary operator
// let digit = 16;
// console.log(
// digit % 3 === 0 && digit % 5 === 0
// ? 'Fizzbuzz'
// :digit % 3 === 0
// ? 'Fizz'
// :digit % 5 === 0
// ? 'Buzz'
// : 'Nothing'
// );







// Grading system 
// Take a Number
// If the mark is in between 80-100, print "A+"
// If the mark is in between 70-79, print "A+" 
// If the mark is in between 60-69, print "A-" 
// If the mark is in between 50-59, print "B" 
// If the mark is in between 40-49, print "C" 
// If the mark is in between 33-49, print "D" 
// If the mark is in between 0-32, print "F" 
// Also point out the invalid marks


// let mark = 90;

// if(mark >=80 && mark<=100){
//     console.log('A+');
// }else if(mark >= 70 && mark <= 79){
//     console.log('A');

// }else if(mark >= 60 && mark <= 69){
//     console.log('A-');
// }else if(mark >= 50 && mark <= 59){
//     console.log('B');
// }else if(mark >= 40 && mark <= 49){
//     console.log('BC');
// }else if(mark >= 33 && mark <= 39){
//     console.log('D');

// }else if(mark >= 0 && mark <= 32){
//     console.log('F');
// }else{
//     console.log('Invalid mark')
// }




// // Grading system 
// // Switch case with multiple logical operators
// // Take a Number
// // number > 0
// // number === 0
// // number < 0

// let grade = 1;

// switch(true){
//     case grade > 0:
//     console.log('This is a postive number');
//     break;

//     case grade === 0:
//     console.log('This is a zero number');
//     break; 

//     case grade < 0:
//     console.log('This is a negative number');
//     break;
// }





// Loops
// For loop

// console.log('Hi my name is Ariyan');
// console.log('Hi my name is Ariyan');
// console.log('Hi my name is Ariyan');
// console.log('Hi my name is Ariyan');

// for(let index = 1; index <= 5; index++){
//     console.log('Hi I am Jovita',index);
// }

// for(let index = 1; index <= 3; index++){
//     console.log('goodbye everyone', index)
// }

// for(let index = 5; index >= 1; index--){
//     console.log('Hi I am Jovita',index);
// }




// // While loop
// let index = 1;
// while(index <= 5){
//     console.log('Hi Steve', index)
//     index++;
// }

// let box = 3;
// while(box >= 1){
//     console.log('Hi Steve', box)
//     box--;
// }




// // Do while loop
// let service = 1;
// do{
//     console.log('Hey you',service);
//     service++;
// } while(service <= 5);




// // For in loop
// const objs = {
//     name : 'Grace',
//     age : 10,
// }

// for (let key in objs){
//     console.log(key, objs[key])
// }


// let numbers = [1,2,3,4,5];
// console.log(numbers);

// for (let index in numbers){
//     console.log(index, );
// }

// let counts = [1,2,3,4,5];
// console.log(counts);

// for (let index in counts){
//     console.log(index,counts[index]);
// }



// // For of loop
// let digits = [1,2,3,4,5,6];
// console.log(digits);

// for (let index in digits){
//     console.log(index);
// }

// for (let num of digits){
//     console.log(num);
// }







// Break & Continue

// for (let index = 1; index <=20; index++){
//     console.log(index);

//     if (index === 10){
//         break;
//     }

// }


// for (let index = 1; index <=20; index++){
//     if (index === 10){
//         break;
//     }
//     console.log(index);

// }

// for (let index = 1; index <=20; index++){
//     if (index === 10){
//         continue;
//     }
//     console.log(index);

// }




// // Infinite loop
// for (let index = 1; ; index++){
//     console.log(index);
// }



// Nested loop

// for (let ariyan = 1; ariyan <= 3; ariyan++){

//     for(let kazi = 1; kazi<=3; kazi++){
//         console.log(ariyan,kazi);
//     }
// }








// String
// Basics
// let country = 'India';
// console.log(country);
// console.log(typeof country);

// console.log(country[2]);
// console.log(country.charAt(2));

// console.log(country[7]);
// console.log(country.charAt(7));



// // Strings Method charAt to uppercase, lowercase

// let message = 'My name is Lydia';
// console.log(message);
// console.log(message.charAt(1));
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// // To find out if a particular name is included
// console.log(message.includes('Steve'));
// console.log(message.includes('name'));
// console.log(message.includes('lydia'));
// console.log(message.includes('Lydia'));

// console.log(message.startsWith('Lydia'));
// console.log(message.startsWith('My'));

// console.log(message.endsWith('Lydia'));
// console.log(message.endsWith('My'));



// // search, indexOf and lastIndexOf
// let definiton = 'Hi My name is Hi Lydia';
// console.log(definiton);
// console.log(definiton.search('Hi'));
// console.log(definiton.indexOf('Hi'));
// console.log(definiton.lastIndexOf('Hi'));




// // Strings Method toString, Concat and Split
// let myName = 'Hi My name is Hi Lydia';
// let temp = 123;
// console.log(typeof(temp));
// console.log(temp.toString());
// console.log(typeof temp.toString());

// let isMarried = false;
// console.log(typeof isMarried.toString());

// let numbers = [1,2,3,4,5];
// console.log(numbers);
// console.log(typeof numbers.toString());


// // Concat
// let News = "The Lord is always good to me";

// let N1= 'The Lord';
// let N2= ' is always';
// let N3 = ' good to me';
// let N = N1.concat(N2, N3);
// console.log(N);

// let letter = "The Lord is always good to me";

// let l1= 'The Lord';
// let l2= ' is always';
// let l3 = ' good to me';
// let l = l1 + l2 + l3;
// console.log(l)


// // Split
// let heading = 'My name is Nenye Lydia';
// console.log(heading.split(' '));
// console.log(heading.split(''));





// // Strings Method slice, substring

// // Slice
// let text = 'Hi my name is Nenye Lydia';
// console.log(text.slice(0,4));
// console.log(text.slice(0,5));
// console.log(text.slice(6,12));
// console.log(text.slice(2));
// console.log(text.slice());
// console.log(text.slice(0));
// console.log(text.slice(-12,-1));


// // Substring used as slice
// console.log(text.substring(0,3));
// console.log(text.substr(0,3));





// // Escape Sequences
// // Hi Lydia "It's a nice course" (publish it)
// // How are you? (add this in another line)

// let subject = 'Hi Lydia "It\'s a nice course".\nHow are you?';
// console.log(subject);

// let Guest = '\tThank you for coming\\attending our wedding.\nWe appreciate "your presence".\nIt\'s overwhelming.'
// console.log(Guest)





// // String Immutability
// // [strings cannot be changed but reassigned]
// let greeting = 'Ji Nenye';
// greeting[0] = 'H';
// console.log(greeting);

// let course = 'Ji Nenye';
// course = 'Hi Nenye'
// course = 'Hi Nenye ' + 'how are you'
// console.log(course)


// let chat = 'Hi Nenye';
// chat = chat + ' \nhow are you'
// console.log(chat)







// Javascript Objects
// Dot bracket notation
// let name = 'Gift';
// let age = 20;
// let hobby = 'hiking';
// let user = {name, age, hobby};
// console.log(user);

// const profile = {
//     name: 'Gift',
//     age: 20,
//     hobby: 'hiking',  

// }
// console.log(profile);
// console.log(profile.hobby);
// console.log(profile['age']);



// Javascript Manipulation

// ADD
// const user = {
//         name: 'Gift',
//         age: 20,
//         hobby: 'hiking',  
//         isMarried: true
    
//     }

//     user.email = 'lydia@gmail.com';
//     user.phone = '07067570982';
//     user['telephone'] = '08064076389';
//     user['1-asd phone'] = '080640455689';

// let key = '2-asd tel';
// user[key] = 'hjdjhkfjkkkkkkh'

// // UPDATE
// user.isMarried = false;
// user.age=user.age + 5;



// // Delete
// delete user.age;
// console.log(user);





// Object Methods and "This" keyword

// const user = {
//     name: 'Frank',
//     age: 30,
//     isMarried: true,
//     friends: ['Praise', 'Leo', 'Tina'],
//     selectColor: null,
//     calculateAge: function(){
//         console.log(`I am ${this.age} Frank Steve`);
//     }
// };
// user.calculateAge();




// // Traversing Object
// const user = {
//     name: 'Frank',
//     age: 30,
//     gender:'Male',
//     phone: '3434343',
//     email:'lydia@gmail.com',
// };

// for(let key in user){
//     console.log(key);
// }


// // First way
// const username = {
//     name: 'Frank',
//     age: 30,
//     gender:'Male',
//     phone: '3434343',
//     email:'lydia@gmail.com',
// };

// for(let key in username){
//     console.log(key, user[key]);
// }

// // Second way
// console.log(Object.keys(user));
// console.log(Object.values(user));

// for(let val of Object.values(user)){
//     console.log(val);
// }




// Exercise traversing Object


// const salaries = {
//     Joy: 2000,
//     Grace: 3000,
//     Leo: 4000,
//     Jcee: 5000,
//     Bless: 6000,
// }

// let sum = 0;

// for(let key in salaries){
//     console.log(key, salaries[key]);
//     sum = sum + salaries[key];
// }

// console.log(sum);



// const wages = {
//     Joy: 2000,
//     Grace: 3000,
//     Leo: 4000,
//     Jcee: 5000,
//     Bless: 6000,
// }

// let addition = 0;

// for(let key in salaries){
//     console.log(key, salaries[key]);
//     addition += salaries[key];
// }

// console.log(addition);





// const Rent = {
//     Bless: 7000,
//     Nenye: 11000,
//     Victor: 5000,
//     Emma: 5000,
//     Rapoo: 6000,
// }

// let total = 0;

// console.log(Object.values(Rent));

// for (let val of Object.values(Rent)){
//     total += val;
// }
// console.log(total);







// Object Destructing
// const user = {
//     name: 'Victor',
//     age: 22,
//     favBook: {
//         bookname: 'Think and grow rich',
//         bookauthor: 'Zick',
//     },
// };
// console.log(user);
// console.log(user.age);
// console.log(user.favBook);
// console.log(user.favBook.bookname);
// console.log(user.favBook.bookauthor);


// const username = {
//     name: 'Victor',
//     age: 22,
//     favBook: {
//         bookname: 'Think and grow rich',
//         bookauthor: 'Zick',
//     },
// };

// // This is the Object destructuring---- const{name, age, favBook} = username.....
// const {name, age, favBook} = username; 
// const {bookname, bookauthor} = favBook;  


// console.log(username);
// console.log(username.age);
// console.log(username.favBook);
// console.log(username.favBook.bookname);
// console.log(username.favBook.bookauthor);






// Cloning an Object

// const user = {
//     name: 'Kazi',
//     age: 40,
// };

// const copiedUser = {};
// copiedUser.name = user.name;
// copiedUser.age = user.age;

// for(let key in user){
//     console.log(key,user[key]);
// copiedUser[key] = user[key];

// }


// Using another method

// const copiedUser = Object.assign({},user);
// console.log(copiedUser);




// Math Object
// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.round(4.9));



// JSON DATA FORMAT[no addition of undefined value and function]

// const user = {
//     name: 'Kazi',
//     age : 40,
// }

// // To change object to JSON  
// const jsonData = JSON.stringify(user);

// // To change JSON to object
// console.log(JSON.parse(jsonData));
// console.log(jsonData);








// FUNCTIONS

// Function Declaration

// function aboutMe() {
//     const message = `I am Lydia and I am 26 years old`;
//     console.log(message)
    
// }

// // Function Call
// aboutMe();



// // Function Declaration
// function aboutMyself(name,age) {
//     const text = `I am ${name} and I am ${age} years old`;
//     console.log(text)
    
// }

// // Function Call
// aboutMyself('Blessing',20);
// aboutMyself('Peace',18);


// let num1 = 20;
// let num2 = 30;
// add = num1 + num2
// console.log(add),
 



// function calcSum(number1,number2){
//     let sum = number1 + number2;
// return sum; 
// }

// let result = calcSum(10,20);
// console.log(result)





// Default Parametres

// function calcSum(number1,number2,number3){
//         let sum = number1 + number2 + number3;
//        return sum; 
//  }
// console.log(calcSum(10,20,30));



// function calcSum(num1,num2 = 40,num3 = 50){
//     let sum = num1 + num2 + num3;
//    return sum; 
// }
// console.log(calcSum(30));




// Function Expression

// Default Parametres
// function calcSum(number1,number2){
//         let sum = number1 + number2;
//     return sum; 
//     }
    
//     console.log(calcSum(10,20));

//  // Function Expression
//     const calSumExp = function(number1,number2){
//         let sum = number1 + number2;
//         return sum;
//     }
//     console.log(calSumExp(50,60));








// Arrow Function
// const calSumArr = (number1,number2) => number1 + number2;
// console.log(calSumArr(40,30));



// // Function Expression
// const mulByTwo = function(number1){
//     return number1 * 2;
// }
// console.log(mulByTwo(6));

// // Arrow Function
// const mulByTwoArr = (number1) => number1 *2;
// console.log(mulByTwoArr(6));







// Rest Parametre
function multiply(number1, number2, number3){
    return number1 * number2 * number3;
}
console.log(multiply(2,3,4));

// For multiple numbers
function multiply(...args){
    console.log(args);

    let mulp = 1;
    for (let num of args){
        mulp = mulp * num;
    }
    return mulp;
} 
console.log(multiply(2,3,4,5,6));
console.log(multiply(2,3,4,5,6,10,9,8,7));

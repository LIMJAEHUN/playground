

const Note = () => {
  
  /*
    //console.log(age);
    let globalName = 'global name';
    {
    let name = 'jaehun';
   // console.log(name)
    name = 'jhun';
   
    }
    
  //  console.log(age);
    age = 4 
    var age;
// var
// 나중에 선언 되어도 오류가 안나고 실행이 된다
// {} 블록 도 무시하고 호출 이 되기 때문에 가끔 이상한 값이 나오는 ㅎㄴ상 발생
   // name = "아니";
    //let name;

const char = 'c';
const brendan = "brendan";
const greeting = 'hello' + brendan;
//console.log(`value: ${greeting} , type: ${typeof greeting}`);
const helloBob =` hi  ${brendan}!`;
//console.log(`value: ${helloBob} , type: ${typeof helloBob}`);

const Symbol12 = Symbol('id');
const Symbol13 = Symbol('id');
// symbol 고유한 식별자를 만들어 줄때 사용  Symbol12,Symbol13 이 두개의 값은 현재 고유한 식별자 이기에 값이 다르다

const Symbol1 = Symbol.for('id');
const Symbol2 = Symbol.for('id');
//console.log(Symbol1 === Symbol2);
// .for 를 붙여서 사용하면 전에 symbol로 만든 식별자랑 동일한 식별자를 만들어 Symbol1,Symbol2에 값은 현재 같다



// Equality

const stringFive = '5';
const nunberFive = 5;

console.log(stringFive == nunberFive);
console.log(stringFive != nunberFive);
// ==
// 타입 이랑 상관없이 값만 보고 판단한다
console.log(stringFive === nunberFive);
console.log(stringFive !== nunberFive);
// ===
// 값이 같아도 타입을 보고 판단한다


const jae = { name: 'hun'};
const jae2 = {name: 'hun'};
const jae3 = jae;
console.log(jae == jae2); // object의 경우 값이 같아도 reference 가 다르므로  false 반환
console.log(jae == jae3); // object의 경우 값이 같고 reference 도 동일함으로 true 반환 
*/


/*function
function printHello() {
    console.log("Hello");

}

printHello();

function log(message){
    console.log(message);

}
log("Hello12");
log(1234);
*/

//Parmaters

// function changeName(obj){
//     obj.name = 'coder';

// }

// const ellie = { name: 'ellie'};
// changeName(ellie);
// console.log(ellie);

// function sum(a,b){
//     return a + b;
// }
// const result = sum(1,2);
// console.log(`sum: ${sum(1,2)}`);

// function randomQuiz(answer, printYes, printNo){
//     if(answer === 'loveyou'){
//         printYes();
//     } else {
//         printNo();
//     }
// }
// const printYes = function () {
//     console.log("yes!");
// }
// const printNo = function () {
//     console.log("No!");
// }
// randomQuiz( "loveyou",printYes,printNo);
// randomQuiz( "fuckyou",printYes,printNo);


// 계산기 함수
// function calculate ( command , a ,b){
//     switch(command){
//         case 'add':
//             console.log(a+b);
//             break;
//         case 'divide':
//             console.log(a/b);
//             break;
//         case 'substract':
//             console.log(a-b);
//             break;
//         case 'multiply':
//             console.log(a*b);
//             break;
//         case 'remainder':
//            console.log(a%b);
//             break;
//     }
// }
// calculate('add' , 1,2);
// calculate('divide' , 12,2);
// calculate('substract' , 21,2);
// calculate('multiply' , 4,2);
// calculate('remainder' , 5,2);


//class
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     speak(){

//         console.log(`${this.name}:hello!`);
//     }
// }
// const ellie = new Person('ellie',21);
// console.log(ellie.name);
// console.log(ellie.age);
// ellie.speak();


// class
//     class User{
//         constructor(firstname,lastname, age){
//             this.firstname = firstname;
//             this.lastname = lastname;
//             this.age = age;
//         }

//     get age() {
//         return this._age;
//     }
//     set age(value){
//         this._age = value <0 ? 0 :value;
//     }

//     }
// const user1 = new User('Lim','jaehun',-1);
// console.log(user1.age);

// class Shape{
//     constructor(width, height, color){
//         this.width = width;
//         this.height= height;
//         this.color = color;
//     } // 필드정의

//     draw(){
//         console.log(`drawing ${this.color} color of`);
//     }

//     getArea() {
//         return this.width * this.height;
//     }

    
// }
// class Rectangle extends Shape {}
// class Triangle extends Shape {

//     draw() {
//         super.draw();
//         console.log('▲');
//     }
//     getArea() {
//         return (this.width * this.height)/2;
//     }

// }

// const  rectangle = new Rectangle(20,20, 'blue');
// rectangle.draw();
// console.log(rectangle.getArea())
// const  triangle = new Triangle(20,20, 'blue');
// triangle.draw();
// console.log(triangle.getArea())

// object

const obj1 = {}; 
const obj2 = new Object ();

const name = 'ellie';
const age = 23;
function print(person) {
    //console.log(person.name);
    //Wconsole.log(person.age);
}

const ellie = { name:  'ellie', age:4 };
//print(ellie);
    //console.log(ellie.name);
   // console.log(ellie['name']);

function printValue(obj, key){
   // console.log(obj[key]);

}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 객체 만들기 
// const person1 = {name: 'bob', age:21};
// const person2 = {name: 'jea', age:23};
// const person3 = {name: 'hun', age:24};
// const person4 = {name: 'lim', age:25};


// constructor function
const person5 = new Person('jae', 24);
//console.log(person5);
function Person( name , age){
        this.name = name;
        this.age = age;

}


// in operator 키가 있는지 없는지 확인
// console.log('name' in ellie);
// console.log('age' in ellie);
// console.log('ran' in ellie);

//     for  (let i in ellie ) {
//         console.log(i);
//     }
// const array = [1,2,3,4,5]

//     for (let value of array){
//         console.log(value);
//     }

// Fun cloning

    const user = { name:'ellie', age: 20};
    const user2 = user;
    user2.name = 'jae';
    //console.log(user);
    const user3 = {};
    for ( let value in user){
        user3[value] = user[value];
    }

    //console.log(user3);
    // const user4 ={};
    // Object.assign(user4, user);
    // console.log(user4);

    // const user4 = Object.assign({}, user);
    // console.log(user4);

    // const fruit = ['사과', '바나나', '오렌지', '딸기'];

    // for ( let i = 0; i < fruit.length; i++ ){

    //     //console.log(array[i]);
    // }

    // for ( let i of fruit){
    //     console.log(i);
    // }
    // // fruit.forEach (function (fruit, index)  {

    // //     console.log( fruit, index);
    // // })
    // fruit.forEach ((fruit) =>  console.log( fruit))

    // fruit.push('포도','멜론');
    // //console.log(fruit);
    // fruit.pop();
    // //console.log(fruit);

    // fruit.unshift('맥주','소주')
    // console.log(fruit)
    // fruit.shift()
    // console.log(fruit)

    // const fruit = ['사과', '바나나', '오렌지', '딸기'];
    // console.log(fruit);
    // fruit.splice(1,1,"버섯","수박");
    // console.log(fruit);
    // const fruit2 = ["맥주","소주"];
    // const newfruit = fruit.concat(fruit2);
    // console.log(newfruit);

//const fruit = ['사과', '바나나', '오렌지', '딸기'];
  //   const fruit2 = fruit.join(', and');
     //console.log(fruit2);

   // const fruit3 = '사과, 바나나, 오렌지, 딸기';
    //const fruit4 = fruit3.split(',' ,2);
  //  console.log(fruit4);

    // reverse
    // const array = ['1','2','3','4','5'];
    // const array2 = array.reverse();
    // console.log(array2);
    
    
    // splice
    // const array = ['1','2','3','4','5'];
    // const array2 = array.splice(0,2);
    // console.log(array);
    // console.log(array2);

    
    // const array = ['1','2','3','4','5'];
    // const array2 = array.slice(2,5);
    // console.log(array);
    // console.log(array2);

   

    class Student {

        constructor( name , age, enrolled,score){
                this.name = name;
                this.age = age;
                this.enrolled = enrolled;
                this.score = score; 
        }
    }
    const students = [
        new Student('A',29,true,45),
        new Student('B',28,false,85),
        new Student('C',40,true,55),
        new Student('D',15,true,65),
        new Student('E',21,true,75),
    ];

  {  const result = students.find((student) => student.score === 65)
        //console.log(student,index);
    //console.log(result);
}
{  const result = students.filter((student) => student.enrolled);
    //console.log(student,index);
    //console.log(result);
}
{
    const result = students.map((student) => student.score);
    //console.log(result);
}
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
}
{
    const result = students.every((student) => student.score < 50);
    console.log(result);
}


    return(
        <div> 연습장 용도</div>
    )


}
export default Note;
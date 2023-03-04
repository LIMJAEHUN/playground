import JsonNote from "./Jsonnote";

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
   // console.log(result);
}
{
    const result = students.every((student) => student.score < 50);
  //  console.log(result);
}
{
    const result = students.reduce((prev, curr) =>prev + curr.score,0);
  //  console.log(result /students.length);
}
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
   // console.log(result);
}
{
    const result =students
    .map((student)=> student.score)
    .sort((a,b) => b - a)
    .join();
 //   console.log(result);

 const array = [ 'apple' , 'banana', 'orange'];
 // 배열을 string 으로 변환하기 
 // join 
 // - 배열에 있는 모든 아이템을 더해서 문자형으로 반환해준다
 // - 단순히 변환하는 것이 아니라 separator 로 전달 받은 문자열을 통해서 각 구문자를 넣어서 string으로 만든다

    {
        const result = array.join(' and '); // , limit 전달
       // console.log(result);
    }
// 주어진 문자열을 배열 만들기
// split
// - 구분 문자 , limt(개수)을 전달 받아 string을 여러가지의 문자열로 잘개 나누어준다 
   {
    const array2 = '소주 ,맥주 ,소맥';
    const result = array2.split(',' , 2); // , limit 전달 , 구분 문자 없을시 하나로 묶여 배열로 만들어진다
 //   console.log(result);

 // 배열 거꾸로 뒤집기
 // reverse
 // 배열에 있는아이템으 순서를 거꾸로 만든다
 // 배열 자체의 순서를 뒤집기 때문에 현재 array도 값이 거꾸로 된 상태 


    {
        const array = [ '1','2','3','4','5'];
        const result = array.reverse();
        //console.log(result);
    }
    
 // 주어진 배열에서 앞에 두개 제거 하기
 // splice , 
 // 배열을 수정해서 리턴
 // slice
 // 배열의 수정하지 않고 특정한 부분만 리턴
 
 {
    const array = [ '1','2','3','4','5']; // splice 사용시 기존에 있는 배열은 변경사항 없음
    const result = array.splice(0,2); // 배열의 0부터 2까지 아이템을 삭제한 후 나머지 값을 변수에 넣는다
    console.log(result);
}

// 50정 이상인 학생 찾기
// find
// 배열에서 전달된 콜백함 수가 true (콜백함수는 boolean 타입을 리턴해야한다)가되면 첫번째로 찾아진 함수를 리턴 한다
// 콜백 함수를 만들어서 전달해야하는 점 잊지말자
{
    const result = students.find((student) => student.score === 65)
   // console.log(result);
}
{
    const result = students.find(function(student) {
        return student.score ===65;
        
    }); 
    //console.log(result);
}
// 수업에 등록한 학생만 출력하기
// filter

{
    const result = students.filter(function(student) {
        return student.enrolled;

    });
  //  console.log(result);
}
{
    const result = students.filter((student)=>student.enrolled)
    //console.log(result);
}
// 학생들의 점수만 가져와 배열 만들기
// map
// 배열 안의 있는 요소 한가지 한가리를 다른 것으로 바꿔주는 것
// 콜백함수를 호출 하여 배열을 거쳐 각각의 다른 요소로 바꿔준다
// 배열의 요소들을 콜백 함수 안에 넣어 각가지 다른 요소들로 만든다
// 배열안에 있는 모든 요소들을 전달 받은 콜백함수로 가공하여 대체 한다

{
    const result = students.map((student) => student.score)
   // console.log(result)
}
// 학생들중에 60점 아래있는 사람이 있는지 확인하기
// some
// 배열에서 하나라도 만족하는 것이 있으면 true 리턴
// every
// 배열에 들어 있는 모든 요소들이 조건을 충족하여야 true 리턴
{
    const result = students.some((student) => student.score <= 60)
   // console.log(result);
    const result2 = !students.every((student) => student.score >= 60)
    //console.log(result2);
}
// 학생들의 평균구하기
// redurce
// 전달하는 콜백함수에서 값을 리턴할때 누적된 값을 전달
// 배열안에있는 모든값을 누적할때(모을때 )
// 시작점 부터 모든 배열을 돌면서 특정값을 누적할떄 사용
{
    const result = students.reduce( (prev,curr)=>prev + curr.score,0);
    //console.log(result / students.length);
}
// 학생들의 점수 만 모아서 문자열인 배열로 만들기
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >=70)
    .join();
    //console.log(result);
}
// 학생들의 배열을 낮은 점수 순으로 문자열 배열로 만들기
// sort
// 콜백함수로 a , b 현재값과 이전값이 전달이된다
// 만약 - 값을 리턴하면 처음보다 작다고 간주 되어 저서 정렬이된다 
{
    const result = students
    .map((student)=> student.score)
    .sort((a,b) =>a-b)
    .join();
    console.log(result);
}

   } 


}
    return(
        <>
        <div> 연습장 용도</div>
        <JsonNote/>
        </>
     
        
    )


}
export default Note;
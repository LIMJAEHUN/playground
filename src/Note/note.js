
const Note = () => {
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






    return(
        <div> 연습장 용도</div>
    )


}
export default Note;

const Note = () => {
    console.log(age);
    let globalName = 'global name';
    {
    let name = 'jaehun';
    console.log(name)
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
console.log(`value: ${greeting} , type: ${typeof greeting}`);
const helloBob =` hi  ${brendan}!`;
console.log(`value: ${helloBob} , type: ${typeof helloBob}`);

const Symbol12 = Symbol('id');
const Symbol13 = Symbol('id');
// symbol 고유한 식별자를 만들어 줄때 사용  Symbol12,Symbol13 이 두개의 값은 현재 고유한 식별자 이기에 값이 다르다

const Symbol1 = Symbol.for('id');
const Symbol2 = Symbol.for('id');

// .for 를 붙여서 사용하면 전에 symbol로 만든 식별자랑 동일한 식별자를 만들어 Symbol1,Symbol2에 값은 현재 같다
console.log(Symbol1 === Symbol2);
    return(
        <div> 연습장 용도</div>
    )


}
export default Note;
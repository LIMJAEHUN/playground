import styled from "styled-components";

const Test = styled.div`
    width: 200px;
    background-color: blue;
`

const callbackhell =()=>{

    //
    // 자바스크립트는 동기적
    // 호이스팅이 된 이후부터 하나하나 순서대로 실행되는 아이
    //호이스팅이란?
    // var , function declaration 선언들이 자동적으로 제일 맨위로 올라가는것
    // 호이스팅이 된 이후부터 코드가 나타나게 된 순서대로 나타난다
    // 바로 작동하는 콜백 함수
    console.log('1');
    setTimeout(() => console.log("2"),1000);
    console.log('3');
    function printImdiately(print){
        print();
    }
    printImdiately(()=> console.log("hello"));

    function printWithdiately(print, timeout) {
        setTimeout(print, timeout);
    }
    printWithdiately(()=> console.log('async callbackk'), 2000)
    
    class UserStorage{
        loginUser(id, password ){
            return new Promise((resolve,reject) =>{
                setTimeout( ()=>{
                    if(
                        (id === 'ellie' && password ==='dream') ||
                        (id ==='cooder' && password ==='academy')    
                    ){
                        resolve(id);
                    } else{
                        reject(new Error('not found'));
                    }
    
                },2000);

            })
            
        }
        getRoles(user){
            return new Promise((resolve,reject)=>{
                setTimeout(()=> {
                    if (user === 'ellie'){
                        resolve({name: 'ellie', role:'admi'});
                    } else{
                        reject( new Error('no access'));
                    }
                }, 1000);
            })
           
        }
       
    }
    // const userStorage = new UserStorage();
    // const id = prompt('enter your id');
    // const password = prompt('enter your passwrod');
    // userStorage
    // .loginUser(id,password)
    // .then(userStorage.getRoles)
    // .then(user => alert(`hello ${user.name}, you have a ${user .role} role`))
    // .catch(console.log);
     
        
    const userStorage = new UserStorage();
    const id = prompt('enter your id');
    const password = prompt('enter your passwrod');

    userStorage.loginUser(id, password)
    .then(user => alert(`hello ${user.name}, you have a ${user .role} role`) )
    .catch(console.log);

    // userStorage.loginUser(
    //     id,
    //     password, 
    //     user => {
    //         userStorage.getRoles(
    //             user, 
    //             userWithRole => {
    //                 alert(`hello ${userWithRole.name}, you have a ${userWithRole .role} role`)
    //             },
    //             error => {
    //                 console.log(error)
    //             })
    //     },
    //     (error) =>{console.log(error)}
    //     );

return(
    <Test> callback 복사본</Test>
)

}

export default callbackhell;
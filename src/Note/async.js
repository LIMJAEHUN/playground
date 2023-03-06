

const Asynctest =()=>{

    //async & await
    // promise 를 깔끔하게 사용하기 위해 사용되기도한다
//  function fetchUser(){

//         return new Promise((resolve, reject)=>{
//            resolve('ellie');
//         }); 
//     }
// async 를 함수 앞에 사용하면 코드블록이 자동으로 promise로 바뀐다 

async function fetchUser(){

    return 'ellie'; 
}
    const user = fetchUser();
    user.then(console.log);
    console.log(user);


// await
// async 붙은 함수 안에서만 사용가능
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 async function getApple() {
    await delay(2000);
    return 'apple';

 }
 async function getBanana(){
    await delay(1000);
    return 'banana';
 }

// function pickFruits(){
//     return getApple().then( apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });  // 콜백 지옥
// }
async function pickFruits(){
    const applePromise = getApple(); 
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

//pickFruits().then(console.log);


function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruit => fruit.join('+'));
    // useful Promise Apis
    // all 
    // promise에 배열을 전달하게 되면 모든 promise 들이 병렬적으로 다 받을떄까지 모아준다

}
//pickAllFruits().then(console.log);

function pickOnlyone(){
    return Promise.race([getApple(), getBanana()]);
    // useful Promise Apis
    // race
    // 배열에 전달된 promise 중에서 가장 먼저 값을 리턴하는 아이템만 return
}
pickOnlyone().then(console.log);
    return(
        <div>async 연습</div>
    )

}

export default Asynctest;
const Promisenote =()=>{
    //Promise
    // 자바스크립트 안에 내장되어있는 오브젝트
    // 비공기적인 함수를 실행할때 callback함수 대신에 사용가능한 오브젝트
    // state 프로세스가 무거운 오퍼레이션을 실행중인지 아니면 기능 수행이 완료되어 성공했는지 실패 했는지
    // 프로듀싱(제공자) , 컨슈머(사용자) 의 차이 이해하기
    // state: 프로미스가 만들어져서 우리가 만든 오퍼레이션을 실행중일때는
    //         팬딩상태 (pending) => fulfulled(완료가 된상태) or rejecte(파일x,네트워크 문제발생)
    // producer(해당데이터를 만드는) vs consudmer(원하는 데이터 소비)
    //

    // 1 Producer
    // Promise (class) 
    // reject: 기능 수행하다가 문제가 생기면 호출 
    // resolve: 기능이 정상적으로 수행해서 마지막 최종 데이터 전달
    // 실행에 시간이 걸리는 것들은 promise를 이용하여 비동기적으로 만들어야한다
    const promise = new Promise((resolve, reject)=> {
            console.log('doing something:...')

    }) 


    return(
        <div style={ {background:'black',width:'1000px',height:'200px'}}> Promise</div>
    )
};

export default Promisenote;

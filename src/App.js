import './App.css';
import { useState } from 'react';


function App() {
    let post = '동탄 우동 맛집'
    let [ sing, singSet ] = useState(['여자 노래 추천', '남자노래추천', '혼성노래추천']) // 뒷부분 숨어있는 함수가 있음
    let [ good, goodSet ] = useState(1)
    let [ snone, snoneSet ] = useState(false)
  
    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
                <button onClick={()=>{
                    let scc = [...sing]
                    scc[0] = 'hhhhh';
                    singSet(scc)
                }}>Button</button>
                <button onClick={() => {
                    let sort = [...sing] // '...어쩌고' 새로운 배열을 만들어서 기존값을 불러온다
                    sort.sort(); //가나다 순으로 정렬하기 함수 sort()
                    singSet(sort)
                }}>정렬하기</button>
            </div>
            <div className="list">
                <h4>{ sing[0] }<span onClick={()=>{
                    goodSet(good + 1)
                }}>👍</span>{good}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{ sing[1] }<span onClick={()=>{
                    goodSet(good + 1)
                }}>👍</span>{good}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4 onClick={() => {
                    //let isTrue = true
                    snoneSet(!snone)
                    //if (snone === true){
                    //    snone = false
                    //    snoneSet(snone)
                    //} else {
                    //    snone = true
                    //snoneSet(snone)
                    //}
                }}>{ sing[2] }<span onClick={()=>{
                    goodSet(good + 1)
                }}>👍</span>{good}</h4>
                <p>2월 17일 발행</p>
            </div>
            { snone === true ?  <Modal /> : null }
        </div>
    );
}


function Modal() {
    return(
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}
export default App;

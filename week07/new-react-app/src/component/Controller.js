const Controller = ({ handleSetCount }) => {
  return (
    /* 교재 예제 연습용 카운터 앱 만들기 코드
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
    </div>*/
    //7주차 스터디 퀴즈 문제
    <div>
      <button onClick={() => handleSetCount(-5)}>-5</button>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
      <button onClick={() => handleSetCount(5)}>+5</button>
      </div>
  );
};
export default Controller;
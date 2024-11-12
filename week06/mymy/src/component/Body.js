import { useRef, useState } from "react";

function Body() {

    //Quiz 2. useRef 를 이용해 5글자 미만일시 focus 하도록 
    const [text, setText] = useState("");
    const textRef = useRef();
    const handleOnChange = (e) => {
        setText(e.target.value);
    };
    const handleOnClick = () => {
        if (text.length < 5){
            textRef.current.focus();
        }
        else{
            alert(text);
            textRef.current.value = "";
        }
    };

    return (
        <div> **5글자 이상**을 입력하세요 <br />
            <p>
                <input ref={textRef} value={text} onChange={handleOnChange} /></p>
          <button onClick={handleOnClick}>입력 완료!</button>
        </div>
    );    

/* Quiz 1 입력 폼에 숫자를 입력하고 버튼을 클릭하면 짝수와 홀수를 판별하는 경고창 띄우기
  // useState로 num 상태 정의
  const [num, setNum] = useState("");

  const handleOnChange = (e) => {
    // 입력 값 상태에 저장
    setNum(e.target.value);
  };

  const handleOnClick = () => {
    // num을 숫자로 변환하고 홀짝 판별
    const number = parseInt(num, 10);
    if (isNaN(number)) {
      alert("숫자를 입력해주세요.");
      return;
    }

    if (number % 2 === 0) {
      alert(number + "은(는) 짝수입니다.");
    } else {
      alert(number + "은(는) 홀수입니다.");
    }
  };

  return (
    <div>
      <p>
        <input value={num} onChange={handleOnChange} />
      </p>
      <button onClick={handleOnClick}>짝수인지 홀수인지 확인해보슈</button>
    </div>
  );
  */
}

export default Body;

import { useContext,useState, useRef } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState(""); // 상태 관리
  const inputRef = useRef(); // input 요소 참조를 위한 ref

  const onChangeContent = (e) => {
    setContent(e.target.value); // 입력 값 업데이트
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus(); // 내용이 없으면 입력창에 포커스
      return;
    }
    onCreate(content); // 새로운 Todo 전달
    setContent(""); // 입력창 초기화
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef} // ref 연결
          value={content} // 현재 상태 값을 바인딩
          onChange={onChangeContent} // 입력 이벤트 처리
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..." // placeholder 텍스트
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;

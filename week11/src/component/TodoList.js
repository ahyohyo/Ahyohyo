import TodoItem from "./TodoItem.js";
import "./TodoList.css";
import { useState, useMemo } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); // 검색어 상태 관리

  // 검색어 변경 핸들러
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색 결과 필터링 함수
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
  //  console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
   },[todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>

      {/* 할 일 분석 기능 */}
      <div>
        <div>총 개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>

      {/* 검색창 */}
      <input
        value={search} // 검색어 상태
        onChange={onChangeSearch} // 입력 핸들러
        className="searchbar" // 스타일링 클래스
        placeholder="검색어를 입력하세요" // 안내 문구
      />

      {/* Todo 리스트 */}
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id} // 고유 ID
            {...it} // 항목 데이터
            onUpdate={onUpdate} // 업데이트 핸들러
            onDelete={onDelete} // 삭제 핸들러
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

/* import TodoItem from "./TodoItem.js";
import "./TodoList.css";
import { useState } from "react"; 


const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase()) 
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input />
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
     
        <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList; */
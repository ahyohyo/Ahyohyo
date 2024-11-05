
function Body({ children }) { //자식 컴포넌트의 자식 컴포넌트로 배치하면 Props의 children 프로퍼티로 자동 저장
    console.log(children);
    return <div className="body">{children}</div>;
  }
export default Body;

  /*
  function Body({ name, location, favorList }) {
    console.log(name, location, favorList);
    return (
      <div className="body">
        {name}은 {location}에 거주합니다.
        <br />
        {favorList.length}개의 음식을 좋아합니다. //legnth 프로퍼티로 접근
      </div>
    );
  }
  
  Body.defaultProps = { //기본값 설정하기 
    favorList: [],
  };
  
  export default Body; */

useCallback(() => {
    console.log('hello world!');
  }, [])
   
useMemo(() => {
    const fn = () => {
      console.log('hello world!');
    };
    return fn;
  }, [])
  /*
    useCallback은 결국 useMemo로 함수를 반환하는 상황에서 더 편하게 사용할 수 있는 Hook이다. 

    숫자, 문자열, 객체 처럼 일반 값을 사용 → useMemo를 사용하고, 함수를 재사용 → useCallback을 사용하면 된다.  */

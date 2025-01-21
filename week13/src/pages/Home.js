import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [useSearchParams, setSearchParams] = useSearchParams();
    console.log(setSearchParams.get("sort"));
    
    return <div>Home 페이지입니다.</div>;
};
export default Home;
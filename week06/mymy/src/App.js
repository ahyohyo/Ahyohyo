import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function Zero() {
  return <h4>제주청귤 아이스티 녹차</h4>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <Zero />
      </ Body>
      <Footer />
    </ div>
  );
}

export default App;


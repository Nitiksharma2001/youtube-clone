import "./App.css";
import Header from "./Header";
import MainRight from "./MainRight";
import MainLeft from "./MainLeft";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <MainLeft />
        <MainRight />
      </div>
    </div>
  );
}

export default App;

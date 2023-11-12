import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--main-bg-color)",
          color: "var(--main-text-color)",
        }}
      >
        <Home />
      </div>
    </>
  );
}

export default App;

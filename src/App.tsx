import NavBar from "./components/shared/navbar/NavBar";
import Footer from "./components/shared/footer/Footer";
// import Home from "./components/home/Home";
// import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <NavBar />
        {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Switch> */}
        <Footer />
      </div>
    </>
  );
}

export default App;

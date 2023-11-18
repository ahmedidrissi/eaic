import Layout from "./components/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Data from "./components/data/Data";
import Training from "./components/training/Training";
import MLOps from "./components/mlops/MLOps";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/data" element={<Data />} />
            <Route path="/training" element={<Training />} />
            <Route path="/mlops" element={<MLOps />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import Layout from "./components/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Data from "./components/data/Data";
import Training from "./components/training/Training";
import MLops from "./components/mlops/MLops";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/eaic-react-app/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/eaic-react-app/about" element={<About />}/>
            <Route path="/eaic-react-app/contact" element={<Contact />} />
            <Route path="/eaic-react-app/data" element={<Data />} />
            <Route path="/eaic-react-app/training" element={<Training />} />
            <Route path="/eaic-react-app/mlops" element={<MLops />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

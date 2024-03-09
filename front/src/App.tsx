import Layout from "./components/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Data from "./components/sessions/data/Data";
import Training from "./components/sessions/training/Training";
import MLOps from "./components/sessions/mlops/MLOps";
import DCDonates from "./components/dcdonates/DCDonates";
import Ramdan from "./components/ramadan/Ramdan";
import NotFound from "./components/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/shared/scrolltotop/ScrollToTop";
import useUpdateAnalytics from "./hooks/useUpdateAnalytics";
import "./App.css";

function App() {
  if (sessionStorage.getItem("visited") === null) {
    useUpdateAnalytics("visits");
    sessionStorage.setItem("visited", "true");
  } else {
    useUpdateAnalytics("views");
  }

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/data" element={<Data />} />
              <Route path="/training" element={<Training />} />
              <Route path="/mlops" element={<MLOps />} />
              <Route path="/dcdonates" element={<DCDonates />} />
              <Route path="/surprise" element={<Ramdan />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

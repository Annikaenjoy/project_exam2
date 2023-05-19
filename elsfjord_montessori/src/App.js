import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Admin from "./views/Admin";
import Montessori from "./views/Montessori";
import News from "./views/News";
import ApplyToSchool from "./views/ApplyToSchool";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/omoss" element={<About />}></Route>
        <Route path="/montessori" element={<Montessori />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/apply" element={<ApplyToSchool />}></Route>
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

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
        <Route exact path="/omoss" element={<About />}></Route>
        <Route exact path="/montessori" element={<Montessori />}></Route>
        <Route exact path="/news" element={<News />}></Route>
        <Route exact path="/apply" element={<ApplyToSchool />}></Route>
        <Route exact path="/kontakt" element={<Contact />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

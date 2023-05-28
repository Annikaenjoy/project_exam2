import "./sass/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Admin from "./views/Admin";
import Dashboard from "./views/Dashboard";
import Montessori from "./views/Montessori";
import News from "./views/News";
import ApplyToSchool from "./views/ApplyToSchool";
import Post from "./views/Post";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/omoss" element={<About />}></Route>
          <Route path="/montessori" element={<Montessori />}></Route>
          <Route path="/aktuelt" element={<News />}></Route>
          <Route path="/skoleplass" element={<ApplyToSchool />}></Route>
          <Route path="/kontakt" element={<Contact />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/post:id" element={<Post />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

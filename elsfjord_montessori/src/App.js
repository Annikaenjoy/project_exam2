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
import EditPost from "./views/EditPost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/omoss" element={<About />}></Route>
          <Route exact path="/montessori" element={<Montessori />}></Route>
          <Route exact path="/aktuelt" element={<News />}></Route>
          <Route exact path="/skoleplass" element={<ApplyToSchool />}></Route>
          <Route exact path="/kontakt" element={<Contact />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/post/:id" exact element={<Post />}></Route>
          <Route
            path="/post/edit-post/:id"
            exact
            element={<EditPost />}
          ></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import AllCourses from "./views/Allcourses";
import EnrolledCourses from "./views/EnrolledCourses";
import MenuBar from "./components/MenuBar";
import LoginDialog from "./components/dialog/LoginDialog"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MenuBar />
        <h1>Welcome to React Router!</h1>

        <Routes>
          <Route exact path="/" element={<AllCourses />} />
          <Route exact path="/enrolled" element={<EnrolledCourses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// App.js



export default App;

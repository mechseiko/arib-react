// Components are reusable blocks of code in react
import JSXIntro from "./jsx_intro";
import User from "./jsx_intro/User";
import FormContainer from "./react_form";
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./jsx_intro/UserDetails";
import Job from "./jsx_intro/Job";

// UNDERSTANDING ROUTES IN REACT.JS
// After importing Browser router, routes and routes from the react-router-dom,
// We Open the tags as shown below and they take two arguments
// 1. Path -- Specifies the name of the path
// 2. Element -- Specifies the route of the .jx file we want to open

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JSXIntro />}></Route>
        <Route path="/users/login" element={<FormContainer />}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/job" element={<Job />}></Route>
        {/* SPECIFYING DYNAMIC PATHS WITH REACT.JS*/}
        <Route path="/users/:userId" element={<UserDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
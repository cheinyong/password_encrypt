
import "./App.css";
import Signup from "./Signup.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";

export default function App() {

  return (<div>
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}> </Route>
        </Routes>
    </BrowserRouter>
      
  </div>)
 }



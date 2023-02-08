import "./App.css";
import Landing from "./components/Display question/Landing";
import Problems from "./components/Problems/Problems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/SignUp";
import NavBar from "./NavBar";
function App() {
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/problems" element={<Problems/>} />
            <Route path="/solve" element={<Landing/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;

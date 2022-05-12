import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Onboard from "./pages/onboard/Onboard";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/onboard" element={<Onboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

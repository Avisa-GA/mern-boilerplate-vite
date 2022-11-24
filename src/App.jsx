import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../pages/SignupPage/SignupPage";
import LoginPage from "../pages/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Pageeeeeeeeeeeee</h1>} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
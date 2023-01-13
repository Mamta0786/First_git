import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alertmsg from "./components/Alertmsg";
import About from "./components/About";
// import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b0632";
      document.body.style.color = "white";
      showAlert("Dark mode has been active", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#0b0632";
      showAlert("Light mode has been active", "success");
    }
  };

  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode1={mode} change_Mode={changeMode} />
        <Alertmsg alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm mode1={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode1={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

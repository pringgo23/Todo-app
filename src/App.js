import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Navbar from "./components/Navbar.jsx";
import Login from "./page/login.jsx";
import Homepage from "./page/Home.jsx";
import Register from "./page/Register.jsx";
import Create from "./page/Create.jsx";
import Edit from "./page/Edit.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

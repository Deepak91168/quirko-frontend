import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { Profile } from "./pages/auth/Profile";
import PrivateRoute from "./utils/PrivateRoute";
import { Home } from "./pages/general/Home";
import NavBar from "./components/common/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

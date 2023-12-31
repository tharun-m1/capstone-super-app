import Signup from "./pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Rw from "./pages/Rw/Rw";
import Warga from "./pages/Warga/Warga";
import Staff from "./pages/Staff/Staff";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rw" element={<Rw />} />
        <Route path="warga" element={<Warga />} />
        <Route path="staff" element={<Staff />} />
      </Route>
    </Routes>
  );
}

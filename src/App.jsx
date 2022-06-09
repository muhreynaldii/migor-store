import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Rw from "./pages/Rw/Rw";
import Warga from "./pages/Warga/Warga";
import Staff from "./pages/Staff/Staff";
import DataStaff from "./pages/DataStaff/DataStaff";
import NoMatch from "./pages/NoMatch/NoMatch";
import DashboardStaff from "./pages/DashboardStaff/DashboardStaff";
import KepalaDinper from "./pages/KepalaDinper/KepalaDinper";
import Admin from "./pages/Admin/Admin";
import TambahPerioda from "./pages/TambahPerioda/TambahPerioda";
import TambahUser from "./pages/TambahUser/TambahUser";
import EditPerioda from "./pages/EditPerioda/EditPerioda";
import EditUser from "./pages/EditUser/EditUser";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="tambahperioda" element={<TambahPerioda />} />
          <Route path="tambahuser" element={<TambahUser />} />
          <Route path="editperioda" element={<EditPerioda />} />
          <Route path="edituser" element={<EditUser />} />
        </Route>
        <Route path="rw" element={<Rw />} />
        <Route path="warga" element={<Warga />} />
        <Route path="kepaladinper" element={<KepalaDinper />} />
        <Route path="staff" element={<Staff />}>
          <Route index element={<DashboardStaff />} />
          <Route path="datastaff" element={<DataStaff />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Route>
    </Routes>
  );
}

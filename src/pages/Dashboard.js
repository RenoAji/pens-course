import { Outlet } from "react-router-dom";
import SidebarDashboard from "../components/SidebarDashboard";

export default function Dashboard() {
  return (
    <div className="d-flex flex-row align-items-stretch flex-wrap">
      <SidebarDashboard />
      <Outlet />
    </div>
  );
}

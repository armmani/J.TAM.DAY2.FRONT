import { CircleUserRound, LayoutDashboard } from "lucide-react";
import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="w-48 bg-neutral">
      {/* Profile */}
      <div className="py-12 flex flex-col justify-center items-center">
        <CircleUserRound size={48} />
        <p>Welcome</p>
      </div>

      {/* NavLink  */}
      <Link to={"/admin"} className="text-white">
        <div className="flex gap-2 px-4 py-4">
          <span>
            <LayoutDashboard />
          </span>
          <p>DashBoard</p>
        </div>
      </Link>
    </div>
  );
}
export default Sidebar;

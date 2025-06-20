import { CircleUserRound, LayoutDashboard } from "lucide-react";
import { Link } from "react-router";
import { sidebarLink } from "../../utils/links";
import useAuthStore from "../../store/auth-store";

function Sidebar() {
  const user = useAuthStore((state) => state.user) // เรียกใช้ zustand จาก store แต่ใส่เฉพาะที่จะเอา อันนี้คือ user
  return (
    <div className="w-48 bg-neutral">
      {/* Profile */}
      <div className="py-12 flex flex-col justify-center items-center">
        <CircleUserRound size={48} />
        <p>Welcome {user && user.role}</p>
      </div>

      {/* NavLink  */}
      {sidebarLink.map((item) => {
        return (
          <Link 
          key={item.label}
          to={item.link} 
          className="hover:bg-gray-400">
            <div className="flex gap-2 px-4 py-4">
              <span>
                {item.icon}
              </span>
              <p>{item.label}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export default Sidebar;

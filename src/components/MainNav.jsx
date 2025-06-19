import { Link } from "react-router";

function MainNav() {
  return (
    <div className="flex justify-between navbar bg-info text-accent">
      <div className="flex gap-6">
        <Link to="/">LOGO</Link>
        <Link to="/">HOME</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="flex gap-6">
        <Link to="/register">REGISTER</Link>
        <Link to="/login">LOG IN</Link>
      </div>
    </div>
  );
}
export default MainNav;

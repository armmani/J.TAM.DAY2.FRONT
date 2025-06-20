import { useEffect, useState } from "react";
import { getMe } from "../api/user";
import useAuthStore from "../store/auth-store";

function ProtectRoute({ el }) {
  // JS
  const [ok, setOk] = useState(null);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await getMe(token);
      const role = res.data.result.role
      console.log(role);
      setOk(true)
    } catch (error) {
      setOk(false)
      console.log(error);
    }
  };
  if (ok === null) {
    return <h1>Loading.....</h1>;
  }
  if (!ok) {
    return <h1>Unauthorization...</h1>
  }
  return el;
}
export default ProtectRoute;

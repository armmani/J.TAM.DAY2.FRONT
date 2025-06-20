import { useEffect, useState } from "react";
import { getMe } from "../api/user";
import useAuthStore from "../store/auth-store";

function ProtectRoute({ el, allows }) {
  // JS
  const [ok, setOk] = useState(null);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await getMe(token);
      const role = res.data.result.role;
      if (allows.includes(role)) {
        setOk(true);
      } else {
        setOk(false);
      }
      // setOk(allows.includes(role)) ==> อันนี้คือแทน if else ข้างบน
    } catch (error) {
      setOk(false);
      console.log(error);
    }
  };
  if (ok === null) {
    return <h1>Loading.....</h1>;
  }
  if (!ok) {
    return <h1>Unauthorization...</h1>;
  }
  return el;
}
export default ProtectRoute;

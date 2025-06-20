import React, { useEffect } from "react";
import { actionListUsers } from "../../api/user";
import useAuthStore from "../../store/auth-store";

function Manage() {
  // JS
  // 3 เรียกใช้ token
  const token = useAuthStore((state) => state.token);
  // 2 กำหนด useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  // 1 สร้าง Fn มา 1 อัน
  const fetchUsers = async () => {
    try {
      const res = await actionListUsers();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            <tr>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Manage;

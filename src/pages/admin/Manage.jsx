import React, { useEffect, useState } from "react";
import { actionListUsers } from "../../api/user";
import useAuthStore from "../../store/auth-store";

function Manage() {
  // JS

  const token = useAuthStore((state) => state.token); // 3 เรียกใช้ token
  const [users, setUsers] = useState([]); // 4 สร้าง state เพื่อเก็บข้อมูล

  // 2 กำหนด useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

  // 1 สร้าง Fn มา 1 อัน
  const fetchUsers = async () => {
    try {
      const res = await actionListUsers(token);
      setUsers(res.data.result);
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
            {users.map((item, index) => {
              return (
                <tr key={item.id} className="hover:bg-base-300">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <select defaultValue={item.role}>
                      <option>USER</option>
                      <option>ADMIN</option>
                    </select>
                    </td>
                  <td>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Manage;

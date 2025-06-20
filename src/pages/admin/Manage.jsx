import React, { useEffect, useState } from "react";
import { actionListUsers, actionUpdateRole } from "../../api/user";
import useAuthStore from "../../store/auth-store";
import { createAlert } from "../../utils/createAlert";
import { Trash } from "lucide-react";

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
  // 5 ไปสร้าง option Role แล้วมา 6 สร้าง hdlUpdateRole ใช้เก็บข้อมูลเปลี่ยน role มาไว้ในนี้
  const hdlUpdateRole = async (token, id, role) => {
    console.log(token, id, role);
    try {
      const res = await actionUpdateRole(token, id, { role });
      console.log(res);
      createAlert("success", res.data.message)
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
                    <select
                      defaultValue={item.role}
                      onChange={(e) =>
                        hdlUpdateRole(token, item.id, e.target.value)
                      }
                      className="select select-neutral"
                    >
                      <option>USER</option>
                      <option>ADMIN</option>
                    </select>
                  </td>
                  <td>
                    <Trash color="red" />
                  </td>
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

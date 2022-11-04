import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserApi from "../api/UserApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserAdd() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [users, setUsers] = useState([]);
  const [provinces, setProvinces] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/");
        setProvinces(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchUsers = async () => {
      try {
        let res = await UserApi.getUsers();
        setUsers(res.data);
        // setRenderedUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    fetchProvinces();
  }, []);

  const handleAdd = async (
    userName,
    userEmail,
    userPhone,
    userAddress,
    userPassword
  ) => {
    try {
      if (!userName) {
        alert("Tiêu đề không được để trống");
        return;
      }
      //tao user moi
      let newUser = {
        name: userName,
        email: userEmail,
        phone: userPhone,
        address: userAddress,
        password: userPassword,
      };
      // Gọi API xóa phía server
      let res = await UserApi.createUsers(newUser);

      //sau khi tạo User thành cong
      toast.success("Tạo User Thành Công");
      setTimeout(() => {
        navigate("/users");
      }, 3000);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="bg-light p-4">
              <div className="mb-3">
                <label className="col-form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Address</label>
                <select
                  className="form-select"
                  id="address"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                >
                  <option hidden>Chọn Tỉnh/Thành Phố</option>
                  {provinces.map((p) => (
                    <option value={p.name} key={p.code}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="col-form-label">Password</label>
                <input
                  type="text"
                  id="password"
                  className="form-control"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-secondary btn-back">Quay lại</button>
              <button
                className="btn btn-success"
                id="btn-save"
                onClick={() =>
                  handleAdd(userName, userEmail, userPhone, userAddress, userPassword)
                }
              >
                Tạo User
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" />
    </>
  );
}
export default UserAdd;

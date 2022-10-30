import React, { useEffect, useState } from 'react'
import userApi from '../api/userApi';

function UserList() {

    const [users, setUsers] = useState([]);
    const [term, setTerm] = useState("");

    useEffect( () => {
        const fetchUsers = async () => {
            try {
                let res = await userApi.getUsers();
                setUsers(res.data)
            }
            catch(error) {
                console.log(error);
            }

        }
        fetchUsers();
    }, [])

    const handleDelete = async (id) => {
        try {
            await userApi.deleteUser(id);

            const newUsers = users.filter((user) => user.id !== id);
            setUsers(newUsers);
        } catch (e) {
            console.log(e)
        }
    }

    const handleSearch = () => {
        if(!term) {
            setUsers(users);
            return;
        }
        const newUser = users.filter((user) => 
            user.login.toLowerCase().includes(term.toLowerCase()));
        setUsers(newUser);
    }

    return (
    <div className="container mt-5 mb-5">
            <h2 className="text-center text-uppercase">Danh sách user</h2>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
                        <a href="./create.html" className="btn btn-warning">
                            Tạo user
                        </a>
                        <input
                            type="text"
                            id="search"
                            className="form-control w-50"
                            placeholder="Tìm kiếm user"
                        />
                        <button className="btn btn-info rounded-0 seach-form-button"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>

                    <div className="bg-light p-4">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map( (user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <a
                                                href="./detail.html?id=2"
                                                className="btn btn-success"
                                            >
                                                Xem chi tiết
                                            </a>
                                            <button className="btn btn-danger"
                                                    onClick={() => handleDelete(user.id)}
                                            >
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className="message d-none"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserList
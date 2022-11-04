import axiosClient from "./axiosClient";

const userApi = {
    getUsers() {
        const url = "/users"
        return axiosClient.get(url);
    },
    createUsers(newUser) {
        const url = "/users";
        return axiosClient.post(url, newUser);
    },
    updateUser(id, updatedUser) {
        const url = `/users/${id}`
        return axiosClient.put(url, updatedUser);
    },
    deleteUser(id) {
        const url = `/users/${id}`
        return axiosClient.delete(url);
    },
    getUserById(findUserName) {
        const url = `users/search?name=${findUserName}`;
        return axiosClient.get(url);
    },
}

export default userApi;
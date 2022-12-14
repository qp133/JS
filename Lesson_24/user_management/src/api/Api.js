import axiosClient from "./axiosClient";

const Api ={
    getUsers() {
        const url = "/users";
        return axiosClient.get(url);
    },
    deleteUser(id){
        const url = `users/${id}`;
        return axiosClient.delete(url);
    },
    createUser(newUser) {
        const url = "/users";
        return axiosClient.post(url, newUser);
    },
    getUserById(id){
        const url = `users/${id}`;
        return axiosClient.get(url);
    },
    updateUser(id, updatedUser) {
        const url = `users/${id}`;
        return axiosClient.put(url, updatedUser);
    },
    updatePassword(id,password){
        const url = `users/${id}/update-password`;
        return axiosClient.put(url,password);
    },
    forgotPassword(id){
        const url = `users/${id}/forgot-password`;
        return axiosClient.put(url);
    }
}
export default Api;
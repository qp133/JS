import axiosClient from "./axiosClient";

const Api ={
    getCourses() {
        const url = "/courses";
        return axiosClient.get(url);
    },
    deleteCourse(id){
        const url = `/courses/${id}`;
        return axiosClient.delete(url);
    },
    createCourse(newCourse) {
        const url = "/courses";
        return axiosClient.post(url, newCourse);
    },
    getCourseById(id){
        const url = `/courses/${id}`;
        return axiosClient.get(url);
    },
    updateCourse(id, updatedCourse) {
        const url = `/courses/${id}`;
        return axiosClient.put(url, updatedCourse);
    },


    getTopics() {
        const url = "/topics";
        return axiosClient.get(url);
    },
    deleteTopic(id){
        const url = `/topics/${id}`;
        return axiosClient.delete(url);
    },
    createTopic(newTopic) {
        const url = "/topics";
        return axiosClient.post(url, newTopic);
    },
    getTopicById(id){
        const url = `/topics/${id}`;
        return axiosClient.get(url);
    },
    updateTopic(id, updatedTopic) {
        const url = `/topics/${id}`;
        return axiosClient.put(url, updatedTopic);
    },

    getUsers() {
        const url = "/users";
        return axiosClient.get(url);
    },
    getUserById(id){
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
}
export default Api;
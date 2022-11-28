import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Api from '../Api/Api';

function CourseEdit() {
    const { courseId } = useParams();

    const [courses, setCourses] = useState([]);
    const [renderedCourse, setRenderedCourse] = useState(courses);

    const [course, setCourse] = useState(null);

    const [topics, setTopics] = useState([]);
    const [renderedTopic, setRenderedTopic] = useState(topics);

    const [users, setUsers] = useState([]);
    const [renderedUser, setRenderedUser] = useState(users);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                let res = await Api.getCourses();
                setCourses(res.data);
                setRenderedCourse(res.data);
                
            } catch (error) {
                console.log(error);
            }
        };
        fetchCourses();

        const fetchCourse = async () => {
            try {
                let res = await Api.getCourseById(courseId);
                setCourse(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCourse();

        const fetchTopics = async () => {
            try {
                let res = await Api.getTopics();
                setTopics(res.data);
                setRenderedTopic(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTopics();

        const fetchUsers = async () => {
            try {
                let res = await Api.getUsers();
                setUsers(res.data);
                setRenderedUser(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            await Api.deleteCourse(id);

            //Cập nhật trong state ban đầu
            const newCourse = courses.filter((course) => course.id !== id);
            setCourses(newCourse);
            setRenderedCourse(newCourse);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="course-list mt-4 mb-4">
            <div className="container">
                <div className="mb-4 d-flex justify-content-between">
                    <div>
                        <button className="btn-custom btn-update-course">
                            <span><i className="fa-solid fa-plus"></i></span>
                            Cập nhật
                        </button>
                        <Link to={"/courses"} className="btn-custom btn-refresh text-decoration-none">
                            <span><i className="fa-solid fa-angle-left"></i></span>
                            Quay lại
                        </Link>
                    </div>
                    <div>
                        <Link   className="btn-custom btn-delete-course bg-danger text-decoration-none"
                                to={"/courses"}
                                onClick={() => handleDelete(course.id)}
                        >
                            <span><i className="fa-solid fa-trash-can"></i></span>
                            Xóa
                        </Link>
                    </div>
                </div>

                <div className="course-list-inner p-2">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="mb-3">
                                <label className="form-label fw-bold">Tên khóa học</label>
                                <input  type="text" 
                                        className="form-control"
                                        id="course-name"
                                        value={course?.name}
                                        onChange={(e) => setCourse({...course, name: e.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="course-description" className="form-label fw-bold">Mô tả</label>
                                <textarea   className="form-control"
                                            id="course-description"
                                            rows="10"
                                            value={course?.description}
                                            onChange={(e) => setCourse({...course, description: e.target.value})}            
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="course-type" className="form-label fw-bold">Hình thức học</label>
                                <select className="form-control" id="course-type" value={course?.type}>
                                    <option value="online">Online</option>
                                    <option value="onlab">Onlab</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="course-topic" className="form-label fw-bold">Chủ đề</label>
                                <select className="form-control" id="course-topic" multiple="multiple">
                                    {topics.map((topic) => (
                                        <option value={topic.id} key={topic.id}>{topic.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="course-supporter" className="form-label fw-bold">Tư vấn viên</label>
                                <select className="form-control" 
                                        id="course-supporter" 
                                        value={course?.user.id}
                                        onChange={(e) => setCourse({...course, users: e.target.value})}        
                                >
                                    {users.map((user) => (
                                        <option value={user.id} key={user.id}>{user.name}</option>
                                    ))}  
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Thumnail</label>
                                <div className="course-logo-preview mb-3 rounded">
                                    <img    id="course-logo-preview" 
                                            className="rounded"
                                            alt='thumbnail'
                                            src={course?.thumbnail ?? "https://via.placeholder.com/150"}      
                                    />
                                </div>

                                <label htmlFor="course-logo-input" className="btn btn-warning">Đổi ảnh
                                    <input type="file" id="course-logo-input" className="d-none"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseEdit
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Api from '../Api/Api';

function CourseCreate() {
    const[courseName, setCourseName] = useState("")
    const[courseDescription, setCourseDescription] = useState("")
    const[courseType, setCourseType] = useState("")
    const[courseTopic, setCourseTopic] = useState("")
    const[courseUser, setCourseUser] = useState("")

    const [topics, setTopics] = useState([]);
    const [renderedTopic, setRenderedTopic] = useState(topics);
    const [users, setUsers] = useState([]);
    const [renderedUser, setRenderedUser] = useState(users);

    const navigate = useNavigate();

    useEffect(() => {
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

    const handleCreate = async (courseName, courseDescription, courseType, courseTopic, courseUser ) => {
        try {
            if(!courseName) {
                alert("Tên khóa học không được để trống")
                return;
            }
            let newCourse = {
                name: courseName,
                description: courseDescription,
                type: courseType,
                topics: courseTopic,
                user: courseUser
            }
            let res = await Api.createCourse(newCourse);

            navigate("/courses")
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <div className="course-list mt-4 mb-4">
            <div className="container">
                <div className="mb-4">
                    <button className="btn-custom btn-create-course"
                            onClick={() => handleCreate(courseName, courseDescription, courseType, courseTopic, courseUser )}
                    >
                        <span><i className="fa-solid fa-plus"></i></span>
                        Tạo
                    </button>
                    <Link to={"/courses"} className="btn-custom btn-refresh text-decoration-none">
                        <span><i className="fa-solid fa-angle-left"></i></span>
                        Quay lại
                    </Link>
                </div>

                <div className="course-list-inner p-2">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="mb-3">
                                <label htmlFor="course-name" className="form-label fw-bold">Tên khóa học</label>
                                <input  type="text" 
                                        className="form-control" 
                                        id="course-name"
                                        value={courseName}
                                        onChange={(e) => setCourseName(e.target.value)}        
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="course-description" className="form-label fw-bold">Mô tả</label>
                                <textarea   className="form-control" 
                                            id="course-description" 
                                            rows="10"
                                            value={courseDescription}
                                            onChange={(e) => setCourseDescription(e.target.value)}            
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="course-type" className="form-label fw-bold">Hình thức học</label>
                                <select className="form-control" 
                                        id="course-type"
                                        value={courseType}
                                        onChange={(e) => setCourseType(e.target.value)}        
                                >
                                    <option hidden>- Chọn hình thức học</option>
                                    <option value="online">Online</option>
                                    <option value="onlab">Onlab</option>               
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="course-topic" className="form-label fw-bold">Chủ đề</label>
                                <select className="form-control" 
                                        id="course-topic" 
                                        // multiple="multiple"
                                        value={courseTopic}
                                        onChange={(e) => setCourseTopic(e.target.value)}        
                                >
                                    {topics.map((topic) => (
                                        <option value={topic.id} key={topic.id}>{topic.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="course-supporter" className="form-label fw-bold">Tư vấn viên</label>
                                <select className="form-control" 
                                        id="course-supporter"
                                        value={courseTopic}
                                        onChange={(e) => setCourseTopic(e.target.value)}        
                                >
                                    <option hidden>- Chọn tư vấn viên</option>     
                                    {users.map((user) => (
                                        <option value={user.id} key={user.id}>{user.name}</option>
                                    ))}  
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCreate
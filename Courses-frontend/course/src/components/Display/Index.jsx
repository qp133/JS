import React, { useEffect, useState } from 'react'
import Api from '../../../../course/src/Api/Api';
import {Link} from 'react-router-dom'
import CourseList from '../CourseList/Index';

function Index() {
    const [courses, setCourses] = useState([]);
    const [renderedCourse, setRenderedCourse] = useState(courses);

    const [topics, setTopics] = useState([]);
    const [renderedTopic, setRenderedTopic] = useState(topics);

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
    }, []);
    return (
        <>
        <div className="header d-flex align-items-center">
            <div className="container-fluid">
                <div className="d-flex justify-content-start align-items-center">
                    <div className="logo text-decoration-none">
                        <Link to={"/courses"}>
                            <img src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png" alt="logo"/>
                        </Link>
                    </div>
                    <div className="menu"> 
                        <Link className="text-white text-uppercase ms-3 text-decoration-none" to={"/courses/onlabCourse"}>Phòng Lab</Link>
                        <Link className="text-white text-uppercase ms-3 text-decoration-none" to={"/courses/onlineCourse"}>Trực tuyến</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="course-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className="fs-5 mb-4">Chủ đề</h2>
                        {topics.map((topic) => (
                            <div className="topic-item input-group d-flex align-items-center mb-1" key={topic.id}>
                                <input type="radio" value={topic.name} id={topic.name} name="topic"/>
                                <label htmlFor={topic.name} className="ms-2 fs-5">{topic.name}</label>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                                    <input type="text" placeholder="Tìm kiếm khóa học" className="form-control border-0 seach-form-input"/>
                                    <span className="text-black-50 seach-form-button"><i className="fa-solid fa-magnifying-glass"></i></span>
                                </div>
                            </div>
                        </div>
                        <CourseList
                            onList = {courses}
                        />    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Index
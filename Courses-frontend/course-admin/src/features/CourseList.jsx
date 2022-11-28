import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Api from '../Api/Api';

function CourseList() {
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

    const handleRefresh = async () => {
        try{
            let res = await Api.getCourses();
            setCourses(res.data);
            setRenderedCourse(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="course-list mt-4 mb-4">
            <div className="container">
                <div className="mb-4">
                    <Link   to={"/courses/create"}
                            className="btn-custom btn-create-course text-decoration-none"
                    >
                        <span><i className="fa-solid fa-plus"></i></span>
                        Tạo khóa học
                    </Link>
                    <Link   to={"/courses"} 
                            onClick={handleRefresh()}
                            className="btn-custom btn-refresh text-decoration-none"
                    >
                        <span><i className="fa-solid fa-arrow-rotate-right"></i></span>
                        Refresh
                    </Link>
                </div>

                <div className="course-list-inner p-2">
                    <table className="table course-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên khóa học</th>
                                <th>Hình thức</th>
                                <th>Chủ đề</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderedCourse.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>
                                        <Link to={`/courses/${course.id}`}  className="text-decoration-none">{course.name}</Link>
                                    </td>
                                    <td className="text-info">{course.type}</td>
                                    <td>
                                        {course.topics.map((topic, index) => (
                                            index !== course.topics.length-1?(<span key={topic.id}>{topic.name} </span>):(<span key={topic.id}>{topic.name}</span>)
                                        ))}
                                    </td>
                                </tr>                                
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CourseList
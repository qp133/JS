import React from 'react'
import {Link} from 'react-router-dom'

function CourseItem(props) {
    const {id,name,type,thumbnail} = props;
    return (
        <>
            <div className="col-md-4" key={id}>
                <Link to={`courses/${id}`}>
                    <div className="course-item shadow-sm rounded mb-4">
                        <div className="course-item-image">
                            <img src={thumbnail ?? "https://via.placeholder.com/200"}
                                alt="khoa hoc"/>
                        </div>
                        <div className="course-item-info p-3">
                            <h2 className="fs-5 mb-3 text-dark">{name}</h2>
                            <p className="type fw-light text-black-50">{type}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CourseItem
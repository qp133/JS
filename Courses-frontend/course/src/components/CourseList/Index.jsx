import React from 'react'
import CourseItem from '../CourseItem/Index'

function CourseList({onList}) {
    return (
        <div className="course-list row">
            {onList.map((item) => (
                <CourseItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    thumbnail={item.thumbnail}
                />
            ))}
        </div>
    )
}

export default CourseList
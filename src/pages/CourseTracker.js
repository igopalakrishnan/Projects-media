import React from 'react'
import coursetracker1 from '../assets/img/coursetracker1.webp';
import coursetracker2 from '../assets/img/coursetracker2.webp';

function CourseTracker() {
    return (
        <div className="images">
            <img className="images-mobile" src={coursetracker1} />
            <img className="images-mobile"  src={coursetracker2} />

        </div>
    )
}

export default CourseTracker

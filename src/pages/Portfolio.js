import React from 'react'
import portfolio1 from '../assets/img/portfolio1.png';
import portfolio2 from '../assets/img/portfolio2.png';
import portfolio3 from '../assets/img/portfolio3.png';


function Portfolio() {
    return (
        <div className="images">
            <img className="images-web" src={portfolio1} />
            <img className="images-web"  src={portfolio2} />
            <img className="images-web"  src={portfolio3} />

        </div>
    )
}

export default Portfolio

import React from 'react'
import inshortclone1 from '../assets/img/inshortclone1.jpg';
import inshortclone2 from '../assets/img/inshortclone2.jpg';
import inshortclone3 from '../assets/img/inshortclone3.jpg';
import inshortclone4 from '../assets/img/inshortclone4.jpg';

function InshortClone() {
    return (
        <div className="images">
        <img className="images-mobile" src={inshortclone1} />
        <img className="images-mobile"  src={inshortclone2} />
        <img className="images-mobile"  src={inshortclone3} />
        <img className="images-mobile"  src={inshortclone4} />

    </div>
    )
}

export default InshortClone

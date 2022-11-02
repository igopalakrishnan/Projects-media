import React from 'react';
import instaclone1 from '../assets/img/instaclone1.png';
import instaclone2 from '../assets/img/instaclone2.png';
import instaclone3 from '../assets/img/instaclone3.png';
import instaclone4 from '../assets/img/instaclone4.png';
import instaclone5 from '../assets/img/instaclone5.png';

function InstaClone() {
    return (
        <div className="images">
            <img className="images-mobile" src={instaclone1} />
            <img className="images-mobile" src={instaclone2} />
            <img className="images-mobile" src={instaclone3} />
            <img className="images-mobile" src={instaclone4} />
            <img className="images-mobile" src={instaclone5} />

        </div>
    )
}

export default InstaClone

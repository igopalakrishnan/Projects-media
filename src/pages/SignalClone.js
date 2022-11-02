import React from 'react'
import signalclone1 from '../assets/img/signalclone1.png';
import signalclone2 from '../assets/img/signalclone2.png';
import signalclone3 from '../assets/img/signalclone3.png';
import signalclone4 from '../assets/img/signalclone4.png';

function SignalClone() {
    return (
        <div className="images">
        <img className="images-mobile" src={signalclone1} />
        <img className="images-mobile"  src={signalclone2} />
        <img className="images-mobile"  src={signalclone3} />
        <img className="images-mobile"  src={signalclone4} />

    </div>
    )
}

export default SignalClone

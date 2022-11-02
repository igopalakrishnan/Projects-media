import React from 'react'
import bookapp1 from '../assets/img/bookapp1.png';
import bookapp2 from '../assets/img/bookapp2.png';
import bookapp3 from '../assets/img/bookapp3.png';

function BookApp() {
    return (
        <div className="images">
        <img className="images-web" src={bookapp1}/>
        <img className="images-web" src={bookapp2}/>
        <img className="images-web" src={bookapp3}/>
  
      </div>
    )
}

export default BookApp

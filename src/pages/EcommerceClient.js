import React from 'react'
import EcommerceClient1 from '../assets/img/ecommerceclient1.png';
import EcommerceClient2 from '../assets/img/ecommerceclient2.png';
import EcommerceClient3 from '../assets/img/ecommerceclient3.png';

function EcommerceClient() {
    return (
        <div className="images">
        <img className="images-web" src={EcommerceClient1}/>
        <img className="images-web" src={EcommerceClient2}/>
        <img className="images-web" src={EcommerceClient3}/>
  
      </div>
    )
}

export default EcommerceClient

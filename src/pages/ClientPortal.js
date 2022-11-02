import React from 'react';
import Client1 from '../assets/img/client1.png';
import Client2 from '../assets/img/client2.png';
import Client3 from '../assets/img/client3.png';
import Client4 from '../assets/img/client4.png';

function ClientPortal() {

  return (
    <div className="images">
      <img className="images-web" src={Client1}/>
      <img className="images-web" src={Client2}/>
      <img className="images-web" src={Client3}/>
      <img className="images-web" src={Client4}/>

    </div>
  );
}

export default ClientPortal

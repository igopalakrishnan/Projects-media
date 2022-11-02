import React from 'react'
import chatapp1 from '../assets/img/chatapp1.png';
import chatapp2 from '../assets/img/chatapp2.png';
import chatapp3 from '../assets/img/chatapp3.png';
import chatapp4 from '../assets/img/chatapp4.png';

function ChatApp() {
    return (
        <div className="images">
        <img className="images-web" src={chatapp1}/>
        <img className="images-web" src={chatapp2}/>
        <img className="images-web" src={chatapp3}/>
        <img className="images-web" src={chatapp4}/>
  
      </div>
    )
}

export default ChatApp

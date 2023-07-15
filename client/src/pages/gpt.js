import React from 'react'
import { useState } from 'react';
function Gpt() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState( [] ) ;


    const handlerSend = () => {
        console.log('send');
    }
  return (
<div className='App'>
    <div className='chat'>
    <div className='user-message'>this is User msg</div>
    <div className='bot-message'>this is bot msg</div>
    </div>

    <div className=" input-container">
<input
type="text" value={input}
onChange={(e) => setInput (e.target. value)}
/>
<button  className="button" onClick={handlerSend}>send</button>
</div>

</div>
  )
}

export default Gpt
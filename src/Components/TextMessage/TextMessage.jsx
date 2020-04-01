import React from 'react';
import './TextMessage.css';

const TextMessage = (props) => {
    let date = new Date();
       return (
        <div className="back">
            <div className="name">Kvasova Anna</div>
           <div className="textMessage">I`m your worst nightmare!</div>
            <div className="time">{date.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}
            </div>
        </div>
    );
}

export default TextMessage;

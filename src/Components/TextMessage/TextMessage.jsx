import React from 'react';
import classes from './TextMessage.module.css';

const TextMessage = (props) => {
    let date = new Date();
    return (
        <div className={classes.message}>

            <div className={classes.back}>
                <div className={classes.name}>Kvasova Anna</div>
                <div className={classes.textMessage}>I`m your worst nightmare! I`m your worst nightmare! I`m your worst
                    nightmare!
                </div>
                <div className={classes.time}>{date.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'})}
                </div>
            </div>
            </div>

    );
}

export default TextMessage;

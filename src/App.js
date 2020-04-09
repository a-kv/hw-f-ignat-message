import React from 'react';
import './App.css';
import TextMessage from "./Components/TextMessage/TextMessage";
import Avatar from "./Components/TextMessage/Avatar/Avatar";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Avatar/>
            <TextMessage/>
        </div>
    );
}

export default App;

import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Chat from './Chat';
import './IMessage.css';

const IMessage = () => {
    return (
        <div className="imessage" >
            <Sidebar />
            <Chat />
        </div>
    )
}

export default IMessage;

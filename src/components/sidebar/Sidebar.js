import { Avatar, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db, {auth} from '../../firebase';


const Sidebar = () => {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        ))
    },[])

    const addChat = () => {
        const chatName = prompt('PLEASE ENTER CHAT NAME CHANNEL');
        if(chatName) {
            db.collection('chats').add({
                chatName: chatName
            })
        }
    }

    return (
        <div className="sidebar" >
            <div className="sidebar__header">
                <Avatar  
                    src={user.photo} 
                    className="sidebar__avatar"
                    />
                <div className="sidebar__input" onClick={addChat}>
                    <h3>NEW CHAT</h3>
                </div>
                <IconButton 
                    variant="outline" 
                    className="sidebar__inputButton" 
                    onClick={() => auth.signOut()}
                    size="small"
                >
                    <ExitToAppIcon />
                    <p className="sibar__logout" >Logout</p>
                </IconButton>    
            </div>
            <div className="sidebar__chats">
                {chats.map(({id, data: {chatName}}) => (
                    <SidebarChat key={id} id={id} chatName={chatName} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar

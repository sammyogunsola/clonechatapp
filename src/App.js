import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm/LoginForm';
// import dotenv from 'dotenv';

// dotenv.config();

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return (<LoginForm/>)

    return (
        <ChatEngine
            height = '100vh'
            projectID = '2d894005-a4bb-4a6d-b880-501ab1a04252'
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;
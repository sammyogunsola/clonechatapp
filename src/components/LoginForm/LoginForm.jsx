import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "2d894005-a4bb-4a6d-b880-501ab1a04252", 'User-Name': username, 'User-Secret': password };

        try {
            axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('passowrd', password);

            window.location.reload();
        } catch (error) {
            setError('Incorrect Credentials')
        }

        //username /password => chatEngine -> give messages
        //wworks out -> logged in
        //error -> try with new username
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}> 
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}  className='input' aria-placeholder='Username' required/>
                    
                    <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}  className='input' aria-placeholder='Password' required/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>)
}

export default LoginForm;
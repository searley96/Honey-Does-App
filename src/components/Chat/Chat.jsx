import Message from "./Message";
import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Chat() {
    const [newMessage, setNewMessage] = useState('');
    
    const messages = [{
        text: 'how are you?',
        userId: 1
    },
    {
        text: 'good, hbu?',
        userId: 2
    }];

    const handleSubmit = event => {
        // setMessages(...messages, {text: newMessage, userId: 1});
        // setNewMessage('');
    }
    console.log(messages);
    return (
        <>
            <Box sx={{ backgroundColor: 'rgba(252, 185, 0, 0.5)', backgroundOp: 0.5 }}>
                {messages.map((message, index) =>
                    <Message key={index} message={message} />
                )}
            </Box>
            <Box sx={{ display: 'flex' }}>
                <TextField value={newMessage} onChange={e => setNewMessage(e.target.value)} sx={{ width: '90%' }} />
                <Button variant="contained" sx={{ width: '10%' }}
                    onClick={handleSubmit}>
                    {<SendIcon fontSize="large" />}
                </Button>
            </Box>
        </>
    )
}

export default Chat;
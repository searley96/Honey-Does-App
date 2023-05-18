import Message from "./Message";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Chat() {
    const [newMessage, setNewMessage] = useState('');
    const dispatch = useDispatch();
    const chat = useSelector(store => store.chat);
    const messages = [{
        text: 'how are you?',
        userId: 1
    },
    {
        text: 'good, hbu?',
        userId: 2
    }];

    useEffect(() => {
        dispatch({type: 'FETCH_CHAT', payload: {jobId: 6}})
    }, [])

    const handleSubmit = event => {
        // setMessages(...messages, {text: newMessage, userId: 1});
        // setNewMessage('');
    }
    console.log('chat:', chat);
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
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
    // NOTE TO SELF: user should have access to this job id when 
    //   they access the chat (when they click on an active or request status job)
    useEffect(() => {
        dispatch({type: 'FETCH_CHAT', payload: {jobId: 123456}})
    }, [])

    const handleSubmit = event => {
        // setMessages(...messages, {text: newMessage, userId: 1});
        // setNewMessage('');
        dispatch({
            type: 'ADD_MESSAGE', 
            payload: {

            }
        })
    }
    console.log('chat:', chat);
    return (
        <>
            <Box sx={{ backgroundColor: 'rgba(252, 185, 0, 0.5)', backgroundOp: 0.5 }}>
                {chat.map((message) =>
                    <Message key={message.id} message={message} />
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
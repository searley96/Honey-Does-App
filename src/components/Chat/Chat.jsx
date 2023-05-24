import Message from "./Message";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// pass job_id through props
function Chat({ jobId }) {
    const [newMessage, setNewMessage] = useState('');
    const dispatch = useDispatch();
    const chat = useSelector(store => store.chat);

    const [refreshChat, setRefreshChat] = useState(false);

    // const userId = useSelector(store => store.user.id)
    //const jobId = useSelector(store => );
    // const messages = [{
    //     text: 'how are you?',
    //     userId: 1
    // },
    // {
    //     text: 'good, hbu?',
    //     userId: 2
    // }];
    // NOTE TO SELF: user should have access to this job id when 
    //   they access the chat (when they click on an active or request status job)
    // console.log(jobId);
    useEffect(() => {
        dispatch({type: 'FETCH_CHAT', payload: {jobId: jobId}})
    }, [refreshChat])

    const handleSubmit = e => {
        // setMessages(...messages, {text: newMessage, userId: 1});
        // setNewMessage('');
        dispatch({
            type: 'ADD_MESSAGE', 
            payload: {
                jobId: jobId,
                timeStamp: new Date(Date.now()),
                text: newMessage
            }
        })
        setNewMessage('');
    }
    // console.log('chat:', chat);

    const handleChatRefresh = () => {
        setRefreshChat(!refreshChat);
    }

    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Chat</h3>
                <Button
                    onClick={handleChatRefresh}
                    variant='outlined'>Refresh Chat</Button>
            </Box>
            <Box sx={{height: '500px', overflow: 'hidden', overflowY: 'scroll'}}>
                <Box sx={{ backgroundColor: '#f5f5f5', backgroundOp: 0.5}}>
                    {/* 'rgba(252, 185, 0, 0.5)' */}
                    {chat.map((message) =>
                        <Message key={message.id} message={message} />
                    )}
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <TextField value={newMessage} onChange={e => setNewMessage(e.target.value)} sx={{ width: '90%' }} />
                <Button variant="contained" sx={{ width: '10%' }}
                    onClick={e => handleSubmit(e)}>
                    {<SendIcon fontSize="large" />}
                </Button>
            </Box>
        </>
    )
}

export default Chat;
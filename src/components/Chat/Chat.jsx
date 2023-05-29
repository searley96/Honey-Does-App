import Message from "./Message";
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import UserPage from "../UserPage/UserPage";

// pass job_id through props
function Chat() {
    const [newMessage, setNewMessage] = useState('');
    const dispatch = useDispatch();
    const chat = useSelector(store => store.chat);
    const jobDetails = useSelector(store => store.jobDetailChatReducer);
    const user = useSelector(store => store.user)

    const [refreshChat, setRefreshChat] = useState(false);

    const divRef = useRef(null);

    // useEffect(() => {
    //     divRef.current.scrollIntoView({behavior: 'smooth' });
    // });
    console.log('this is jobDetails', jobDetails);

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
        dispatch({type: 'FETCH_CHAT', payload: {jobId: jobDetails.job_id}})
    }, [refreshChat])

    const handleSubmit = e => {
        console.log('in handleSubmit', newMessage);
        // setMessages(...messages, {text: newMessage, userId: 1});
        // setNewMessage('');
        dispatch({
            type: 'ADD_MESSAGE', 
            payload: {
                jobId: jobDetails.job_id,
                timeStamp: new Date(Date.now()),
                text: newMessage
            }
        })
        setNewMessage('');
        divRef.current.scrollIntoView({behavior: 'smooth' });
    }
    console.log('chat:', chat);

    const handleChatRefresh = () => {
        divRef.current.scrollIntoView({behavior: 'smooth' });
        setRefreshChat(!refreshChat);
    }


    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <h3>Job# {jobDetails.job_id} Chat</h3>
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
                    <div ref={divRef}/>
                </Box>
            </Box>
            {/* if job is in any of these statuses, the chat is usable, if not, the submit will be disabled */}
            {user.role === 'admin' ||
             jobDetails.job_status === 'approved' ||
             jobDetails.job_status === 'request' ||
             jobDetails.job_status === 'active' ?
            
            <Box sx={{ display: 'flex' }}>
                <TextField value={newMessage} onChange={e => setNewMessage(e.target.value)} sx={{ width: '90%' }} />
                <Button variant="contained" sx={{ width: '10%' }}
                    onClick={e => handleSubmit(e)}>
                    {<SendIcon fontSize="large" />}
                </Button>
            </Box>
            :
            <Box sx={{ display: 'flex' }}>
                <TextField value={newMessage} onChange={e => setNewMessage(e.target.value)} sx={{ width: '90%' }} />
                <Button variant="contained" disabled sx={{ width: '10%' }}
                    onClick={e => handleSubmit(e)}>
                    {<SendIcon fontSize="large" />}
                </Button>
            </Box>}
        </>
    )
}

export default Chat;
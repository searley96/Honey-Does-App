import Message from "./Message";
import { Paper, Box } from '@mui/material';

function Chat(){
    const messages = [{
        text: 'how are you?',
        userId: 1
    },
    {
        text: 'leave me alone',
        userId: 2
    }];
    console.log(messages);
    return(
        <Box sx={{ backgroundColor: 'rgba(252, 185, 0, 0.5)', backgroundOp: 0.5}}>
            {messages.map((message, index) => 
                <Message key={index} message={message}/>
            )}
        </Box>
    )
}

export default Chat;
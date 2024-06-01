import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import MessageItem from './MessageItem';
import MessageForm from './MessageForm';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import FilterBtn from './FilterBtn';
import { useAddMessage, useGetAppointmentsList } from '../api';
import { useWebSocket } from 'src/contexts/WebSocketContext';
import { IMessage } from '../interfaces';



const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
    },});

const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    m: 3,
    backgroundColor: 'white',
    paddingBottom: '40px',
    margin: '3rem 0 3rem 0',
    padding: '1rem',
    position: 'relative',
    maxWidth: '38rem',
    marginLeft: 'auto',
    marginRight: 'auto'
}

enum types{
    added="added",
    deleted="deleted"
  }

export default function MessageList() {
    const {socket } = useWebSocket();
    const [messages, setMessages] = useState<IMessage[]>([]);

    const {
        data: list,
        isLoading,
      } = useGetAppointmentsList();

    const mutationAdd = useAddMessage();

    const handleMessageAdded = (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
    };
    
    const handleMessageRemoved = (message) => {
        setMessages(prevMessages => prevMessages.filter(m => m.id !== message.id));
    };


    useEffect(()=>{
        if(!socket) return;
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type===types.added) {
              handleMessageAdded(data.message);
            } 
            else if (data.type===types.deleted) {
              handleMessageRemoved(data.message);
            } 
          };
    },[socket])


    useEffect(()=>{
        console.log('llll',list)
        if(list?.length){
            setMessages(list);
        }
    },[list])


    const addMessage = async (text) => {
        await mutationAdd.mutateAsync({
            text,
          });
    };

    const taskList = messages
        .map((message,index) => {
            return (
                <MessageItem 
                message={message}
                key={index}
            />)}
        )

    return (
        <ThemeProvider theme={theme}>
            <Box
                className='TodoList'
                sx={styles}
            >
                
                <List 
                    sx={{
                        width: '100%', 
                        maxWidth: 500, 
                        bgcolor: 'background.paper',
                        fontFamily: 'inherit'
                    }}
                >
                    <Typography 
                    variant='h5' 
                    component='h4'
                    sx={{
                        color: '#eb5e28',
                        paddingBottom: '10px',
                        fontWeight: '500',
                        textAlign: 'center'
                    }}    
                >
                    Add message
                </Typography>
                    <MessageForm addMessage={addMessage} />
                    {taskList}
                    <Typography 
                        variant='h5'
                        component='h5'
                        sx={{
                            display: 'flex',
                            marginTop: '10px',
                            justifyContent: 'space-between'
                        }}
                    >
                    </Typography>
                    
                    
                </List>
            </Box>
        </ThemeProvider>
    )
}
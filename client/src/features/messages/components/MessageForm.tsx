import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { InputAdornment } from '@mui/material';
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function MessageForm({ addMessage }) {
    const [text, setText] = useState('');

    const handleChange = (evt) => {
        setText(evt.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage(text);
        setText('');
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    sx={{
                        width: '470px'
                    }}
                    color='warning'
                    id='outlined-basic' 
                    label='add message' 
                    variant='outlined' 
                    onChange={handleChange}  
                    value={text}
                    InputProps={{
                        endAdornment: 
                            <InputAdornment position="end">
                                <IconButton 
                                    aria-label="create todo" 
                                    edge="end" 
                                    type="submit"
                                >
                                   
                                </IconButton>
                            </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    );
}
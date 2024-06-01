import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function MessageItem ({ message }) {
    const labelId = `checkbox-list-label-${message.id}`;

    
    
    return (
        <ListItem
            key={message.id}
            disablePadding
        >
            <ListItemButton 
                role={undefined} 
                dense
            >
                <ListItemIcon>
                    <Checkbox
                    edge="start"
                    checked={message.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleOutlineIcon />}
                    color='warning'
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={message.text} />
            </ListItemButton>
        </ListItem>
    );
}
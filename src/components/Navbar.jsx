import React, { useState } from 'react';

import MailIcon from '@mui/icons-material/Mail';
import Notification from '@mui/icons-material/Notifications';
import Pets from '@mui/icons-material/Pets';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';

const StyledToolbar = styled(Toolbar)({
    display:"Flex",
    justifyContent: "space-between"
});



const Search = styled("div")(({ theme }) => ({
backgroundColor: "white",
padding:"0 10px",
borderRadius: theme.shape.borderRadius,
width : "40%",
}))

const Icons = styled(Box)(({ theme }) => ({
    display:"none", 
    alignItems:"center", 
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display:"flex"
    }
 }))

 const UserBox = styled(Box)(({ theme }) => ({
    display:"flex", 
    alignItems:"center", 
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display:"none"
    }
 }))
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar><Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>LAMA DEV</Typography>
            <Pets sx={{display:{xs:"block", sm:"block"}}}/>
            <Search><InputBase placeholder="search"/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
            </Badge> 
            <Badge badgeContent={4} color="error">
                <Notification color="action" />
            </Badge> 
            <Avatar 
            sx={{width:30, height:30}}
            src="https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/"
            onClick={(e)=>setOpen(true)}
            />
            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
            <Avatar 
            sx={{width:30, height:30}}src="https://www.pexels.com/photo/woman-wearing-black-spaghetti-strap-top-415829/"
            />
            <Typography variant="span">John</Typography>

            </UserBox>
            </StyledToolbar>
            <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
      >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
        </Menu>
            </AppBar>
        )
    }
    
    export default Navbar
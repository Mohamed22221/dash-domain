import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import more from "../assets/images/icons/more.svg"
import { BsPerson } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';



export default function AccountMenu() {
 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
  setAnchorEl(null);
 };
 return (
  <React.Fragment>
   <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

    <Tooltip title="Account settings" arrow>
     <IconButton
      onClick={handleClick}
      size="small"
      sx={{ ml: 2 }}
      aria-controls={open ? 'account-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
     >
      <img src={more} />
     </IconButton>
    </Tooltip>
   </Box>
   <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    PaperProps={{
     elevation: 0,
     sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
       width: 40,
       height: 40,
       ml: -0.5,
       mr: 1,
      },
      '&:before': {
       content: '""',
       display: 'block',
       position: 'absolute',
       top: 0,
       right: 14,
       width: 10,
       height: 10,
       bgcolor: 'background.paper',
       transform: 'translateY(-50%) rotate(45deg)',
       zIndex: 0,
      },
     },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
   >
    <MenuItem>
     <BsPerson
      style={{
       fontSize: "28px",
       color: "#A6A6A6",

      }}
     />
     <a style={{ margin: "12px", color: "#A6A6A6" }}>Profile</a>
    </MenuItem>
    <MenuItem>
     <BiLogOut
      style={{
       fontSize: "28px",
       color: "#A6A6A6",

      }}
     />
     <a style={{ margin: "12px", color: "#A6A6A6" }}>Profile</a>

    </MenuItem>

   </Menu>
  </React.Fragment>
 );
}

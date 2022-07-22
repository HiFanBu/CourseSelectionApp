import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import LoginDialog from  './dialog/LoginDialog';
import { JWT_TOKEN_COOKIE_NAME } from '../constants'
import cookie from 'react-cookies';

export default function MenuBar() {
  const token= cookie.load(JWT_TOKEN_COOKIE_NAME);
  const handleLogout = () =>{
    cookie.remove(JWT_TOKEN_COOKIE_NAME);
    window.location.reload();
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Enroll System
          </Typography>
          <Button component={Link} to="/" color="inherit">All Courses</Button>

          {
            token && <Button component={Link} to="/enrolled" color="inherit">Enrolled Courses</Button>
          }
          {
            token ? <Button color='inherit' onClick={handleLogout}> Logout</Button>:<LoginDialog />
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

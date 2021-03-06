import React, { Component } from 'react';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



//estilos css 
import './header.css';


class Header extends Component{



    render(){
        return(
        <div className="app-bar">
      <AppBar position="static">
        <Toolbar>
        <div className="logo"></div>
        
          <Typography variant="subtitle1" className="flex"></Typography>
          <Button color="inherit">
            <a href="/liga">Equipos </a>
          </Button>
          <Button color="inherit">
            <a href="/calendario/piratas">Calendarios</a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
        );
    }
}




export default Header;
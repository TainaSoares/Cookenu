import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { useHistory } from 'react-router-dom';
import {goToLogin, goToRecipesList} from "../../routes/coordinator"



const Header = ({rightButtonText, setRightButtonText}) => {
    const history = useHistory()
    const token = localStorage.getItem("token")


    const logout = () =>{
      localStorage.removeItem("token")
    }

    const rightButtonAction = () =>{
      if(token){
        logout()
        setRightButtonText("Login")
        goToLogin(history)
      }else{
        goToLogin(history)
      }
    }
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick ={()=> goToRecipesList(history)} color="inherit">Cozinhando Bem</Button>
          <Button onClick ={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header
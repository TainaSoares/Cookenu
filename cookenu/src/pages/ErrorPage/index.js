import React from "react"
import {ErrorImage, ErrorPageContainer} from "./styled"
import errorImg from "../../assets/error.png"
import { Typography } from "@material-ui/core"

const ErrorPage = () =>{
    return(
        <ErrorPageContainer>
            <ErrorImage src={errorImg}/>
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página não encontrada!</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage
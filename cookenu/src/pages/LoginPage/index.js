import React, { useState } from "react"
import { ScreenContainer, LogoImage, InputsContainer, SingUpBottonContainer } from "./styled"
import logo from "../../assets/logo.jpg"
import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"
import { goToSingUp } from "../../routes/coordinator"
import {login} from "../../services/user"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import CircularProgress from '@material-ui/core/CircularProgress'

const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText,setIsLoading)
    }

    
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={handleInputChange}
                        label={"E-mail"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />

                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={handleInputChange}
                        label={"Senha"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Login</>}
                    </Button>
                </form>

                <SingUpBottonContainer>
                    <Button
                        onClick={()=>goToSingUp(history)}
                        type={"submit"}
                        fullWidth
                        variant={"text"}
                        color={"primary"}
                    >
                        Cadastre-se
                    </Button>
                </SingUpBottonContainer>

            </InputsContainer>
        </ScreenContainer>
    )
}

export default LoginPage
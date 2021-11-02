import { Button, TextField } from "@material-ui/core"
import React, {useState} from "react"
import { useHistory } from "react-router"
import useForm from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { singUp } from "../../services/user"
import { InputsContainer, ScreenContainer } from "../LoginPage/styled"
import {SingUpFormContainer} from "./styled"
import CircularProgress from '@material-ui/core/CircularProgress'

const SingUpPage = ({setRightButtonText}) =>{
    useUnprotectedPage()
    const history= useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [form, handleInputChange, clear] = useForm({name: "", email:"", password:""})

    const onSubmitForm = (event) =>{
        event.preventDefault()
        singUp(form, clear, history, setRightButtonText, setIsLoading)
    }
    return(
        <ScreenContainer>
            <form onSubmit={onSubmitForm}>
                <SingUpFormContainer>
                    <InputsContainer>
                        <TextField
                          value={form.name}
                          name={"name"}
                          onChange={handleInputChange}
                          label={"Nome"}
                          variant={"outlined"}
                          fullWidth
                          required
                          autoFocus
                          margin={"normal"}
                        />

                       <TextField
                          value={form.email}
                          name={"email"}
                          onChange={handleInputChange}
                          label={"E-mail"}
                          variant={"outlined"}
                          type={"email"}
                          fullWidth
                          required
                          margin={"normal"}
                        />

                       <TextField
                          value={form.password}
                          name={"password"}
                          onChange={handleInputChange}
                          label={"Senha"}
                          variant={"outlined"}
                          type={"password"}
                          fullWidth
                          required
                          margin={"normal"}
                        />

                    </InputsContainer>
                    <Button
                     color={'primary'}
                     variant={'contained'}
                     type={'submit'}
                     fullWidth
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>}
                    </Button>
                </SingUpFormContainer>

            </form>
        </ScreenContainer>
    )
}

export default SingUpPage
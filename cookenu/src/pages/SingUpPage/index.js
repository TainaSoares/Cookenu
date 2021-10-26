import { Button, TextField } from "@material-ui/core"
import React from "react"
import { useHistory } from "react-router"
import useForm from "../../hooks/useForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { singUp } from "../../services/user"
import { InputsContainer, ScreenContainer } from "../LoginPage/styled"
import {SingUpFormContainer} from "./styled"

const SingUpPage = ({setRightButtonText}) =>{
    useUnprotectedPage()
    const history= useHistory()

    const [form, handleInputChange, clear] = useForm({name: "", email:"", password:""})

    const onSubmitForm = (event) =>{
        event.preventDefault()
        singUp(form, clear, history, setRightButtonText)
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
                        Fazer Cadastro
                    </Button>
                </SingUpFormContainer>

            </form>
        </ScreenContainer>
    )
}

export default SingUpPage
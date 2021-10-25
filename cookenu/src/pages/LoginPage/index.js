import React from "react"
import { ScreenContainer, LogoImage, InputsContainer, SingUpBottonContainer } from "./styled"
import logo from "../../assets/logo.jpg"
import { Button, TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"
import { goToSingUp } from "../../routes/coordinator"

const LoginPage = () => {
    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
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
                        Login
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
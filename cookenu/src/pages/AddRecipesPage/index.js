import React, {useState} from 'react'
import useProtectedPage from "../../hooks/useProtectedPage"
import { RecipeContainer, ScreenContainer } from './styled'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, AddRecipeFormContainer } from './styled'
import useForm from '../../hooks/useForm'
import {createRecipe} from "../../services/recipe"
import CircularProgress from '@material-ui/core/CircularProgress'

const AddRecipesPage = () => {
    useProtectedPage()
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    createRecipe(form, clear, setIsLoading)
  }
    return (
        <ScreenContainer>
            <RecipeContainer>
                <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
                <form onSubmit={onSubmitForm}>
                    <AddRecipeFormContainer>
                        <InputsContainer>
                            <TextField
                                name={"title"}
                                value={form.title}
                                onChange={onChange}
                                label={'Título'}
                                variant={'outlined'}
                                fullWidth
                                required
                                autoFocus
                                margin={'normal'}
                            />
                            <TextField
                                name={"description"}
                                value={form.description}
                                onChange={onChange}
                                label={'Descrição'}
                                variant={'outlined'}
                                fullWidth
                                required
                                margin={'normal'}
                            />
                            <TextField
                                name={"image"}
                                value={form.image}
                                onChange={onChange}
                                label={'Foto'}
                                variant={'outlined'}
                                fullWidth
                                required
                                margin={'normal'}
                            />
                        </InputsContainer>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            type={'submit'}
                            fullWidth
                        >
                            {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Adicionar Receita</>}
                        </Button>
                    </AddRecipeFormContainer>
                </form>
            </RecipeContainer>
        </ScreenContainer>
    )
}



export default AddRecipesPage
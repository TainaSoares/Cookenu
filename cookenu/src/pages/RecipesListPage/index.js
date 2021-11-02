import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import {BASE_URL} from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData"
import Recipecard from "../../components/RecipeCard/index"
import { RecipeListContainer, AddRecipeButton } from "./styled"
import { Add } from "@material-ui/icons"
import { useHistory } from "react-router"
import{goToAddRecipes, goToRecipeDetail} from "../../routes/coordinator"
import Loading from "../../components/Loading/Loading"

const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickDetail = (id) => {
        goToRecipeDetail(history,id)
    }

    console.log(recipes)

    const recipeCards = recipes.map((recipe)=>{
        return (
            <Recipecard
              key={recipe.recipe_id}
              title={recipe.title}
              image={recipe.image}
              onClick={() => onClickDetail(recipe.recipe_id)}
            />
        )
    })
    return (
        <RecipeListContainer>
            {recipeCards.length >0 ? recipeCards : <Loading />}
            <AddRecipeButton
              color={"primary"}
              onClick={()=>goToAddRecipes(history)}
            >
                <Add/>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}


export default RecipesListPage
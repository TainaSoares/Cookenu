import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"

const RecipeDetailPage = () =>{
    useProtectedPage()
    return(
        <div>
            RecipeDetailPage
        </div>
    )
}

export default RecipeDetailPage

export const goToLogin = (history) =>{
    history.push("/login")
}

export const goToSingUp = (history) =>{
    history.push("/cadastro")
}

export const goToRecipesList = (history) =>{
    history.push("/")
}

export const goToRecipeDetail = (history,id) =>{
    history.push(`/detalhe/${id}`)
}

export const goToAddRecipes = (history) =>{
    history.push("/adicionar/receitas")
}

import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/index"
import SingUpPage from "../pages/SingUpPage/index"
import RecipesListPage from "../pages/RecipesListPage/index"
import RecipeDetailPage from "../pages/RecipeDetailPage/index"
import AddRecipesPage from "../pages/AddRecipesPage/index"
import ErrorPage from "../pages/ErrorPage/index"

const Router = ({ setRightButtonText}) => {
    return (

            <Switch>
                <Route exact path="/login">
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path="/cadastro">
                    <SingUpPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path="/">
                    <RecipesListPage />
                </Route>
                <Route exact path="/adicionar/receitas">
                    <AddRecipesPage />
                </Route>
                <Route exact path="/detalhe/:id">
                    <RecipeDetailPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router
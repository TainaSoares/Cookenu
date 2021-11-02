
import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {RecipeCardContainer, RecipeCardContent} from "./styled"

const Recipecard = (props) => {
    useProtectedPage()
    console.log(props)

  
  return (
    <RecipeCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          height={"150px"}
          image={props.image}
          alt={props.title}
        />
        <RecipeCardContent>
          <Typography align={"center"}>
            {props.title.toUpperCase()}
          </Typography>
        </RecipeCardContent>
      </CardActionArea>
    </RecipeCardContainer>
  );
}

export default Recipecard
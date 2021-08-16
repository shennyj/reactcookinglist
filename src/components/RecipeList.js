import React from 'react'
import Recipe from './Recipe'
import AddRecipe from './AddRecipe'


export default function RecipeList({recipes}) {

  
   
   

    return (
            <div className="recipeList">
                {recipes.map(recipe=>{
                    return(
                        <Recipe
                            key={recipe.id}
                            recipe={recipe}
                        />
                    )
                })}
                <AddRecipe/>
            </div>

    )
}

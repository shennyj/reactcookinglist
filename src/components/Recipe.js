import React,{useContext} from 'react'
import IngredientsList from './IngredientsList'
import {RecipeContext} from './App'

export default function Recipe({recipe}) {
    const {handleDeleteRecipe,handleSelectedRecipe} =  useContext(RecipeContext)
    return (
        <div className="recipe">
            <div className="recipeName">
                <h2 className="recipeTitle">{recipe.name}</h2>
                
            </div>
            <div className="servings recipe-info">
                <span className="recipe-title">Servings:</span>
                <span className="recipe-amount">{recipe.servings}</span>
                
            </div>
            <div className="cookTime recipe-info">
                <span className="recipe-title">Cooktime:</span>
                <span className="recipe-amount">{recipe.cookTime}</span>
            </div>
            <div className="instructions recipe-info">
                <span className="recipe-title recipe-instructions-title">Instructions:</span>
                <div className="recipe-amount recipe-instructions">{recipe.instructions}</div>
            </div>
            <div className="ingredients recipe-info">
                <div className="recipe-title recipe-ingredients-title">Ingredients:</div>
                <IngredientsList
                    ingredients={recipe.ingredients}
                />
            </div>
            <div className="btn">
                <button 
                    onClick={()=>handleSelectedRecipe(recipe.id)}
                    className="btn btn-primary edit-btn">EDIT</button>
                <button 
                    onClick={()=>handleDeleteRecipe(recipe.id)}
                    className="btn btn-danger delete-btn">DELETE</button>
            </div>
          
            
        </div>
    )
}

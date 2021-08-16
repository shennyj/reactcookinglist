import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientsList({ingredients}) {
    return (
        <div className="ingredientsList">
            {ingredients.map(ingredient=>{
                return(
                    <Ingredient
                        key={ingredient.id}
                        ingredient={ingredient}
                    />
                )
            })}
        </div>
    )
}

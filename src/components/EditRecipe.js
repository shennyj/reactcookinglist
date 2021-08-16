import React,{useContext} from 'react'
import EditIngredient from './EditIngredient'
import {RecipeContext} from './App'
import { v4 as uuidv4 } from 'uuid'

export default function EditRecipe(props) {
    const{handleChangeRecipe,handleSelectedRecipe} = useContext(RecipeContext)
    const{
        selectedRecipe,
    } = props
    function handleChange(change){//change is an object passed in
        handleChangeRecipe(selectedRecipe.id,{...selectedRecipe,...change})
    }
    function handleChangeIngredient(id,ingredient){
        const newIngredients = [...selectedRecipe.ingredients]
        const index = newIngredients.findIndex(ingredient=>ingredient.id===id)
        newIngredients[index] = ingredient
        handleChange({ingredients:newIngredients})
    }

    function handleAddIngredient(){
        const newIngredient={
          id:uuidv4(),
          name:'',
          amount:''
        }
        //ingredients is an array of objects
        //add a new object at the end of the array
        handleChange({ingredients:[...selectedRecipe.ingredients,newIngredient]})
        
    }
    function handleDeleteIngredient(id){
        handleChange({
            ingredients:selectedRecipe.ingredients.filter(ingredient=>{
                return ingredient.id!==id
            })
        })
    }
   
    return (
        <div className="editRecipe">
            <div className="editRecipeButton">
                <button 
                    onClick={()=>handleSelectedRecipe(undefined)}
                    className="btn">&times;</button>
            </div>
            <div className="editRecipeDetails">
                <label htmlFor="name">Name</label>
                <input 
                    onChange={(e)=>handleChange({name:e.target.value})}
                    type="text" 
                    name="name" 
                    id="name"
                    value={selectedRecipe.name}
                    />

                <label htmlFor="servings">Servings</label>
                <input 
                    onChange={(e)=>handleChange({servings:e.target.value})}
                    type="number" 
                    name="servings" 
                    id="servings"
                    value={selectedRecipe.servings}
                    />

                <label htmlFor="cookTime">Cook Time</label>
                <input 
                    onChange={(e)=>handleChange({cookTime:e.target.value})}
                    type="text" 
                    name="cookTime" 
                    id="cookTime"
                    value={selectedRecipe.cookTime}
                    />

                <label htmlFor="instructions">Instructions</label>
                <textarea 
                    className="textareaClass"
                    onChange={(e)=>handleChange({instructions:e.target.value})}
                    name="name" 
                    id="name"
                    value={selectedRecipe.instructions}
                    />
            </div>
            <br/>
            <label className="ingredientsLabel">Ingredients</label>
            <div className="ingredientsGrid">
                <div className="ingredientTitle">Name</div>
                <div className="ingredientTitle">Amount</div>
                <div></div>
                {selectedRecipe.ingredients.map(ingredient=>{
                    return(
                        <EditIngredient
                            key={ingredient.id}
                            ingredient={ingredient}
                            handleChangeIngredient={handleChangeIngredient}
                            handleDeleteIngredient={handleDeleteIngredient}
                        />
                    )
                })}
            </div>
            <div className="editRecipeAddIngredient">
                <button 
                    onClick={handleAddIngredient}
                    className="btn btn-primary">Add Ingredient</button>
            </div>
        </div>
    )
}

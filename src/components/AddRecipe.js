import React,{useContext,useEffect} from 'react'
import {RecipeContext} from './App'

export default function AddRecipe() {
    const {handleAddRecipe} = useContext(RecipeContext)
    return (
        <div className="btn btn-prinmary addRecipe">
            <button onClick={handleAddRecipe}>ADD RECIPE</button>
        </div>
    )
}

import React from 'react'

export default function EditIngredient(props) {
    const{
        ingredient,handleChangeIngredient,handleDeleteIngredient
    }=props

    function handleChange(change){
        handleChangeIngredient(ingredient.id,{...ingredient,...change})
    }
    
   

    return (
        <>
            <input 
                onChange={(e)=>handleChange({name:e.target.value})}
                className="recipeEditInput" 
                type="text"
                value={ingredient.name}
                />
            <input 
                onChange={(e)=>handleChange({amount:e.target.value})}
                className="recipeEditInput" 
                type="text"
                value={ingredient.amount}
                />
            <button 
                onClick={()=>handleDeleteIngredient(ingredient.id)}
                className="btn btn-danger btn-delete-ingredient">&times;</button>
        </>
    )
}

import React from 'react'

export default function Ingredient({ingredient}) {
    return (
        <>
            <span>{ingredient.name}</span>
            <span>{ingredient.amount}</span>
        </>
    )
}

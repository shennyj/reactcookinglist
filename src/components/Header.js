import React,{useContext} from 'react'
import SearchBar from './SearchBar'

export default function Header({setSearchRecipe}) {

    return (
        <div className="header">
            John's Recipe List
            <SearchBar
                setSearchRecipe={setSearchRecipe}
            />
        </div>
    )
}

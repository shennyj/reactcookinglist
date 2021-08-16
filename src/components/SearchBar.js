import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar({setSearchRecipe}) {

    return (
        
        <div className="searchBar">

            <SearchIcon className="search-icon"></SearchIcon>

            <input 
                onChange={(e)=>setSearchRecipe(e.target.value)}
                className="searchInput"
                type="text" 
                placeholder="Search Recipe..."/>
            
            
        </div>
    )
}

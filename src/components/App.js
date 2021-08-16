import React,{useState,useEffect} from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import EditRecipe from './EditRecipe'
import { v4 as uuidv4 } from 'uuid'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'reactRecipeList.recipes'

function App() {
  const [recipes,setRecipes] = useState(initialRecipes)
  const [selectedRecipeId,setSelectedRecipeId]=useState()
  const [searchRecipe,setSearchRecipe] = useState('')
  const selectedRecipe = recipes.find(recipe=>recipe.id===selectedRecipeId)
  
  useEffect(()=>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON!=null) setRecipes(JSON.parse(recipeJSON))
  },[])
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
  },[recipes])

  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe,
    handleSelectedRecipe,
    handleChangeRecipe,
    setSearchRecipe
  }

  function handleChangeRecipe(id,recipe){
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(recipe=>recipe.id===id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleSelectedRecipe(id){
    setSelectedRecipeId(id)
  }

  function handleAddRecipe(){
    const newRecipe={
      id:uuidv4(),
      name:'Food',
      servings:'',
      instructions:'',
      ingredients:[
        {
          id:uuidv4(),
          name:'',
          amount:''
        }
      ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes,newRecipe])
  }
 

  function handleDeleteRecipe(id){
    if(selectedRecipeId!=null && selectedRecipeId===id){
      setSelectedRecipeId(undefined)
    }
    const filteredRecipes=recipes.filter(recipe=>recipe.id!==id)
    setRecipes(filteredRecipes)
  }

  //Filter our searches to find a certain recipe in our list
  function filterRecipes(){
    return recipes.filter(recipe=>{
      return recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
    })
  }


  return (
    <RecipeContext.Provider value={recipeContextValue}>
      
        <Header
          setSearchRecipe={setSearchRecipe}
        />
        <RecipeList
          recipes={filterRecipes()}
        />
        {selectedRecipe&& 
        <EditRecipe
          selectedRecipe={selectedRecipe}
        />}
       
      
    </RecipeContext.Provider>
  );
}

const initialRecipes=[
  {
    id:uuidv4(),
    name:'Baked Potato',
    servings:3,
    cookTime:'0:45',
    instructions:"1. Buy Potatoes\n2. Bake Potatoes\n3. Eat Potatoes",
    ingredients:[
      {
        id:uuidv4(),
        name:'Potatoes',
        amount:'3'
      },
      {
        id:uuidv4(),
        name:'Butter Oil',
        amount:'5 Tsps'
      }
    ]
  },
  {
    id:uuidv4(),
    name:'Grilled Steak',
    servings:2,
    cookTime:'1:30',
    instructions:"1. Buy Steak\n2. Grill Steak\n3. Eat Steak",
    ingredients:[
      {
        id:uuidv4(),
        name:'Steak',
        amount:'3 lbs'
      },
      {
        id:uuidv4(),
        name:'Salt',
        amount:'6 Tsps'
      }

    ]
  }
]

export default App;

import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext.jsx"
import RecipeCard from "../components/RecipeCard.jsx"

const Recipes =()=>{
    const {data} = useContext(recipecontext)
    const renderrecipes = data.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe}/>
    ))
    return(
        <div className="flex flex-wrap">{data.length > 0 ? renderrecipes: " No recipes found"}</div>
    )
}

export default Recipes
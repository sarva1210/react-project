import { Link } from "react-router-dom"
const RecipeCard = (props) =>{
    const {id, image, title, desc, chef}= props.recipe
    return(
        <Link to={`/recipes/details/${id}`} className="group mr-5 mb-6 w-[260px] overflow-hidden rounded-2xl bg-slate-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <img className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105" src={image} alt="" />
            <h1 className="px-4 pt-3 text-lg font-bold text-white">{title}</h1>
            <small className="px-4 text-red-400 font-medium">{chef}</small>
            <p className="px-4 pb-4 text-sm text-gray-400">{desc.slice(0,100)}....{""}<small className="text-blue-400">more</small></p>
        </Link>
    )
}

export default RecipeCard
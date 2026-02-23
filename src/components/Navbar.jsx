import { NavLink } from "react-router-dom"

const Navbar = () =>{
    return(
        <div className=" mb-6 flex items-center justify-center gap-x-10 bg-slate-900/70 backdrop-blur-md py-4 rounded-xl shadow-lg">
            <NavLink className={(e)=> `px-4 py-2 rounded-lg transition-all duration-200 
            ${e.isActive ? "bg-red-500 text-white shadow-md"  : "text-gray-300 hover:text-white hover:bg-slate-800"}`} to= "/">Home</NavLink>
            <NavLink className={(e)=> `px-4 py-2 rounded-lg transition-all duration-200 
            ${e.isActive ? "bg-red-500 text-white shadow-md"  : "text-gray-300 hover:text-white hover:bg-slate-800"}`} to= "/recipes">Recipes</NavLink>
            <NavLink className={(e)=> `px-4 py-2 rounded-lg transition-all duration-200 
            ${e.isActive ? "bg-red-500 text-white shadow-md"  : "text-gray-300 hover:text-white hover:bg-slate-800"}`} to= "/about">About</NavLink>
            <NavLink className={(e)=> `px-4 py-2 rounded-lg transition-all duration-200 
            ${e.isActive ? "bg-red-500 text-white shadow-md"  : "text-gray-300 hover:text-white hover:bg-slate-800"}`} to= "/create-recipe">Create-recipes</NavLink>
            <NavLink className={(e)=> `px-4 py-2 rounded-lg transition-all duration-200 
            ${e.isActive ? "bg-red-500 text-white shadow-md"  : "text-gray-300 hover:text-white hover:bg-slate-800"}`} to= "/fav">Fav</NavLink>
        </div>
    )
}

export default Navbar
import { NavLink } from "react-router-dom"

const Navbar = () =>{
    return(
        <div className="flex items-center justify-center gap-x-10 text-sm mb-10">
            <NavLink className={(e)=> e.isActive ? "text-red-500":""} to= "/">Home</NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-500":""} to= "/recipes">Recipes</NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-500":""} to= "/about">About</NavLink>
            <NavLink className={(e)=> e.isActive ? "text-red-500":""} to= "/create-recipe">Create-recipes</NavLink>
        </div>
    )
}

export default Navbar
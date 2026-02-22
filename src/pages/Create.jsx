import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { recipecontext } from "../context/RecipeContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Create =()=>{
    const navigate = useNavigate()
    const {data, setdata} = useContext(recipecontext)
    const {register, handleSubmit, reset} = useForm()

    const SubmitHandler = (recipe)=>{
        recipe.id = nanoid()
        setdata([...data, recipe])
        toast.success("New recipe created!!")
        reset()
        navigate("/recipes")
    }
    return(
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <input className="block p-2 border-b outline-0" {...register("image")} type="url" placeholder="Enter image url"/>
            <small className="text-red-500">This is how the error is shown</small>

            <input className="block p-2 border-b outline-0" {...register("title")} type="text" placeholder="Recipe Title"/>
            {/* <small className="text-red-500">This is how the error is shown</small> */}

            <input className="block p-2 border-b outline-0" {...register("chef")} type="text" placeholder="Chef name"/>

            <textarea className="block p-2 border-b outline-0" {...register("desc")} type="text" placeholder="enter description"></textarea>
            {/* <small className="text-red-500">This is how the error is shown</small> */}

            <textarea className="block p-2 border-b outline-0" {...register("ingr")} placeholder="write ingredients seperated by comma"></textarea>
            {/* <small className="text-red-500">This is how the error is shown</small> */}

            <textarea className="block p-2 border-b outline-0" {...register("inst")} placeholder="write instructions seperated by comma"></textarea>
            {/* <small className="text-red-500">This is how the error is shown</small> */}

            <select className="block p-2 border-b outline-0" {...register("category")}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
            </select>

            <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">Save Recipe</button>
        </form>
    )
}

export default Create
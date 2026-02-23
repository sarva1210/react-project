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
        const copydata = [...data]
        copydata.push(recipe)
        setdata(copydata)
        localStorage.setItem("recipes", JSON.stringify(copydata))
        toast.success("New recipe created!!")
        reset()
        navigate("/recipes")
    }
    return(
        <form onSubmit={handleSubmit(SubmitHandler)} className="mx-auto max-w-2xl bg-slate-900/80 backdrop-blur-md mx-auto w-full max-w-xl p-6 space-y-4 mt-6 rounded-3xl shadow-2xl">
            <input className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" {...register("image")} type="url" placeholder="Enter image url"/>
            <small className="text-red-500">This is how the error is shown</small>

            <input className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" {...register("title")} type="text" placeholder="Recipe Title"/>

            <input className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" {...register("chef")} type="text" placeholder="Chef name"/>

            <textarea className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 min-h-[120px] resize-none" {...register("desc")} type="text" placeholder="enter description"></textarea>

            <textarea className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 min-h-[120px] resize-none" {...register("ingr")} placeholder="write ingredients seperated by comma"></textarea>

            <textarea className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 min-h-[120px] resize-none" {...register("inst")} placeholder="write instructions seperated by comma"></textarea>

            <select className=" w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-red-500" {...register("category")}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
            </select>

            <button className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition-all duration-200 hover:bg-red-600 hover:shadow-lg active:scale-[0.98]">Save Recipe</button>
        </form>
    )
}

export default Create
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { recipecontext } from "../context/RecipeContext"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const SingleRecipe = ()=>{
    const {data, setdata} = useContext(recipecontext)
    const navigate = useNavigate()
    const params = useParams()
    const recipe = data.find((recipe) => params.id == recipe.id)
    const {register, handleSubmit, reset} = useForm({defaultValues:{
        title: recipe?.title,
        chef: recipe?.chef,
        image: recipe?.image,
        inst: recipe?.inst,
        desc: recipe?.desc,
        ingr: recipe?.ingr

    }})

    const SubmitHandler = (recipe)=>{
        const index = data.findIndex((recipe)=>params.id == recipe.id)
        const copydata = [...data]
        copydata[index] = {...copydata[index], ...recipe}
        setdata(copydata)
        localStorage.setItem("recipes", JSON.stringify(copydata))
        toast.success("Recipe updated!!!")
    }

    const DeleteHandler = () =>{
        const filterdata = data.filter(r => r.id!= params.id)
        setdata(filterdata)
        localStorage.setItem("recipes", JSON.stringify(filterdata))
        toast.success("Recipe Deleted!!!")
        navigate("/recipes")
    }

    const [favorite, setfavourite] = useState(
        JSON.parse(localStorage.getItem("fav")) || []
    )

    const FavHandler =()=>{
        let copyfav = [...favorite]
        copyfav.push(recipe)
        setfavourite(copyfav)
        localStorage.setItem("fav",JSON.stringify(copyfav))
    }
    const UnFavHandler =()=>{
        const filterfav = favorite.filter((f) => f.id != recipe?.id)
        setfavourite(filterfav)
        localStorage.setItem("fav",JSON.stringify(filterfav))

    }
    useEffect(()=>{
        console.log("SingleRecipe.jsx Mounted")
        return()=>{
            console.log("SingleRecipe.jsx Mounted")
        }
    },[])
    return(
        recipe ? (
            <div className="w-full flex items-start gap-12 px-10 py-8">
                <div className="relative w-[45%] rounded-3xl bg-slate-900/80 p-8 shadow-xl">
                {favorite.find((f) => f.id == recipe?.id) ? (<i onClick={UnFavHandler} class="right-[5%] absolute text-3xl text-red-500 ri-heart-3-fill"></i>):(<i onClick={FavHandler} class="right-[5%] absolute text-3xl text-red-500 ri-heart-3-line"></i>)}
                    <h1 className="text-4xl font-bold text-white mb-4">{recipe.title}</h1>
                    <img className="h-[240px] w-full rounded-xl object-cover mb-4" src={recipe.image} alt="" />
                    <h1 className="text-red-400 font-medium">{recipe.chef}</h1>
                    <h1 className="mt-3 text-gray-300 leading-relaxed">{recipe.desc}</h1>
                </div>

                <form className="w-[55%] rounded-3xl bg-slate-900/80 p-10 shadow-xl space-y-4" onSubmit={handleSubmit(SubmitHandler)}>
                    <input className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500" {...register("image")}  type="url" placeholder="Enter image url"/>
                    <small className="text-red-500">This is how the error is shown</small>

                    <input className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500" {...register("title")} type="text" placeholder="Recipe Title"/>

                    <input className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500" {...register("chef")} type="text" placeholder="Chef name"/>

                    <textarea className="h-[70px] resize-none w-full p-2 border-b border-slate-400 outline-0" {...register("desc")} type="text" placeholder="enter description"></textarea>

                    <textarea className="h-[70px] resize-none w-full p-2 border-b border-slate-400 outline-0" {...register("ingr")} placeholder="write ingredients seperated by comma"></textarea>

                    <textarea className="h-[70px] resize-none w-full p-2 border-b border-slate-400 outline-0" {...register("inst")} placeholder="write instructions seperated by comma"></textarea>

                    <select className="block w-full p-2 rounded-xl outline-0 bg-gray-800" {...register("category")}>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="supper">Supper</option>
                        <option value="dinner">Dinner</option>
                    </select>

                    <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">Update Recipe</button>
                    <button onClick={DeleteHandler} className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600">Delete Recipe</button>
                </form>
            </div>
        ) : ("Loading....")
    )
}

export default SingleRecipe
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = ()=>{
  return(
    <div className="w-screen h-screen py-10 px-[20%] text-white font-thin bg-gray-800">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App
import sample from "../../assets/Honda-1.jpg"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import EcomContext from "../../context/EcomContext";
import { useNavigate } from "react-router-dom";


function Detail() {
    const params = useParams()
    const carid = params.id
    const {product,addToCart} = useContext(EcomContext)
    const caritem = product.find((item)=> item._id === carid)
     console.log(caritem);
     const [state, dispatch] = useContext(AuthContext)
    const isAuthenticated = state.accessToken !== null
    const redirect = useNavigate()

    const login = () =>{
      if (!isAuthenticated) {
        redirect("/login")
      }
    }
  return (
    <div className="flex m-[5%] gap-4">
        <div className="w-[50%]">
            <img src={ "http://localhost:3000/" + caritem?.img} alt="" />
        </div>
        <div className="w-[50%]">
              <h1 className="text-2xl font-bold border-b-2 mb-5">{caritem?.name}</h1>
              <p>Lorem ipsumdolor sit amet, consectetur adipisicing elit. Adipisci esse laboriosam tenetur, sit doloribus neque exercitationem vero ipsum in voluptates.</p>
               <p className="mt-5 font-bold">Category:<span className="italic text-orange-500">{caritem?.category.name}</span></p>
              <p className="text-xl font-bold mb-5 mt-5">#{caritem?.price}</p>
              <button  onClick={isAuthenticated ? ()=> addToCart(caritem._id) : login } className="bg-orange-500 p-[10px] rounded-md">Add to cart</button>
        </div>

    </div>
  )
}

export default Detail
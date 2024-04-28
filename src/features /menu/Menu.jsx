import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem"
import Navbar from "../../ui/Navbar"
import useFadeInOnScroll from "../../utilties /useObserve";
import { useSelector } from "react-redux";
import CartItem from "../cart/CartItem";
import CartOverview from "../cart/CartOverview";

function Menu() {
   const menu =  useLoaderData()
  const [ref , isVisible] = useFadeInOnScroll()
  const userName = useSelector(state => state.user.userName)
  const cart = useSelector(state => state.cart)
 const pizza = useSelector(state => state.cart)

 
  return(
    <>
     <Navbar />
     <p className="text-center my-6">Welcome back <span className="text-red-700">{userName} </span> </p>
      <div ref={ref} className={ `${isVisible ? " opacity-1 translate-y-0 transition-all ease-in duration-1000 " : "opacity-0 translate-y-[100px] "} flex justify-center items-center max-w-3xl mx-auto w-full`}>
        <ul className=" w-full">
    {menu.map(pizza => <MenuItem pizza={pizza}  key={pizza.id}/>  )}
      </ul>
      </div>
      <CartOverview />
      </>
  ) 
}

export async function loader(){
 const menu = await getMenu()
 return menu 
}
 
export default Menu;

import CartOverview from "../features /cart/CartOverview";
import Header from "./header";
import { Outlet } from "react-router-dom";
 import { useNavigation } from "react-router-dom";
import Loader from './Loader'
import Footer from "./footer";


export default function AppLayout() {
   const navigation = useNavigation();
   const isLoading  = navigation.isLoading === "loading";
  return (
    <div className="layout">

   {isLoading && <Loader />}
      
    {/* <Header /> */}
    <main>
    <Outlet />
    </main>
    {/* <CartOverview />  */}
    <Footer/>
    </div>
  )
}







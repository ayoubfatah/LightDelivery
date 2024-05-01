import CartOverview from "../features /cart/CartOverview";
import Header from "./header";
import { Outlet } from "react-router-dom";
 import { useNavigation } from "react-router-dom";
import Loader from './Loader'
import Footer from "./footer";


export default function AppLayout() {
   const navigation = useNavigation();
  console.log(navigation.state);
   const isLoading  = navigation.state === "loading";
 
  return (
    <div className="layout">
   {isLoading && <Loader />}
    <main>
    <Outlet />
    </main>
    <Footer/>
    </div>
  )
}







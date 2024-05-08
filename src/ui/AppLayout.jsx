import CartOverview from "../features /cart/CartOverview";
import Header from "./header";
import { Outlet } from "react-router-dom";
 import { useNavigation } from "react-router-dom";
import Loader from './Loader'
import Footer from "./footer";
import { Toaster } from "react-hot-toast";


export default function AppLayout() {
   const navigation = useNavigation();
  console.log(navigation.state);
   const isLoading  = navigation.state === "loading";
 
  return (
    <div className="layout">
   {isLoading && <Loader />}
    <main>
    <Toaster position="bottom-center" gutter={14}  containerStyle={{margin:"8px"}} 
  toastOptions={{
    success:{
      duration: 2500,

    },
    error:{
      duration:5000,
    },
    style:{
      fontSize: "16px",
      maxWidth: "500px",
      padding: "16px 24px",
    }
  } } />
    <Outlet />
    </main>
    <Footer/>
    </div>
  )
}







import { useEffect, useState } from "react";
import { Form, redirect, useActionData, useFetcher, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Navbar from "../../ui/Navbar";
import { useDispatch, useSelector } from "react-redux";
import store from "../../stores/store"
import { clearCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { fetchAddress } from "../user/userSlice";
import { point } from "leaflet";



// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

  
  
  function CreateOrder() {
    const item = useSelector(select => select.cart?.cart)
    const finallPrice = item.reduce((acc, curr) => acc + curr.totalPrice, 0);

  // const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation()
  const isOrdered = navigation.state === "loading"
  const formErrors = useActionData()
  const [withPriority , setWithPriority] = useState(false)
 const {userName , address , status , position , error: addressError} = useSelector(state => state.user)
  const positionLoading = status === "loading" 
 const cart = useSelector(state => state.cart.cart)
 const dispatch = useDispatch()

 if (cart.length <= 0) {
  return  <EmptyCart/>
 
}
function handlePosition(){
   dispatch(fetchAddress())
  
}

 
  return (
   <>
   <Navbar />
    <div className="h-lvh flex justify-center items-center bg-[#fff0d5] ">
      <div className=" max-w-3xl bg-white h-[600px]  flex justify-center  items-center text-black shadow-lg" >

      <Form method="POST" className="p-[50px]"  >
      <h2 className="text-lg"> Ready to order? Let's go!</h2>

        <div className="my-3">
          <label className="text-sm">First Name</label>
          <div className="border">
          <input className="w-full p-1" type="text" name="customer" defaultValue={userName}  placeholder="Your Name" required />
          </div>
        </div>

        <div className="my-3">
          <label className="text-sm">Phone number *</label>
          <div className="border">
          <input className="w-full p-1" type="number" name="phone"  placeholder="Phone number" required />

          </div>
          {formErrors?.phone && <p className= "font-light text-sm text-red-600 p-1">{formErrors.phone}</p>}
        </div>

        <div className="my-3 relative">
          <label className="text-sm">Address</label>
          <div className="border">
            <input className="w-full  p-1 " disabled={positionLoading} defaultValue={address} type="text" name="address"  placeholder="Your Address"  required />
          </div>
         {!position.latitude && !position.longitude  && <div onClick={handlePosition} className="cursor-pointer ">
           <svg className="w-6 h-6 absolute bg-white  z-50 right-1 top-7" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 512 512"><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>   
           </div>}
          {status === "error" && <p className= "font-light text-sm text-red-600 p-1">{addressError}</p>}

        </div>

        <div className="my-3">
          <label className="text-sm">Additional information</label>
          <div className="border">
            <input onChange={(e)=>console.log((e.target.value).toLocaleUpperCase())} className="w-full p-1 " type="text" name="Additional_information"  placeholder="Your information"  required />
          </div>
        </div>

        <div>
          <input
           className="mr-1 accent-[#C20303]"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label  htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" value={finallPrice} name="price" />
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />
          <input type="hidden" value={position.latitude && position.longitude ?`latitude:${position.latitude},longitude ${position.longitude}` : ""} name="position" />
          <button className="text-[16px] text-white font-normal inline-block mt-4  py-2 px-5 bg-[#C20303]" disabled={isOrdered}>{isOrdered ? "placing an order ..." : "Order now"}</button>
        </div>
      </Form>

      </div>
      <div className=" w-[400px] h-[600px] ">
        <img  className="bg-cover bg-no-repeat bg-center" src="/src/imgs/eating.jpg" alt="" />
      </div>
    </div></>
  );
}

 
export async function action({request}){
   const formData = await request.formData()
   const data = Object.fromEntries(formData)

  const order={
    ...data , 
    cart: JSON.parse(data.cart), //converting it  back to an object 
    priority: data.priority === "on"
  }
   
  const errors = {}
  if(!isValidPhone(order.phone)) errors.phone = "Please give us your correct phone number."

    if(Object.keys(errors).length > 0 ) return errors
    // if there is no bugs create order and redirect 
  const newOrder = await createOrder(order);
  store.dispatch(clearCart() )
  return redirect(`/order/${newOrder.id}`)
  
} 

export default CreateOrder;
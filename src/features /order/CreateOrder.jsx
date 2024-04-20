import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const [value, setValue] = useState()
  const navigation = useNavigation()
  const isOrdered = navigation.state === "loading"
  const formErrors = useActionData()




  const cart = fakeCart;
  return (
    <div className="h-lvh flex justify-center items-center bg-[#fff0d5] ">
      <div className=" w-[400px] bg-white h-[600px]  flex justify-center  items-center text-black shadow-lg" >
      <Form method="POST" className="p-[50px]"  >
      <h2 className="text-lg"> Ready to order? Let's go!</h2>

        <div className="my-3">
          <label className="text-sm">First Name</label>
          <div className="border">
          <input className="w-full p-1" type="text" name="customer"  placeholder="Your Name" required />
          </div>
        </div>

        <div className="my-3">
          <label className="text-sm">Phone number *</label>
          <div className="border">
          <PhoneInput
          flags={true}
          defaultCountry="MA"
          value={value}
          onChange={setValue}
          className="w-full p-1"
      />
          </div>
          {formErrors?.phone && <p className= "font-light text-sm text-red-600 p-1">{formErrors.phone}</p>}
        </div>

        <div className="my-3">
          <label className="text-sm">Address</label>
          <div className="border">
            <input className="w-full  p-1 " type="text" name="address"  placeholder="Your Address"  required />
          </div>
        </div>

        <div className="my-3">
          <label className="text-sm">Additional information</label>
          <div className="border">
            <input className="w-full p-1 " type="text" name="Additional_information"  placeholder="Your information"  required />
          </div>
        </div>

        <div>
          <input
           className="mr-1 accent-[#C20303]"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label  htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />
          <button className="text-[16px] text-white font-normal inline-block mt-4  py-2 px-5 bg-[#C20303]" disabled={isOrdered}>{isOrdered ? "placing an order ..." : "Order now"}</button>
        </div>

      </Form>

      </div>
      <div className=" w-[400px] h-[600px] ">
        <img  className="bg-cover bg-no-repeat bg-center" src="/src/imgs/eating.jpg" alt="" />
      </div>
    </div>
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
  if(!isValidPhone(order.phone)) errors.phone = "Please give us your correct phone number . We will need it to contact you"

    if(Object.keys(errors).length > 0 ) return errors
    // if there is no bugs creatorder and redirect 
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`)
} 

export default CreateOrder;




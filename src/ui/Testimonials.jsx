import { useState } from "react"
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';





export default function Testimonials() {
    const [currSlide , setCurrentSlide] = useState(0)
  return (
//     <section className=" flex justify-center items-center py-[90px]">
//     <button className="text-[#C20303]  absolute left-0 rotate-90 ">PREV</button>
//     <button className="text-[#C20303] absolute right-0 rotate-90 ">NEXT</button>
//    <div className="overflow-hidden relative">
    
//    <div className="flex items-center flex-col gap-10">
//       <p className="text-center">“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”</p>
//       <span className="text-[#C20303]">David Smith</span>
//       <div className="flex items-center">
//       <button className="w-3 h-3 m-1 bg-gray-400 rounded-md text-sm  "></button>
//       <button className="w-3 h-3 m-1 bg-gray-400 rounded-md text-sm  "></button>
//       <button className="w-3 h-3 m-1 bg-gray-400 rounded-md text-sm  "></button>
//       </div>
//     </div>
  
//    </div>
//   </section>
<AwesomeSlider    animation="foldOutAnimation"  bullets={false} className="aws-btn">
    <div >
     <div className="flex items-center flex-col ">
     <img className="w-[60px] h-[60px]" src="src/imgs/Ellipse.png" alt="" />      

        <p className="text-center mt-5" >“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”</p>
        <span className="text-[#C20303] mt-5">David Smith</span>
      </div>
    </div>
    <div >
     <div className="flex items-center flex-col">
     <img className="w-[60px] h-[60px]" src="src/imgs/Ellipse2.png" alt="" />      
        <p className="text-center  mt-5">“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”</p>
        <span className="text-[#C20303]  mt-5">Sarah wick</span>
      </div>
    </div>
    <div>
     <div className="flex items-center flex-col">
     <img className="w-[60px] h-[60px]" src="src/imgs/Ellipse3.png" alt="" />      

        <p className="text-center  mt-5">“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”</p>
        <span className="text-[#C20303] mt-5">Ayoub lm9owd</span>
      </div>
    </div>

  </AwesomeSlider>

  )
}


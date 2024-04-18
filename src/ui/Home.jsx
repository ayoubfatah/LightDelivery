import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <>
<main className="hero_img text-white flex  justify-center items-center text-center" >
    <div>
      <h1 className="text-[46px] font-bold uppercase ">
        Welcome to FastDeivery.
      </h1>
      <p>Where Every Bite is an Experience</p>
      <button onClick={()=> navigate("/order/new")}  className="inline-block mt-4 relative h-[40px] w-[120px]  bg-[#C20303]  ">Order Now</button>
    </div>
    </main>
    {/* our story  */}
    <section className="bg-white h-[500px] flex items-center justify-center">
  <div className="container mx-auto grid grid-cols-2  justify-between 	">
    <div className="">
      <h1 className="uppercase text-[32px] font-bold">Our <span className="text-[#C20303] uppercase">Story</span></h1>
      <p className="text-[16px] font-thin leading-tight">Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <button onClick={() => navigate("/menu")} className="text-[16px] text-white font-normal inline-block mt-4 relative h-[40px] w-[120px] bg-[#C20303]">Our Menu</button>
    </div>
    <div className=" bg-black h-full w-[500px] justify-self-end"></div>
  </div>
</section>
{/* Our gallery  */}
<section className="bg-[#FFF8EA] h-[500px] flex items-center justify-center">
  <div className="container mx-auto grid grid-cols-2  justify-between items-center	">
    <div className="order-2">
      <h1 className="uppercase text-[32px] font-bold">Explore Our  <span className="text-[#C20303] uppercase">Gallery</span></h1>
      <p className="text-[16px] font-thin leading-tight">Discover the vibrant ambiance and delectable dishes at FastDelivery. Explore our gallery for a taste of our culinary delights and cozy atmosphere</p>
      <button onClick={() => navigate("/")} className="text-[16px] text-white font-normal inline-block mt-4 relative h-[40px] w-[120px] bg-[#C20303]">Our Location</button>
    </div>
    <div className="order-1 bg-black h-[300px] w-[500px] justify-self-start"></div>
  </div>
</section>




    </>
  );
}

export default Home;

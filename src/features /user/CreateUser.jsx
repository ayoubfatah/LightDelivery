import { useState } from 'react';
import useFadeInOnScroll from '../../utilties /useObserve';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../stores/store';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
 
function CreateUser({clicked}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    if(!username) return
    dispatch(updateName(username))
    navigate("/menu")
    
  }
  
  const [ref , isVisible] = useFadeInOnScroll()
  return (
    <form ref={ref} onSubmit={handleSubmit} className={`p-10 overflow-hidden absolute o top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transform   `}>
     <div className={`${isVisible ? "fadeIn" : "" } opacity-0 translate-y-[100px]`}>
     <p className='mb-3'>👋 Welcome! Please start by telling us your name:</p>
     <div className='flex items-center gap-5'>
     <input
        className='h-10 bg-yellow-100 text-black    w-[200px] px-5 rounded-full'
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

    
        <div>
          <button className='inline-block bg-red-500 h-10 px-5 rounded-full'>Start ordering</button>
        </div>
      
     </div>
     </div>
    </form>
  );
}

export default CreateUser;

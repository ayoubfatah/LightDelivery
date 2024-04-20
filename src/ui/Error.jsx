import { useNavigate, useRouteError } from 'react-router-dom';

function Error () {
  const navigate = useNavigate();
  const error = useRouteError() ;
  return (
    <div className='flex justify-center items-center  flex-col h-lvh'>
      <h1>Something went wrong 😢</h1>
      <div> 
      <p>{error.data}</p>
      <p>{error.message}</p>
      </div>
      <button className='text-[#C20303]' onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error ;



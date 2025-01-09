import Pictures from '../Components/Pictures.js';
import { useEffect, useState } from 'react';

const Homepage = () => {


  const [allImage,setAllImage] = useState(0);

  useEffect(()=>{

  const timeout =  setInterval(() => {
  
  setAllImage(pro => (pro + 1) % Pictures.length);

  return ()=> clearInterval(timeout)
    
   }, 4000)

  },[])
 

  return (
    <div className={`min-h-[100vh] p-6 bg-cover bg-center bg-no-repeat homePics relative flex justify-end items-center `}  style={{ backgroundImage: `url(${Pictures[allImage].image})` }} >
   
   <div className="bg-black bg-opacity-50 absolute inset-0"></div>

   <div className={`min-h-[10rem] p-3 flex flex-col justify-center items-start gap-5 z-30`}>
   <p className='text-5xl max-w-[35rem] text-[orange]'>{Pictures[allImage].title}</p>

   <button className='h-[2rem] px-2 border bold text-white'>{Pictures[allImage].button}</button>
   </div>
    
    </div>
  )
}

export default Homepage;
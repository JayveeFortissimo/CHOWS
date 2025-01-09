import BGC from '../assets/BGC.jpg';
import Millet from '../assets/Milllet.jpg';
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Founder = () => {
  return (
    <div className="min-h-[100vh] bg-cover bg-center bg-no-repeat flex justify-center items-center px-5" style={{ backgroundImage: `url(${BGC})`}}>
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>

     <div className='z-30 flex justify-center items-center gap-10 flex-wrap mt-10'> 
                <img src={Millet} alt="" 
                className='h-[20rem] rounded '
                />
                
                  <div className='text-white xs:w-[100%] md:w-[30rem]'>
                  <p className='text-2xl text-orange-400'>Meet Millet Cristobal</p>
                    
                  <p>Millet Cristobal stands as the visionary founder and esteemed leader of Santa Maria Debethania Marching Showband, bringing a wealth of passion and expertise to the ensemble since its inception in 2014. With a profound dedication to music and the arts, Millet has steered the band to numerous accolades and triumphs in drill competitions and concerts across Luneta Park, Batangas City, Laguna, and Bulacan.</p>  
                  
                    <div className='mt-3 flex gap-3'>
                    <FaFacebook size={25} className='cursor-pointer'/>
                    <CiYoutube size={28} className='cursor-pointer'/>
                    </div>
                  </div>
      </div>
    
            
    </div>
  )
}

export default Founder;
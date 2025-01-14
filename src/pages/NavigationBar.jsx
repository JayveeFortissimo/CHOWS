import logo from '../assets/Logo.PNG';
import { NavLink } from 'react-router-dom';
import Navigations from '../Components/Navigationbar.js';

const NavigationBar = () => {

  return (
    <header className="min-h-[5rem] w-[100%] p-3 flex justify-center items-center fixed z-40 text-white">

        <nav className='p-2 w-[50rem] flex gap-1 justify-between items-center bg-[#292929cc] backdrop-blur-md shadow-lg mx-4 my-4 rounded-2xl'>
                
                <div className='flex gap-2 items-center'>
                        <img src={logo} alt="Chows Logo" 
                        className='h-[3rem] rounded-full'
                        />

                       <p className='text-2xl text-white'><span className='text-[orange]'>C</span>HOWS</p>
                </div>


            <div className='flex gap-8 '>
            {
                Navigations.map((pro,index) =>{
                  return(
                    <div key={index} className='xs:hidden md:block' >
                         <NavLink to={pro.NavigationLink} className={({isActive}) => isActive? "border-b-4 border-b-yellow-500": undefined}
                         >{pro.LinkName}
                         </NavLink>
                    </div>
                  )
                })
               }
            </div>
             
         
          <div />

       </nav>
     
     
    </header>
  )
}

export default NavigationBar
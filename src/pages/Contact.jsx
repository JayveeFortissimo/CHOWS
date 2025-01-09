import Image1 from '../assets/JV.jpg';

const Contact = () => {
  return (
    <div className="min-h-[100vh] bg-cover bg-center bg-no-repeat flex justify-center items-center px-5 text-white" style={{ backgroundImage: `url(${Image1})`}}>
       <div className="bg-black bg-opacity-70 absolute inset-0"></div>
  
  <form className='w-[40rem] min-h-[50vh] border border-white  p-3 flex flex-col justify-between z-20'>
 

<div className='flex w-[100%] sm:justify-between gap-3 xs:flex-col md:flex-row'>

<div className='flex flex-col gap-3 w-[100%]'>
  <p >Name </p>
  <input type="text" className='h-[2rem] px-2 w-[100%] flex-auto  border-b-2 border-white outline-none  bg-transparent text-white'/>
 </div>

 <div className='flex flex-col gap-3 w-[100%]'>
  <p>Phone Number </p>
  <input
  type="number"
  className='h-[2rem] px-2 w-full  border-b-2 border-white outline-none  bg-transparent text-white'
/>
 </div>

</div>


 <div >
  <p >Email </p>
  <input type="text" className='h-[2rem] px-2 w-[100%]  border-b-2 border-white outline-none  bg-transparent text-white'/>
 </div>


 <div >
  <p >Message </p>
  <textarea name="" id="" className=' border-b-2 border-white outline-none  bg-transparent text-white w-[100%] px-3'></textarea>
  <button className='mt-5 h-[2rem]  px-3 rounded bg-orange-400 hover:bg-orange-500 transition-shadow duration-300'>Submit</button>
 </div>

  </form>
      
    </div>
  )
}

export default Contact;
import image1 from '../assets/About.jpg'
const About = ({About = 'div'}) => {
  return (
    <About className={"min-h-[100vh] px-10 bg-cover bg-center bg-no-repeat flex justify-center  items-center"} style={{ backgroundImage: `url(${image1})`}}>
    <div className="bg-black bg-opacity-60 absolute inset-0"></div>

    <div className='w-[50rem] h-[70vh] border border-white p-3 rounded text-white z-30 overflow-auto mt-6'>
      
      <h1 className='text-2xl xs:text-center sm:text-left mt-2 text-orange-400'>CHOWS OF SANTA MARIA BULACAN</h1>

      <p className='mt-3'>
      Welcome to Santa Maria Debethania Marching Showband, a dynamic ensemble founded by Millet Cristobal in the year 2014. Our band has grown from humble beginnings to become a distinguished name in the world of marching bands and musical performances.      
      </p>

      <h1 className='text-2xl xs:text-center sm:text-left mt-2 text-orange-400'>Our Journey</h1>

      <p className='mt-3'>Since our inception, Santa Maria Debethania has captivated audiences with our precision, passion, and musical excellence. We have proudly showcased our talents at prestigious events and venues across Luneta Park, Batangas City, Laguna, and Bulacan. Notably, our band has achieved significant victories in drill competitions, demonstrating our commitment to musical mastery and artistic expression.</p>

      <h1 className='text-2xl xs:text-center sm:text-left mt-2 text-orange-400'>Our Mission</h1>
       <p className='mt-3'>At Santa Maria Debethania, we are more than a band - we are a community united by a love for music and a dedication to continuous improvement. Through our performances and community engagements, we strive to inspire and uplift audiences, fostering a deep appreciation for music and the arts.</p>
   
       <h1 className='text-2xl xs:text-center sm:text-left mt-2 text-orange-400'>Join Us</h1>
       <p className='mt-3'>Whether you're a music enthusiast, prospective member, or simply curious about our journey, we invite you to explore our website and discover more about Santa Maria Debethania Marching Showband. Stay tuned for upcoming performances, news, and ways to connect with our vibrant musical family.</p>

    </div>


    </About>
  )
}

export default About
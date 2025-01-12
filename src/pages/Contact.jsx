import Image1 from '../assets/JV.jpg';
import { useDispatch} from 'react-redux';
import { Informations } from '../store/content/Gmail.js';
//Icons
import { IoSendSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
const Contact = () => {

  const dispatch = useDispatch();


  return (
    <div className="min-h-[100vh] bg-cover bg-center bg-no-repeat flex justify-center items-center px-5 text-white" style={{ backgroundImage: `url(${Image1})`}}>
   <div className="bg-black bg-opacity-50 absolute inset-0"></div>
    <div className="w-full max-w-2xl  z-20  rounded-lg shadow-lg mt-16">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Contact Us</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className=" text-sm font-medium text-gray-200 flex items-center gap-2">
                <FaUser className="text-gray-400" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
               
              
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-200 flex items-center gap-2">
                <FaPhone className="text-gray-400" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
               
               
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className=" text-sm font-medium text-gray-200 flex items-center gap-2">
              <MdEmail className="text-gray-400" />
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
            
         
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-200 flex items-center gap-2">
              <BiMessageDetail className="text-gray-400" />
              Message
            </label>
            <textarea
              id="message"
              name="message"
            
           
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-orange-500 hover:bg-orange-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ease-in-out"
          >
            <span>Send Message</span>
            <IoSendSharp className="text-lg" />
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact;
import {Outlet} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import toast, { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <>
    
    <Toaster
  position="top-center"
  reverseOrder={false}
    />
    <NavigationBar />
     <Outlet/>
    </>
  )
}

export default Root
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import Root from './pages/Root';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Founder from './pages/Founder';
import Contact from './pages/Contact';


function App() {

 const createdRoutes = createBrowserRouter([
{
  path:'/',
  element:<Root/>,
  children:[
    {index:true,
      element: <Homepage />
    },
    {
      path:'About',
      element:<About />
    },
    {
      path:'Founder',
      element:<Founder />
    },
    {
      path:'Contact',
      element: <Contact />
    }
  ]
}
 ]);


  return (
    <div className='font-title '>
    <RouterProvider router={createdRoutes} />
    </div>
  )
}

export default App

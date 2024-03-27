import logo from './logo.svg';
import './App.css';

import { createBrowserRouter,Route,RouterProvider, createRoutesFromElements} from 'react-router-dom';

import Homepage from './global/Homepage';

import Rootlayout from './global/Rootlayout';

import Error from './global/Error';
// Way 1
// ***********************************
// const router=createBrowserRouter([
//   {path:"/",element:<Homepage/>},
// ]);

import 'bootstrap/dist/css/bootstrap.min.css';

import ReduxProduct from './components/redux_components/products';

const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<Error />,
    element:<Rootlayout/>,
    children:[
    {  path:"/",element:<Homepage/>  },
    {  path:"/product",element:<ReduxProduct/>  }
    ]
  }
])






// Alternate way of routing - way 2
// ***********************************
{/* <Route path="/"> <Homepage/></Route> */}
// ***********************************


// way 3
// ***********************************
// const routerDefinations =createRoutesFromElements(
//   <Route>
//     <Route path="/"><Homepage/></Route>
//   </Route>
// )
// const router = createRouter(routerDefinations)
// ***********************************




function App() {
  return (

    <RouterProvider  router={router}/>

   
  );
}

export default App;

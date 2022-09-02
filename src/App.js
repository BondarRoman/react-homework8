import React from 'react';
import './App.css';
import {useRoutes } from 'react-router-dom';
import {Home} from './components/home';
import {Data} from './components/data';
import {About} from './components/about';
import {Layout} from './components/layout';
function App() {
  let element = useRoutes([
    {
      
      element: <Layout />,
      children: [
        {
         path: "/",
          index:"",
          element: <Home />
        },
        { path: "data", element: <Data /> },
        { path: "about", element: <About /> }
      ]
    },
    
  ]);

  return (
    element
  );
  
  // return (
  //   <div className="App">
  //         <div>
  //             <Routes>
  //               <Route path='/' element={<Layout/>}>
  //                   <Route index element={<Home/>}></Route>
  //                   <Route path='about' element={<About/>}></Route>
  //                   <Route path='data' element={<Data/>}></Route>
  //               </Route>

  //             </Routes>
  //         </div>  
  //   </div>
  // );
}

export default App;

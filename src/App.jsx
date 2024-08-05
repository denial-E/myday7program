import React, {useState}from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import FormikEdit from './component/FormikEdit';
import FormikCreate from './component/FormikCreate';
import Navbar from './component/Navbar';

const App = () => {
  const[id, setId]=useState(0)
  return (
    <div>
      <BrowserRouter>
      <div>
       <Navbar />
      </div>
      <Routes>
       <Route path='/product' element={<Product  setId={setId}/>}/>
      <Route path='/Edit/:id' element={<FormikEdit id={id}/>}/>
      <Route path='/create' element={<FormikCreate />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
};

export default App;
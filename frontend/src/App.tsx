import React from 'react';
import Login from './components/Login';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import {Home} from './components/Home';
// import RestrictedRoute from './components/auth/RestrictRout';
function App() {
  return (
    <div>
      <div></div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<PrivateRoute/>}>
            <Route path='/' element={<Home/>}/>
          </Route>
        <Route  path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;

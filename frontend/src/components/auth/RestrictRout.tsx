import Cookies from 'js-cookie';

import { Navigate, Outlet } from 'react-router-dom';
const RestrictedRoute = (props:any) => {

  const token = localStorage.getItem('auth');
    const cookie1 = Cookies.get('token');
    console.log(cookie1)
  console.log("token",token);
 
  return <>{!token ?<Outlet /> : <Navigate to="/" />}</>;

};

export default RestrictedRoute;
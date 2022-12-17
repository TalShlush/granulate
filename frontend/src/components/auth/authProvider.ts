//import axios from 'axios';

//const loginAPI = "https://tararoutray.com/demo/react-auth/login.php";

export const handleLogin = async(userName, password) =>{
    try {        
       // const result = await axios.post(loginAPI, { userName, password });
         // const data = result.data;
          const token = 'my Token'//data.token;
          console.log('set token');
          if (!token) {
            alert("user name \\ password incorrect");
            return;
          }
    
          localStorage.clear();
          localStorage.setItem('token', token);
          console.log('set token on local storage');
          return true;  
    } catch (error) {
       console.error('error with login',error)
    }
  
}
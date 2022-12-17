import { useCallback } from "react"
import { useNavigate } from "react-router-dom";

export const LogoutButton = () =>{
    const navigate = useNavigate();
    const onClick = useCallback(() =>{
        localStorage.clear();
        navigate('/login');
    },[navigate]);
    return (<button className="button" onClick={onClick}>Logout</button>)
}
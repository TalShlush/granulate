import { useState } from "react";
import { useEffect } from "react";
import { LogoutButton } from "../Logout"
import { callQuery } from "../services/apolloCache";
import { GraphData } from "./GraphData";

export const Home = () =>{
    const [result, setResult] = useState(undefined);

     useEffect(()=>{
        const a = async() =>{
            const res= await callQuery();
            console.log('res',res);
            setResult(res);
        }
        a();
        console.log(result);
    },[])
    return (<div>
        <LogoutButton />
        <GraphData />
        {/* {result} */}
        Home !!!
        </div>)
}
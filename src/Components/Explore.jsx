import { NavLink } from "react-router-dom";



export default function Explore(){
    return(
         <div className="h-[90vh] w-[80%] mt-5 m-auto" >
            <div><h1 className="text-red-700 text-center text-[32px] font-bold">Explore Your Ideal Toyota</h1><p>A Symbol of Quality, Durability and Reliability</p></div>
            <ul className="flex w-full text-[14px] mt-5  justify-center gap-5">
            <NavLink to='/' className={({isActive}) => isActive ? "text-red-700  font-semibold  p-3 border-b-red-700 border-b-4 ": "text-black p-3 font-semibold "}>Cars & Mpvs</NavLink>
            <NavLink to='/suvs' className={({isActive}) => isActive ? "text-red-700  font-semibold  p-3 border-b-red-700 border-b-4 ": "text-black p-3 font-semibold "}>Suvs & Pickups</NavLink>
            <NavLink to= '/buses' className={({isActive})=> isActive ? "text-red-700 font-semibold  p-3 border-b-red-700 border-b-4 " : "text-black p-3 font-semibold"}>Buses</NavLink>
            <NavLink to= '/gazoo' className = {({isActive})=> isActive ? "text-red-700  font-semibold p-3 border-b-red-700 border-b-4 " : "text-black p-3 font-semibold"}>Gazoo</NavLink>
            </ul>
         </div>
    )
}
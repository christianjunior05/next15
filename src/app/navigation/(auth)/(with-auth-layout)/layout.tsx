"use client"

import {usePathname} from 'next/navigation';
import Link from "next/link";
import { useState } from 'react';


const navLinks = [
    {name:"Register " , href:"/register"},
    {name:"Login " , href:"/login"},
    {name:"forgot password" , href:"/forgot-password"},
]
export default function AuthLayout({children}:{
    children: React.ReactNode;
})


{

    const pathname = usePathname();

    const [state , setState] = useState('');

    const handleChange =(e: any) =>{

    const val= e.target.value;
    setState(val)
    }

   
    return(

        <>
        <div><input onChange={handleChange} value={state} type="text" className="border border-teal" /></div>


    <nav>
        <ul>
            {navLinks.map((link)=>{

                const isActive = pathname.startsWith(link.href)
                return(
                    <li key={link.name}><Link className={isActive ? "text-red-500 font-bold": "text-slate-400" } href={link.href}>{link.name}</Link></li>
                )
            })}
        </ul>
    </nav>


        <h2>Groupe auth </h2>
        {children}
        </>
    )
}
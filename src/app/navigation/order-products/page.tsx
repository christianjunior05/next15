"use client"

import {useRouter} from 'next/navigation';

export default function Orders() {

    const router = useRouter();
    const handleClick=() =>{
    router.push('/')
}
    return (
     <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className="text-center text-gray-400 text-4xl my-6">
        Page orders
      </h1>
      <button onClick={handleClick} className="bg-slate-900 hover:bg-blue-500 text-white p-3 rounded">Cliquez ici</button>
     </div>
    );
  }
  
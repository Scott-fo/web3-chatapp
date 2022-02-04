import React from 'react';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className='bg-black'>
      <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4'>
      <h1 className='text-white text-6xl font-bold'>WELCOME</h1>
      <h1 className='text-white text-6xl font-bold mb-5'> TO THE METAVERSE</h1>
          <button onClick = {authenticate} className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse w-60'>LOGIN</button>
      </div>

      <div className='w-full h-screen'>
          <Image src="https://images.unsplash.com/photo-1637664067012-241eb64b7675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80" layout='fill' objectFit='cover'/>
      </div>
    </div>
  ) 
}

export default Login;

import React from 'react';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Avatar({ username, logoutOnPress }) {
    const { user, logout } = useMoralis();

    return (
        <Image 
        className='bg-black rounded-full cursor-pointer hover:opacity-75'
        src={`https://avatars.dicebear.com/api/adventurer-neutral/${ username || user.get("username") }.svg`} 
        onClick={() => logoutOnPress && logout()}
        layout="fill"
        />
    )
}

export default Avatar;

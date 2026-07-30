import React from 'react'
import path from 'path';
import { text } from 'stream/consumers';
import Link from 'next/link';

interface Props {
path:string;
text: string;

}


export const ActiveLink = ({path,text}:Props) => {
  return (
       <Link 
        
            href={path}
            className='text-white hover:text-blue-200 transition-colors px-4 py-2 rounded-md hover:bg-white/10'>
            {text}
          </Link>
  )
}

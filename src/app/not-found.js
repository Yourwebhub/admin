import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <>
    <title>Your Web Hub | 404 Not Found</title>
    <meta name="description" content="Whoops! That page doesn’t exist." />

    <div>
      <div className='flex justify-center'>
      <img src='/404.png' alt='404'/>
      </div>
      <div className='text-center '>
      <h1 className='text-bllue  text-4xl font-bold'>404 Not Found</h1>
      <p className='mt-8 text-dark dark:text-light text-2xl'>Whoops! That page doesn’t exist.</p>
      </div>
      <div className='flex justify-center mt-5'>
      <Link href={"/"} className="group relative cursor-pointer p-2 w-56 border bg-bllue/35 rounded-full overflow-hidden text-bllue text-center font-bold">
        <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
        Back to Home
        </span>
        <div className="flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
          <span>Back to Home</span>
          <ArrowRight />
        </div>
        <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-bllue scale-[1]  group-hover:bg-bllue group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
      </Link>
    </div>

    </div>
    </>
  );
}

export default NotFound;
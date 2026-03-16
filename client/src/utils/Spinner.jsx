import React from 'react'
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

const Spinner = () => {
  return (
    <div className={`w-max bg-green-900 p-5 md:p-15 m-10 items-center justify-center rounded-2xl md:animate-bounce text-gray-300`}>
        <RocketLaunchIcon className='animate-pulse'/>
        <h1 className="animate-pulse">{'Processing...'}</h1>
    </div>
  )
}

export default Spinner

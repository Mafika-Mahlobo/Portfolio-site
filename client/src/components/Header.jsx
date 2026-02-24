import React from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon } from '@heroicons/react/24/solid';



const Header = () => {
  return (
    <div className="flex justify-between p-8 text-gray-50 italic font-extralight sticky sm:text-lg text-sm bg-linear-to-b from-gray-800 to-gray-900">
      <div className='p-1'><CodeBracketIcon className='text-gray-50 cursor-pointer inline font-bold h-10 w-10 hover:text-green-900
        transition-all'/><p className='p-5 text-lg hidden sm:inline-block'>{'   '}Mafika Mahlobo</p></div>
        
        <ul className='list-none hidden sm:flex'>
          <li className='p-5 cursor-pointer text-center hover:border-b hover:border-green-600 hover:text-green-900 hover:font-bold transition-all'>Home</li>
          <li className='p-5 cursor-pointer text-center hover:border-b  hover:border-green-600 hover:text-green-900 hover:font-bold transition-all'>Profolio</li>
          <li className='p-5 cursor-pointer text-center hover:border-b  hover:border-green-600 hover:text-green-900 hover:font-bold transition-all'>Contact</li>
        </ul>
        <span className='sm:hidden p-4 text-2xl'>
          <Bars3BottomLeftIcon className='h-8 w-8 text-white cursor-pointer' />
        </span>
    </div>  
  )
}

export default Header

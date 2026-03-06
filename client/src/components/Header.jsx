import React, { useState, Link } from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import useIntersectionObserver from './useIntersectionObserver';



const Header = () => {
  const [ isMenuVisible, setMenuIsVisible ] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.3,});

  const toogleMenu = () => {
    setMenuIsVisible(!isMenuVisible);
  }

  return (
    <div ref={ref} className={`flex justify-between p-8 text-gray-50 italic font-extralight sticky sm:text-lg text-sm bg-linear-to-b from-gray-800 to-gray-900 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-90'}`}>
      <div className='p-1'><CodeBracketIcon className='text-gray-50 cursor-pointer inline font-bold h-10 w-10 hover:text-green-900
        transition-all'/><p className='p-5 text-lg hidden sm:inline-block'>{'   '}Mafika Mahlobo</p></div>
        
        <ul className='list-none hidden sm:flex'>
          <a href="#home"><li className='p-5 cursor-pointer text-center hover:border-b hover:border-green-600 hover:text-green-900 hover:font-bold transition-all'>Home</li></a>
          <a href="#projects"><li className='p-5 cursor-pointer text-center hover:border-b  hover:border-green-600 hover:text-green-900 hover:font-bold transition-all'>Profolio</li></a>
          <a href="#contact"><li className='p-5 cursor-pointer text-center hover:border-b  hover:border-green-600 hover:text-green-900 hover:font-bold transition-all'>About me</li></a>
        </ul>
        <span className='sm:hidden p-4 text-2xl' onClick={toogleMenu}>
          <Bars3BottomLeftIcon className='h-8 w-8 text-white cursor-pointer' />
        </span>
        <div className={`fixed inset-0 right-0 p-5 z-50 w-full h-fit bg-linear-to-b from-gray-900 to-gray-700 transition-all duration-500 ${isMenuVisible ? 'block': 'hidden'}`}>
          <ul className='w-full'>
            <a href="#home" onClick={toogleMenu}><li className='text-center p-3 border border-gray-900 rounded-2xl shadow-2xl shadow-gray-900 bg-linear-to-b from-gray-900 to-gray-700 m-2 text-xl text-gray-300'>Home</li></a>
            <a href="#projects" onClick={toogleMenu}><li className='text-center p-3 border border-gray-900 rounded-2xl shadow-2xl shadow-gray-900 bg-linear-to-b from-gray-900 to-gray-700 m-2 text-xl text-gray-300'>Portfolio</li></a>
            <a href="#contact" onClick={toogleMenu}><li className='text-center p-3 border border-gray-900 rounded-2xl shadow-2xl shadow-gray-900 bg-linear-to-b from-gray-900 to-gray-700 m-2 text-xl text-gray-300'>About me</li></a>
          </ul>
          <span className='fixed right-3 top-3 cursor-pointer' onClick={toogleMenu}><i className="fa-solid fa-x"></i></span>
        </div>
    </div>  
  )
}

export default Header

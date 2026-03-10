import React, { useState, useEffect } from 'react'
import { UserCircleIcon, HomeModernIcon, Bars3BottomLeftIcon,  CodeBracketIcon } from '@heroicons/react/24/solid';
import useIntersectionObserver from './useIntersectionObserver';



const Header = () => {
  const [ isMenuVisible, setMenuIsVisible ] = useState(false);
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.3,});
  const [ scrolled, setScrolled ] = useState(false);

  const toogleMenu = () => {
    setMenuIsVisible(!isMenuVisible);
  }

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 90) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  

  return (
    <div ref={ref} className={`sticky top-0 flex z-50 h-26 justify-between p-8 text-gray-50 italic font-extralight sm:text-lg text-sm ${ scrolled ? 'bg-linear-to-b from-gray-600 to-gray-700 shadow-md shadow-gray-900' : 'bg-gray-500' } transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-90'}`}>
      <div className='p-1 flex gap-0.5 hover:text-green-700 transition-all duration-900 '>
        <CodeBracketIcon className='text-gray-50 cursor-pointer inline font-bold h-10 w-10 hover:text-green-700 transition-all duration-900 shadow-2xl shadow-green-900
        '/><span className='p-2 text-xs md:text-sm '>{'  '}Mafika Mahlobo<span className='animate-pulse text-green-70'>_</span></span>
      </div>
        
        <ul className='list-none hidden sm:flex'>
          <a href="#home"><li className='p-5 cursor-pointer text-center hover:border-b hover:border-green-800 hover:text-green-800 hover:font-bold hover:text-xl transition-all duration-900'>Home</li></a>
          <a href="#projects"><li className='p-5 cursor-pointer text-center hover:border-b  hover:border-green-800 hover:text-green-800 hover:font-bold hover:text-xl transition-all duration-900'>Profolio</li></a>
          <a href="#contact"><li className='p-5 cursor-pointer text-center hover:border-b  hover:border-green-800 hover:text-green-800 hover:font-bold hover:text-xl transition-all duration-900'>About me</li></a>
        </ul>
        <span className='sm:hidden p-4 text-2xl' onClick={toogleMenu}>
          <Bars3BottomLeftIcon className='h-8 w-8 text-white cursor-pointer' />
        </span>
        
    <nav
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out z-20
          ${isMenuVisible ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='mt-20 px-4'>
          <ul className='space-y-4'>
            <li className='cursor-pointer hover:opacity-50'>
              <a
                href="#home"
                className='flex items-center gap-2 hover:text-white'
                onClick={toogleMenu}
              >
                <HomeModernIcon className='w-5 h-5' />
                <span>Home</span>
              </a>
            </li>
            <li className='cursor-pointer hover:opacity-50'>
              <a
                href='#projects'
                className='flex items-center gap-2 hover:text-white'
                onClick={toogleMenu}
              >
                {/* placeholder icon */}
                <i className="fa-solid fa-wrench text-lg"></i>
                <span>Projects</span>
              </a>
            </li>
            <li className='cursor-pointer hover:opacity-50'>
              <a
                href='#contact'
                className='flex items-center gap-2 hover:text-white'
                onClick={toogleMenu}
              >
                <UserCircleIcon className='w-5 h-5' />
                <span>About me</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>  
  )
}

export default Header

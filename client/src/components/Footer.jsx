import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const Footer = () => {

  const { ref, isVisible } = useIntersectionObserver({threshold: 0.3});

  return (
    <section ref={ref} className={`flex justify-center p-5 bg-linear-to-b from-gray-700 to-gray-900 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-90'}`}>
        <ul className='flex flex-row'>
            <a href="https://www.linkedin.com/in/mafikamahlobo/" target='_blank' ><li><i className="fa-brands fa-linkedin text-3xl text-gray-400 px-5"></i></li></a>
            <a href="https://github.com/Mafika-Mahlobo" target='_blank'><li><i className="fa-brands fa-github text-3xl text-gray-400 px-5"></i></li></a>
            <a href="mailto:rudolphmafika@gmail.com"><li><i className="fa-solid fa-envelope text-3xl text-gray-400 px-5"></i></li></a>
        </ul>
    </section>
  )
}

export default Footer

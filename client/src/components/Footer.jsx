import React from 'react'

const Footer = () => {
  return (
    <section className="flex justify-center p-5 bg-linear-to-b from-gray-700 to-gray-900">
        <ul className='flex flex-row'>
            <a href="" ><li><i className="fa-brands fa-linkedin text-3xl text-gray-400 px-5"></i></li></a>
            <a href=""><li><i className="fa-brands fa-github text-3xl text-gray-400 px-5"></i></li></a>
            <a href=""><li><i class="fa-solid fa-envelope text-3xl text-gray-400 px-5"></i></li></a>
        </ul>
    </section>
  )
}

export default Footer

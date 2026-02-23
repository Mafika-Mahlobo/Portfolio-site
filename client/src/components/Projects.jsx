import React from 'react';
import image from '../assets/profile-pic.png'

const Projects = () => {
  return (
    <section className="container bg-linear-to-b from-gray-600 to-gray-800 min-w-screen p-0 md:p-5">
        <h1 className='text-center text-5xl text-gray-400 font-bold p-5 py-10 underline underline-offset-20 style decoration-green-700 decoration-1'>Projects</h1>
        <div className="grid grid-rows sm:grid-cols-2 p-7 rounded-tl-3xl rounded-bl-3xl shadow-2xl shadow-gray-900 bg-tranparent">
            <div className='flex flex-col justify-center align-middle'>
                <h1 className='inline-block text-center text-gray-400 text-2xl font-extrabold'>Project title</h1>
                <img src='' alt="" className='h-50 w-auto sm:h-100 m-1 sm:m-10 shadow-2xl shadow-gray-900 rounded-2xl'/>
            </div>
            <div className='rounded-tr-3xl rounded-br-3xl shadow-2xl shadow-gray-900 p-15 text-center'>
                <p className='text-gray-400'>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                </p>
            </div>
        </div>
        
    </section>
  )
}

export default Projects

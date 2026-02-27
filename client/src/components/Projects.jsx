import React, { useEffect } from 'react';
import image from '../assets/profile-pic.png';
import projectPic from '../assets/SheftSync2.png';
import axios from 'axios';

const Projects = () => {

     useEffect(() => {
    
        const fetchProjects = async () => {
          try {
            const res = await axios.get('http://127.0.0.1:5000/api/projects/all/6997eae9bea0458f5cd582c9');
            console.log(res.data);
    
          } catch (error) {
            console.log(error);
          }
        }
    
        fetchProjects();
    
      }, []);

  return (
    <section className="bg-linear-to-b from-gray-600 to-gray-800 p-4 md:p-6">
        <h1 className='text-center text-3xl md:text-4xl text-gray-300 font-bold p-5 py-8 underline underline-offset-8 decoration-green-700 decoration-2'>Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 rounded-3xl shadow-lg shadow-gray-900 bg-transparent border border-gray-500 mt-5 w-full">
            <div className='flex flex-col justify-center items-center p-0'>
                <h2 className='text-center text-gray-400 text-2xl font-extrabold mb-4'>Project title</h2>
                <img src={projectPic} alt="Project screenshot" className='w-full h-auto max-h-80 object-center p-0 m-2 sm:m-6 rounded-2xl shadow-4xl shadow-gray-900'/>
            </div>
            <div className='rounded-tr-3xl rounded-br-3xl shadow-2xl shadow-gray-900 p-6 sm:p-10 text-center w-full h-full flex flex-col justify-center items-center'>
                <p className='text-gray-400 max-w-prose px-2 sm:px-6'>
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                </p>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-3 mt-5 w-full sm:w-auto'>
                    <button className='bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors duration-300 m-2 w-full sm:w-auto cursor-pointer'>Live demo</button>
                    <button className='bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 m-2 w-full sm:w-auto cursor-pointer'>Git repository</button>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Projects

import { useEffect, useState } from 'react';

const ProjectItem = ({ title, description, git, live, pictures, index}) => {
     
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const nextImage = () => {
            setCurrentIndex((prev) => prev === pictures.length - 1 ? 0 : prev + 1);
        };

    useEffect(() => {
        setInterval(() => {
            nextImage();
        }, 4000);
    }, []);
     

  return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 rounded-3xl shadow-lg shadow-gray-900 bg-transparent border border-gray-500 mt-5 max-w-7xl">
            <div className='flex flex-col justify-center items-center p-0'>
                <h2 className='text-center text-gray-400 text-2xl font-extrabold mb-4'>{title}</h2>
                <img src={pictures[currentIndex]?.url} alt="Project screenshot" className='w-min h-max max-h-80 max-w-full object-center p-0 m-2 sm:m-6 rounded-2xl shadow-4xl shadow-gray-900'/>
            </div>
            <div className='rounded-tr-3xl rounded-br-3xl shadow-2xl shadow-gray-900 p-6 sm:p-10 text-center w-full h-full flex flex-col justify-center items-center'>
                <p className='text-gray-300 max-w-prose px-10 sm:px-13'>
                   {description}
                </p>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-3 mt-5 w-full sm:w-auto'>
                    {live ? 
                    
                        <a href={live} target='_blank'>
                            <button className='bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors duration-300 m-2 w-full sm:w-auto cursor-pointer'>Live demo{' '}<i className="fa-solid fa-globe"></i></button>
                        </a>
                        :
                        ''
                    }

                    {git ? 
                        <a href={git} target='_blank'>
                            <button className='bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300 m-2 w-full sm:w-auto cursor-pointer'>Git repository {' '}<i className="fa-brands fa-github"></i></button>
                        </a>
                        :
                        ''
                    }
                </div>
            </div>
        </div> 
  )
}

export default ProjectItem;

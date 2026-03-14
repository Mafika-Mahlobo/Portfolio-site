import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const UpdateProject = () => {
  const [ searchString, setSearchString ] = useState('');
  const [ projects, setProjects ] = useState(null);
  const { loading, user } = useSelector(state => state.auth);

  useEffect(() => {
      const fetchProjects = async () => {
        const id = user ? user._id : 'none'
        try {
           const res = await axios.get(`http://127.0.0.1:5000/api/projects/all/${id}`);
           setProjects(res.data);
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchProjects();
  }, []);

  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchString(value);

    if (value.trim() === '') {
      axios.get(`http://127.0.0.1:5000/api/projects/all/${user?._id || 'none'}`)
        .then(res => setProjects(res.data))
        .catch(err => console.log(err.message));
      return;
    }

    const filteredProjects = projects?.filter(project => project.title.toLowerCase().includes(searchString.toLowerCase()));
    setProjects(filteredProjects);
  };

  return (
    <Fragment>
      <div className='grid grid-rows-1 lg:grid-cols-2 gap-5 bg-linear-to-b from-gray-600 to-gray-800 p-8 justify-center items-start'>
        <div >
          <fieldset className='p-5 rounded-lg flex flex-col justify-center shadow-2xl shadow-gray-900 '>
            <legend className='text-xl text-green-600 font-extrabold'>Projects</legend>
            <div className='p-2 flex items-center'>
              <span className='p-4 bg-green-700 rounded-tl-3xl rounded-bl-3xl border border-green-600 flex items-center justify-center'>
                <i className='fa fa-search text-gray-200'></i>
              </span>
              <input
                type="search"
                name='search'
                id='search'
                placeholder='Search projects...'
                className='w-full px-4 py-3 rounded-br-3xl rounded-tr-3xl border border-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'
                aria-label='Search projects'
                onChange={(e) => handleSearchChange(e)} 
              />
            </div>
            <div className='flex items-center justify-center border border-gray-300 p-5 rounded-lg min-h-50 max-h-60 overflow-y-auto' id='project-list'>
              <ul className='w-full' >
                {
                  projects?.map(project => (
                    <li key={project._id} className='p-3 border-b border-gray-300 w-full flex justify-between items-center bg-linear-to-b from-gray-500 to-gray-700 mb-2 rounded-lg transition duration-300 cursor-pointer'>
                      <span className='p-2 text-sm'>{ project.title }</span>
                      <div className='flex gap-2'>
                        <button className='bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-3 rounded transition duration-700 cursor-pointer'>
                          Edit
                        </button>
                        <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded transition duration-700 cursor-pointer'>
                          Delete
                        </button>
                      </div>
                    </li>
                  ))
                }           
              </ul>
            </div>
          </fieldset>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <fieldset className='p-5 rounded-lg flex flex-col justify-center shadow-2xl shadow-gray-900 w-full max-w-xl'>
            <legend className='text-xl text-green-600 font-extrabold'>Add new project</legend>
             <div className='flex justify-center p-10 border border-gray-400 rounded-3xl shadow-3xl shadow-gray-900'>
                <i class="fa fa-folder-plus text-gray-400 hover:text-green-700 text-6xl cursor-pointer"></i>
             </div>
          </fieldset>
        </div>
      </div>
    
    </Fragment>
  )
}

export default UpdateProject

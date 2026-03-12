import React, { Fragment } from 'react'

const UpdateProject = () => {
  return (
    <Fragment>
      <div className='grid grid-rows-1 lg:grid-cols-2 gap-5 bg-linear-to-b from-gray-600 to-gray-800 p-8 justify-center items-start'>
        <div>
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
              />
            </div>
            <div className='flex items-center justify-center border border-gray-300 p-5 rounded-lg min-h-50 max-h-60 overflow-y-auto'>
              <ul className='w-full'>
                <li className='p-5 border-b border-gray-300 w-full flex justify-between items-center bg-linear-to-b from-gray-500 to-gray-700 mb-2 hover:gray-900 rounded-lg transition duration-300'>
                  <span className='p-2'>Project 1</span>
                  <div className='flex gap-2'>
                    <button className='bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-3 rounded transition duration-700 cursor-pointer'>
                      Edit
                    </button>
                    <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded transition duration-700 cursor-pointer'>
                      Delete
                    </button>
                  </div>
                </li>              
              </ul>
            </div>
          </fieldset>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <fieldset className='p-5 rounded-lg flex flex-col justify-center shadow-2xl shadow-gray-900 w-full max-w-xl'>
            <legend className='text-xl text-green-600 font-extrabold'>Add new project</legend>
            <div className='p-2 flex flex-col'>
              <label htmlFor="title" >Title: </label>
              <input type="text" name='title' id='title' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
            </div>
            <div className='p-2 flex flex-col'>
              <label htmlFor="description" >Description: </label>
              <textarea name="description" id="description" rows={5} className='resize-none overflow-hidden w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'></textarea>
            </div>
             <div className='p-2 flex flex-col'>
              <label htmlFor="link" >Project link: </label>
              <input type="text" name='link' id='link' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
             </div>
             <div className='p-2 flex flex-col'>
              <label htmlFor="image" >Project image: </label>
              <input type="file" name='image' id='image' className='w-full text-gray-200'/>
             </div>
             <div className='p-2 flex flex-col'>
              <label htmlFor="techStack" >Tech stack (comma separated): </label>
              <input type="text" name='techStack' id='techStack' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
             </div>
             <button type='submit' className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded align-self-center mt-4 shadow-md shadow-gray-900 transition duration-700 cursor-pointer'>
              Add Project
            </button>
          </fieldset>
        </div>
      </div>
    
    </Fragment>
  )
}

export default UpdateProject

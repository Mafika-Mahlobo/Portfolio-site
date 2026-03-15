import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EditProject = () => {
  const id = window.location.pathname.split('/').pop();
  const [ project, setProject ] = useState(null);
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ githubLink, setGithubLink ] = useState('');
  const [ liveLink, setLiveLink ] = useState('');
  const [ pictures, setPictures ] = useState([]);

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('githubLink', githubLink);
  formData.append('liveLink', liveLink);
  for (let i = 0; i <= pictures.length; i++) {
    formData.append('pictures', pictures[i]);
  }

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setGithubLink(project.links.repo);
      setLiveLink(project.links.live);
    }
  }, [project]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:5000/api/projects/${id}`);
        setProject(res.data);
  
      } catch (error) {
        console.log(error);
      }
    }
    fetchProject();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.put(`http://127.0.0.1:5000/api/projects/${id}`, formData);
      
      //To do: Replace with user feedback
      alert(`${res.data.title} Has been successfully updated!`);

    } catch (error) {
        console.log(error);
        //To do: repace with user feedback
        alert(error);
    }
  }

  return (
    <div className='grid grid-rows-1 gap-5 bg-linear-to-b from-gray-600 to-gray-800 p-8 justify-center items-start'>
         <fieldset className='p-5 lg:w-lg rounded-lg flex flex-col justify-center shadow-2xl shadow-gray-900'>
            <legend className='text-xl text-green-600 font-extrabold'>Update project</legend>
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full max-w-xl space-y-4' >
                    <div className='p-2'>
                        <label htmlFor="title">Project Title: </label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name='title' id='title'  className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
                    </div>
                    <div className='flex flex-col p-2'>
                      <label htmlFor="description" >Description: </label>
                      <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" rows={5} className='resize-none overflow-hidden w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'></textarea>
                    </div>
                    <div className='p-2'>
                        <label htmlFor="github">GitHub URL: </label>
                        <input type="text" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} name='github' id='github'  className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
                    </div>
                    <div className='p-2'>
                        <label htmlFor="live">Live URL: </label>
                        <input type="text" value={liveLink} onChange={(e) => setLiveLink(e.target.value)} name='live' id='live'  className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
                    </div>
                    <div className='p-2'>
                        <label className='flex justify-center mb-1 rounded-2xl bg-green-700 hover:bg-green-800 text-white py-2 px-4 cursor-pointer' htmlFor="pictures">
                            <span><i className='fas fa-camera'></i></span>
                            <span className='pl-1'>Project pictures</span>
                            <input
                            type="file"
                            name='pictures'
                            id='pictures' 
                            multiple={true}
                            className='w-full text-gray-200'
                            onChange={(e) => setPictures(e.target.files)}
                          />
                      </label>
                    </div>
                    <button type='submit' className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded align-self-center mt-4 shadow-md shadow-gray-900 transition duration-700 cursor-pointer'>
                      Update project
                    </button>
            </form>
         </fieldset>
    </div>
  )
}

export default EditProject

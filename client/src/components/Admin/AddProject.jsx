import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayAlert } from '../../utils/alert';
import Spinner from '../../utils/Spinner';


const AddProject = () => {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ githubLink, setGithubLink ] = useState('');
  const [ liveLink, setLiveLink ] = useState('');
  const [ pictures, setPictures ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  const dispatch = useDispatch();
  const { msg } = useSelector(state => state.alert);

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('githubLink', githubLink);
  formData.append('liveLink', liveLink);
  for (let i = 0; i <= pictures.length - 1; i++) {
    formData.append('pictures', pictures[i]);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post('/api/projects', formData).then(() => {

          setLoading(false);
          displayAlert(dispatch, `Project has been succeesully added!`, 'success');
      })

      
      if (msg === null) {
        window.location.href = '/admin/projects';
      }
      

    } catch (error) {
      
      setLoading(false);
      if (error.status === 400){
        displayAlert(dispatch, 'Please upload at at least one picture', 'danger');

      } else if (error.status === 403) {
        displayAlert(dispatch, 'Please attach a maximum of 7 pictures', 'danger');

      }
      else {
          displayAlert(dispatch, error.message, 'danger');
          console.log(error);
      }
       
    }
  }

  return (
    <div className='grid grid-rows-1 gap-5 bg-linear-to-b from-gray-600 to-gray-800 p-8 justify-center items-start'>
        {
          loading ?

          <Spinner />

          :
      
         <fieldset className='p-5 lg:w-lg rounded-lg flex flex-col justify-center shadow-2xl shadow-gray-900'>
            <legend className='text-xl text-green-600 font-extrabold'>Add project</legend>
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full max-w-xl space-y-4' >
                    <div className='p-2'>
                        <label htmlFor="title">Project Title: </label>
                        <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} name='title' id='title'  className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
                    </div>
                    <div className='flex flex-col p-2'>
                      <label htmlFor="description" >Description: </label>
                      <textarea required name="description" value={description} onChange={(e) => setDescription(e.target.value)} id="description" rows={5} className='resize-none overflow-hidden w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'></textarea>
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
                      Add project
                    </button>
            </form>
         </fieldset>
        }
    </div>
  )
}

export default AddProject

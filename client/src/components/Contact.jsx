import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import { useState } from 'react';
import axios from 'axios';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { displayAlert } from '../utils/alert';
import { useDispatch } from 'react-redux';

const Contact = ({bio}) => {
    const dispatch = useDispatch();

    const { ref, isVisible } = useIntersectionObserver({threshold: 0.3});

    const [ subject, setSubject ] = useState('');
    const [ text, setText ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const submitMessage = async (e) => {
        e.preventDefault();

         setLoading(true);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        try {
            const res = await axios.post('/api/contact', {title: subject, message: text}, config);
            displayAlert(dispatch, 'Message send!', 'success');
           
            
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
        
        setSubject('');
        setText('');
    }


  return (
    <section id='contact' ref={ref} className={`bg-linear-to-br from-gray-800 to-gray-700 p-10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-90'}`}>
        <fieldset className='grid grid-cols-1 border border-gray-500 rounded-2xl shadow-2xl shadow-gray-900 p-10'>
            <legend className='text-3xl text-green-600 font-extrabold'>
                <i class="fa-solid fa-circle-info text-gray-700 text-xl"></i> Bio <i class="fa-solid fa-circle-info text-gray-700 text-xl"></i>
            </legend>
            <div className='p-2 sm:p-10'>
                <p className='text-center text-gray-300 text-md md:text-lg'>
                    {bio}
                </p>
            </div>
            {/* Remove for for now */}
            {/* <div className='rounded-tr-2xl rounded-br-2xl shadow-2xl shadow-gray-900 flex justify-center align-middle p-0 md:p-10'>
                <div className={`w-max bg-green-900 p-5 md:p-15 m-10 items-center justify-center rounded-2xl md:animate-bounce text-gray-300 ${loading ? '': 'hidden'}`}>
                    <RocketLaunchIcon className='animate-pulse'/>
                     <h1 className="animate-pulse">{'Sending...'}</h1>
                </div>
                <form onSubmit={(e) => submitMessage(e)} className={`text-gray-300 flex flex-col p-2 md:p-0 gap-4 w-full ${loading ? 'hidden' : ''}`}>
                    <div className='w-full'>
                        <label htmlFor="title" className='block text-sm font-medium text-gray-200 mb-1'>Title</label>
                        <input onChange={(e) => setSubject(e.target.value)} value={subject} required className='w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600' type="text" id='title' placeholder='Message title...'/>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="body" className='block text-sm font-medium text-gray-200 mb-1'>Message</label>
                        <textarea onChange={(e) => setText(e.target.value)} value={text} required className='overflow-hidden w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-gray-200 min-h-40 resize-vertical focus:outline-none focus:ring-2 focus:ring-green-600' name="body" id="body" placeholder='Write your message here...'></textarea>
                    </div>
                    <div className='w-full flex justify-center md:justify-start'>
                      <button className='bg-green-700 text-white px-6 py-2 rounded-2xl m-0 w-full hover:bg-green-800 transition-colors cursor-pointer'>Leave a message</button>
                    </div>
                </form>
            </div> */}
        </fieldset>
    </section>
  )
}

export default Contact

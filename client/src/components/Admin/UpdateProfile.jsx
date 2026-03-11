import React, { use } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, loadUserData } from '../../state/auth';
import { PowerIcon } from '@heroicons/react/24/solid';



const UpdateProfile = () => {
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email: '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hero, setHero] = useState(user ? user.hero : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [profilePicture, setProfilePicture] = useState(null);
  const [resume, setResume] = useState(null);

   const handleLogout = () => {
      dispatch(logout());
      navigate('/login', { replace: true });
    };
    
  return (
      <div className='flex justify-evenly'>
        <div className='w-fit bg-gray-700 p-5 rounded-lg shadow-lg shadow-gray-900'>
         {user ? (
           <form action="" className='flex flex-col w-fit' >
            <fieldset className='border border-gray-300 p-5 rounded-lg flex flex-col justify-center'>
              <legend className='text-sm text-gray-300'>Update your profile</legend>
              <div className='p-2'>
                 <label htmlFor="name">Full name: </label>
                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' id='name'  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
              </div>
              <div className='p-2'>
                <label htmlFor="email" >Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' id='email' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
              </div>
              <div className='p-2'>
                <label htmlFor="password1" >New password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password1' id='password1' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
              </div>
              <div className='p-2'>
                <label htmlFor="password2" >Confirm password: </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name='password2' id='password2' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
              </div>
              <div className='flex flex-col p-2'>
                <label htmlFor="hero" >Hero section</label>
                <textarea name="hero" id="hero" rows={5} value={hero} onChange={(e) => setHero(e.target.value)} className='resize-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'></textarea>
              </div>
              <div className='flex flex-col p-2'>
                <label htmlFor="bio" >Bio: </label>
                <textarea name="bio" id="bio" rows={5} value={bio} onChange={(e) => setBio(e.target.value)} className='resize-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'></textarea>
              </div>
              <div className='p-2'>
                <label htmlFor="profile-picture" >Attach a profile picture: </label>
                <button className='bg-gray-800-500 hover:bg-green-700 text-white font-bold rounded align-self-center mt-4 shadow-md shadow-gray-900 transition duration-700'>
                  <input type="file" name='profile-picture' id='profile-picture' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
                </button>
              </div>
              <div className='p-2'>
                <label htmlFor="resume" >Attach a CV</label>

                <button className='bg-gray-800-500 hover:bg-green-700 text-white font-bold rounded align-self-center mt-4 shadow-md shadow-gray-900 transition duration-700'>
                    <input type="file" name='resume' id='resume' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
                </button>
                
              </div>
              <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded align-self-center mt-4 shadow-md shadow-gray-900 transition duration-700'>
                Update Profile
              </button>
            </fieldset>
          </form>
         ):
          <div className='text-gray-300 text-center p-5'>
            <p>You seession has expired</p>
              <button
                onClick={handleLogout}
                className='flex items-center gap-2 hover:text-white cursor-pointer'
              >
                <PowerIcon className='w-5 h-5' />
                <span>Back to login page</span>
              </button>
          </div>
        }
        </div>
      </div>
  )
}

export default UpdateProfile

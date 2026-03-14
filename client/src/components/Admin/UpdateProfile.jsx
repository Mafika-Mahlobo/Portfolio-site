import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUpdateProfile } from '../../state/auth';



const UpdateProfile = () => {
  const { user, errors } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hero, setHero] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [resume, setResume] = useState(null);

  // keep input fields in sync with store
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setHero(user.hero || '');
      setBio(user.bio || '');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password && password !== confirmPassword) {
      //To do: replace with better error handling and user feedback
      alert('Passwords do not match!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    if (password) formData.append('password', password);
    formData.append('hero', hero);
    formData.append('bio', bio);
    if (profilePicture) formData.append('profilePicture', profilePicture);
    if (resume) formData.append('resume', resume);

    dispatch(addUpdateProfile(formData))
      .unwrap()
      .then(() => {
        alert('Profile updated successfully!');
      })
      .catch((err) => {
        alert('Error updating profile: ' + err.msg);
      });
  };

  return (
      
      <div className='bg-linear-to-b from-gray-600 to-gray-800 p-8 flex justify-center items-start'> 
          <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-xl space-y-4' >
          <fieldset className='p-5 rounded-lg flex flex-col justify-center shadow-2xl shadow-gray-900'>
            <legend className='text-xl text-green-600 font-extrabold'>Update your profile</legend>
            <div className='p-2'>
                <label htmlFor="name">Full name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' id='name'  className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
            </div>
            <div className='p-2'>
              <label htmlFor="email" >Email: </label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' id='email' className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
            </div>
            <div className='p-2'>
              <label htmlFor="password1" >New password: </label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password1' id='password1' className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
            </div>
            <div className='p-2'>
              <label htmlFor="password2" >Confirm password: </label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name='password2' id='password2' className='w-full px-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'/>
            </div>
            <div className='flex flex-col p-2'>
              <label htmlFor="hero" >Hero section</label>
              <textarea name="hero" id="hero" rows={5} value={hero} onChange={(e) => setHero(e.target.value)} className='resize-none overflow-hidden w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'></textarea>
            </div>
            <div className='flex flex-col p-2'>
              <label htmlFor="bio" >Bio: </label>
              <textarea name="bio" id="bio" rows={5} value={bio} onChange={(e) => setBio(e.target.value)} className='resize-none overflow-hidden w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'></textarea>
            </div>
            <div className='p-2'>
              <label className='flex justify-center mb-1 rounded-2xl bg-green-700 hover:bg-green-800 text-white py-2 px-4 cursor-pointer' htmlFor="profile-picture">
                <span><i className='fas fa-camera'></i></span>
                <span className='pl-1'> Profile picture</span>
                <input
                type="file"
                name='profile-picture'
                id='profile-picture' 
                className='w-full text-gray-200'
                onChange={e => setProfilePicture(e.target.files[0])}
              />
              </label>
              
            </div>
            <div className='p-2'>
              <label className='flex justify-center mb-1 rounded-2xl bg-green-700 hover:bg-green-800 text-white py-2 px-4 cursor-pointer' htmlFor="resume">
                <span><i className='fas fa-file-pdf'></i></span>
                <span className='pl-1'>CV / resume</span>
                 <input
                type="file"
                name='resume'
                id='resume'
                className='w-full text-gray-200'
                onChange={e => setResume(e.target.files[0])}
              />
              </label>
             
            </div>
            <button type='submit' className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded align-self-center mt-4 shadow-md shadow-gray-900 transition duration-700 cursor-pointer'>
              Update Profile
            </button>
          </fieldset>
        </form>
      </div>
  )
}

export default UpdateProfile

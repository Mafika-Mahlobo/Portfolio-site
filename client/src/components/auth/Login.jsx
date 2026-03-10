import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, loadUserData } from '../../state/auth';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, isAuthenticated, errors } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);

  
  useEffect(() => {
    if (isAuthenticated && !loading && !errors) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, loading, errors, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin({ email: email, password: password }));
    
  }

  return (
    <section className='flex items-center justify-center w-screen h-screen bg-linear-to-b from-gray-500 to-gray-800'>
        {
            loading ? <div className={`w-max bg-green-900 p-5 md:p-15 m-10 items-center justify-center rounded-2xl md:animate-bounce text-gray-300 ${loading ? '': 'hidden'}`}>
                    <RocketLaunchIcon className='animate-pulse'/>
                     <h1 className="animate-pulse">{'Processing...'}</h1>
                    </div>
                :
                <div className='w-full max-w-md px-4'>
            <form onSubmit={handleSubmit} className=' rounded-lg shadow-2xl p-8 space-y-6'>
                {errors && <p className="text-red-500 text-sm text-center">{errors}</p>}
                <div className='text-center mb-8'>
                    <h2 className='text-3xl font-bold text-gray-300'>Admin</h2>
                </div>

                <div className='space-y-2'>
                    <label htmlFor="email" className='block text-sm font-semibold text-gray-300'>
                        Email Address
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='you@example.com'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'
                        required
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor="password" className='block text-sm font-semibold text-gray-300'>
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your password'
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 text-gray-200'
                        required
                    />
                </div>

                <button
                    type="submit"
                    className='w-full bg-green-600 hover:bg-green-700 text-gray-300 font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer'
                >
                    Sign In
                </button>

            </form>
        </div>
        }
    </section>
  )
}

export default Login

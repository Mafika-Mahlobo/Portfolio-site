import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserCircleIcon, PowerIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { logout, loadUserData } from '../state/auth';
import { Navigate, useNavigate, Link } from 'react-router-dom'



const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user, isAuthenticated, loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(loadUserData());
    }
  }, [isAuthenticated, user, dispatch]);

  
  if (!isAuthenticated && !loading) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };

  return (
    <section className='h-screen bg-linear-to-b from-gray-500 to-gray-800 text-gray-200 flex'>
      {/* sidebar */}
      <nav
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out z-20
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='mt-20 px-4'>
          <ul className='space-y-4'>
            <li className='cursor-pointer hover:opacity-50'>
              <Link
                to='/admin/profile'
                className='flex items-center gap-2 hover:text-white'
                onClick={() => setSidebarOpen(false)}
              >
                <UserCircleIcon className='w-5 h-5' />
                <span>Profile</span>
              </Link>
            </li>
            <li className='cursor-pointer hover:opacity-50'>
              <Link
                to='/admin/projects'
                className='flex items-center gap-2 hover:text-white'
                onClick={() => setSidebarOpen(false)}
              >
                {/* placeholder icon */}
                <Bars3BottomLeftIcon className='w-5 h-5' />
                <span>Projects</span>
              </Link>
            </li>
            <li className='cursor-pointer hover:opacity-50'>
              <button
                onClick={handleLogout}
                className='flex items-center gap-2 hover:text-white cursor-pointer'
              >
                <PowerIcon className='w-5 h-5' />
                <span>Sign out</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* main content area */}
      <div className='flex-1 flex flex-col'>
        {/* header */}
        <header className='flex items-center justify-between p-5 shadow-md bg-gray-700'>
          <button
            className='text-gray-300 hover:text-white focus:outline-none cursor-pointer sm:hidden'
            onClick={() => setSidebarOpen(prev => !prev)}
          >
            <Bars3BottomLeftIcon className='w-6 h-6' />
          </button>
           <button
                onClick={handleLogout}
                className='items-center gap-2 hover:text-white border border-gray-400  cursor-pointer hidden sm:flex  p-2 rounded-2xl shadow-md shadow-gray-900'
              >
                <PowerIcon className='w-4 h-auto' />
                <span className='text-xs'>Sign out</span>
            </button>
          <div className='flex items-center gap-2'>
            <p className='text-sm'>{user ? user.name : '...'}</p>
            <UserCircleIcon className='w-6 h-6' />
          </div>
        </header>

        {/* placeholder body */}
        <main className='p-8 overflow-auto grid grid-rows md:grid-cols-2'>
          <div className="">
            <div className='flex justify-evenly'>
                <div className='w-fit bg-gray-700 p-5 rounded-lg shadow-lg shadow-gray-900'>
                  <form action="" className='flex flex-col'>
                    <fieldset className='border border-gray-300 p-5 rounded-lg'>
                      <legend className='text-sm text-gray-300'>Update your profile</legend>
                      <label htmlFor="name">Name: </label>
                      <input type="text" name='name' id='name' placeholder='Enter your first and lst name'/>
                    </fieldset>
                  </form>
                </div>
            </div>
          </div>
          <div className="bg-green-700 hidden sm:block ">
            Projects
          </div>
          <div className="bg-blue-700 hidden sm:block ">
            Overlay window
          </div>
        </main>
      </div>
    </section>
  );
}

export default Admin

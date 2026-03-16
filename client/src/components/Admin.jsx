import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserCircleIcon, PowerIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { logout, loadUserData } from '../state/auth';
import {
  Navigate,
  useNavigate,
  Link,
  useLocation,
  Outlet,
} from 'react-router-dom';



const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, loading } = useSelector(state => state.auth);
  const { msg, type } = useSelector(state => state.alert)

  
  useEffect(() => {
    window.scrollTo(0, 0);
    setSidebarOpen(false);
  }, [location.pathname]);

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
    <section className='h-screen text-gray-200 flex relative'>
      <span className={`${msg ? 'fixed': 'hidden'} ${type === 'success' ? 'bg-green-700' : 'bg-red-700'} h-fit w-full p-5 pl-10 pr-10 z-30 flex justify-center`}>
          {msg}
      </span>
      {/* sidebar */}
      <nav
        role='navigation'
        aria-label='Admin menu'
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 transform transition-transform duration-200 ease-in-out z-20
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
      >
        <div className='mt-20 px-4'>
          <ul className='space-y-4'>
            <li className='cursor-pointer hover:opacity-50'>
              <Link
                to='/admin/profile'
                className={`flex items-center gap-2 hover:text-white ${
                  location.pathname.includes('/profile') || location.pathname === '/admin'
                    ? 'text-white font-semibold'
                    : ''
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <UserCircleIcon className='w-5 h-5' />
                <span>Profile</span>
              </Link>
            </li>
            <li className='cursor-pointer hover:opacity-50'>
              <Link
                to='/admin/projects'
                className={`flex items-center gap-2 hover:text-white ${
                  location.pathname.includes('/projects') ? 'text-white font-semibold' : ''
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {/* placeholder icon */}
                <Bars3BottomLeftIcon className='w-5 h-5' />
                <span>Projects</span>
              </Link>
            </li>
             <li className='cursor-pointer hover:opacity-50 ml-5'>
                    <Link
                      to='/admin/projects/add'
                      className={`flex items-center gap-2 hover:text-white ${
                        location.pathname.includes('/add') ? 'text-white' : ''
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {/* placeholder icon */}
                      <i className="fa-solid fa-plus"></i>
                      <span>Add Project</span>
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

      {/* overlay for small-screen sidebar */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden'
          onClick={() => setSidebarOpen(false)}
          aria-hidden='true'
        />
      )}
      {/* main content area */}
      <div className='flex-1 flex flex-col h-full sm:ml-64'>
        {/* header */}
        <header className='flex sticky top-0 z-20 items-center justify-between sm:justify-end p-5 shadow-md bg-gray-800'>
          <button
            className='text-gray-300 hover:text-white focus:outline-none cursor-pointer sm:hidden'
            onClick={() => setSidebarOpen(prev => !prev)}
            aria-label='Toggle menu'
          >
            <Bars3BottomLeftIcon className='w-6 h-6' />
          </button>
          
          <div className='flex items-center gap-2'>
            <p className='text-sm'>{user ? user.name : '...'}</p>
            <UserCircleIcon className='w-6 h-6' />
          </div>
        </header>

        <main className='flex-1 min-h-0 grid grid-rows'>
          {
            user ? 
            <Outlet />
            :
            <div className='text-gray-300 text-center p-5 bg-gray-700 flex flex-col justify-center items-center'>
                <p>Your session has expired</p>

                <button
                  onClick={handleLogout}
                  className='flex items-center gap-2 hover:text-white cursor-pointer mt-2'
                >
                
                  <span className='p-5 bg-green-700 rounded-2xl hover:bg-gray-900 transform transition-transform duration-100'>Back to login page</span>
                </button>
          </div>
          }
          
        </main>
      </div>
    </section>
  );
}

export default Admin

import { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Lenis from 'lenis'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login'
import PrivateRoute from './Routing/PrivateRoute'
import Admin from './components/Admin'
import UpdateProfile from './components/Admin/UpdateProfile';
import ProjectsAdmin from './components/Admin/ProjectsAdmin'
import AddProject from './components/Admin/AddProject'
import EditProject from './components/Admin/EditProject';
import { useSelector } from 'react-redux';


function App() {
  const [ user, setUser ] = useState(null);
  let name, bio , hero, resume, profilePicture;

  const { msg, type } = useSelector(state => state.alert);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      autoRaf: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }


  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/users/69b835ce3363cfe6f4c942c3');
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, []);
   
  if (user) {
    name = user.name;
    hero = user.hero;
    resume =  user.resume ? user.resume.url : null;
    profilePicture = user.profile_pic ? user.profile_pic.url : null;
    bio = user.bio;
  }

  return (
    <Router>
      <Fragment>
        <Routes>
            <Route path='/' element={
              <>
                <Header />
                <span className={`${msg ? 'fixed top-0 left-0': 'hidden'} 
                      ${type === 'success' ? 'bg-green-700' : 'bg-red-700'} h-fit w-full p-5 pl-10 pr-10 z-50 flex justify-center`}>
                    {msg}
                </span>
                <Hero name={name ? name: 'Mafika'} hero={hero} resume={resume} profilePicture={profilePicture}/>
                <Projects />
                <Contact bio={bio}/>
                <Footer />
              </>
            } />

            <Route path='/login' element={<Login />} />

            <Route element={<PrivateRoute />}>
              <Route path='/admin' element={<Admin />}>
               
                <Route index element={<Navigate to="profile" replace />} />
                <Route path='profile' element={<UpdateProfile />} />
                <Route path='projects' element={<ProjectsAdmin />} />
                <Route path='projects/add' element={<AddProject />} />
                <Route path='projects/update/:id' element={ <EditProject /> } />
              </Route>
            </Route>
          </Routes>
      </Fragment> 
    </Router>  
  )
}

export default App

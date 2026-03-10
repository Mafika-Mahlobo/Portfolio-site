import { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Lenis from 'lenis'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login'
import PrivateRoute from './Routing/PrivateRoute'
import Admin from './components/Admin'


function App() {
  const [ user, setUser ] = useState(null);
  let name, bio , hero, resume, profilePicture;

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
        const res = await axios.get('http://127.0.0.1:5000/api/users/6997eae9bea0458f5cd582c9');
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
                <Hero name={name} hero={hero} resume={resume} profilePicture={profilePicture}/>
                <Projects />
                <Contact bio={bio}/>
                <Footer />
              </>
              } />

            <Route path='/login' element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path='/admin' element={<Admin />} />
            </Route>
       </Routes>
      </Fragment> 
    </Router>  
  )
}

export default App

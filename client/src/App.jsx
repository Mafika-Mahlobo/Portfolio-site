import { Fragment, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer';
import Lenis from 'lenis'


function App() {

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
   
  return (
    <Fragment>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App

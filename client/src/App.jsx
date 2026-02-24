import { Fragment } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

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

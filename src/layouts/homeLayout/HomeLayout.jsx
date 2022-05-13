import {Fragment} from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Statistic from './components/Statistic';
import Service from './components/Service';
import Contact from './components/Contact';
import Hero from './components/Hero';
function HomeLayout() {
  return (
    <Fragment>
        <Navbar />
        <Header />
        <About />
        {/* <Hero /> */}
        <Statistic />
        <Service />
        <Contact />
        <Footer />
    </Fragment>
  )
}

export default HomeLayout
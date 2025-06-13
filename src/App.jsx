import './App.css';
import { Helmet } from 'react-helmet';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import ContactForm from './components/contact';
import Footer from './components/footer';

function App() {
  return (
  <>
     <Helmet>
  <title>My Awesome Portfolio - Sandesh</title>
  <meta name="description" content="Portfolio of Sandesh Shrestha, a creative web developer." />
  <meta name="keywords" content="Sandesh, portfolio, web developer, React, Nepal" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://yourdomain.com" />
</Helmet>
       <Navbar />
       <Home id="home"/>
       <About id="about"/>
       <Education id="education"/>
       <ContactForm id="contact"/>
       <Footer id="footer"/>
   </>
  );
}

export default App;

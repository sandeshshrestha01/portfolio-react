import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import ContactForm from './components/contact';
import Footer from './components/footer';

function App() {
  return (
  <>
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

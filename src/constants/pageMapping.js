import Home from '../components/Home/Home';
import About from '../components/About/About';
import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';

const Pages = {
  home: {
    id: 'home',
    navbarTitle: 'Home',
    component: Home,
  },
  about: {
    id: 'about',
    navbarTitle: 'About',
    component: About,
  },
  technologies: {
    id: 'technologies',
    navbarTitle: 'Technologies',
    component: Technologies,
  },
  experience: {
    id: 'experience',
    navbarTitle: 'Experience',
    component: Experience,
  },
  contact: {
    id: 'contact',
    navbarTitle: 'Contact',
    component: Contact,
  },
};

export default Pages;

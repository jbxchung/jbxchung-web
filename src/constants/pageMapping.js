import Home from '../components/Home/Home';
import About from '../components/About/About';
import Technologies from '../components/Technologies/Technologies';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';

const Pages = {
  home: {
    url: '/',
    navbarTitle: 'Home',
    component: Home,
  },
  about: {
    url: '/about',
    navbarTitle: 'About',
    component: About,
  },
  technologies: {
    url: '/technologies',
    navbarTitle: 'Technologies',
    component: Technologies,
  },
  experience: {
    url: '/experience',
    navbarTitle: 'Experience',
    component: Experience,
  },
  contact: {
    url: '/contact',
    navbarTitle: 'Contact',
    component: Contact,
  },
};

export default Pages;

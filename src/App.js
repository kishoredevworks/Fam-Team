import './App.css';
import PremiumContactForm from './Contact';
import Footers from './Footer';
import Home from './Hcomponent';
import PremiumNavbarHeader from './Header';
import PremiumProjectsComponent from './Projects';
import BrandSlider from './Slidebar';
import { Routes, Route } from 'react-router-dom';
import Testimonials from './Testimonial';
import TestimonialForm from './TestimonialForm';

function App() {
  return (
    <div className="App">
      <PremiumNavbarHeader />
      <BrandSlider />
      <Testimonials />
      <TestimonialForm />
      <Routes>
        <Route path="/projects" element={<PremiumProjectsComponent />} />
        <Route path="/contact" element={<PremiumContactForm />} />
        <Route path="/about" element={<Home />} />
      </Routes>
      <Footers />
    </div>
  );
}

export default App;

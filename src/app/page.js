"use client";
import Hero from "../components/Hero";
import ContactSection from '../components/ContactSection';
import AboutUsIntro from "../components/AboutUsIntro";
import WhyChooseUs from "../components/WhyChooseUs";
import RoomsSection from "../components/RoomsSection";



import ReservationForm from "../components/ReservationForm"; 


const HomePage = () => {
  return (
    <div>
     <Hero />
     <RoomsSection />
      <AboutUsIntro />
       <WhyChooseUs />
      <ReservationForm />
     
      
      <ContactSection />
 
    
    </div>
  );
};

export default HomePage;

"use client";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutUs";
import MenuSection from "../components/MenuSection";
import ContactSection from '../components/ContactSection';
import menuData from "../data/menuData"; // مهم جداً
import GoToMenuButton from "../components/GoToMenuButton";
import LocationsList from "../components/LocationsList";
import ReservationForm from "../components/ReservationForm"; 
import EventsSection from "../components/EventsSection"; 

const HomePage = () => {
  return (
    <div>
      <Hero />

      {/* ✅ عرض كل أقسام المنيو */}
      {menuData.map((cuisine) => (
        <MenuSection key={cuisine.id} cuisine={cuisine} />
      ))}
      <GoToMenuButton />
      <AboutSection />
    
      <ReservationForm />
      <EventsSection />
      
      <ContactSection />
      <LocationsList />
    
    </div>
  );
};

export default HomePage;

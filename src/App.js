import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Card } from './components/Card';
import img from "./img/image-12.png";
import './App.css';

export const App = () => {
  
  return (
    <div className="App">
        < Navbar />
        < HeroSection />
        < Card
            state = 'SOLD OUT' 
            img = { img }
            rating = '5.0'
            reviewCount = { 6 }
            country = 'USA' 
            title = 'Life lessons with Katie Zaferes'
            price = {136}
        />
    </div>
  );
}
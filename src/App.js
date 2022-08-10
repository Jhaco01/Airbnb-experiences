import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Card } from './components/Card';
import './App.css';

export const App = () => {
  return (
    <div className="App">
        < Navbar />
        < HeroSection />
        < Card />
    </div>
  );
}
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Card } from './components/Card';
import Data from './components/Data';
import './App.css';

export const App = () => {

  const cardData = Data.map( (item) => {
    return (
      < Card
            key = {item.id}
            item = {item}
      />
    )
  } )
  
  return (
    <div className="App">
        < Navbar />
        < HeroSection />
        <div className='cards'>        
          {cardData}
        </div>
    </div>
  );
}

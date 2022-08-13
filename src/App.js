import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Card } from './components/Card';
import Data from './components/Data';
import './App.css';

export const App = () => {

  const cardData = Data.map( ({state,img,rating,reviewCount,country,title,price}) => {
    return (
      < Card
            state = { state }
            img = { img }
            rating = { rating }
            reviewCount = { reviewCount }
            country = { country } 
            title = { title }
            price = { price }
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
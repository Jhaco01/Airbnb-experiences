import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Card } from './components/Card';
import Data from './components/Data';
import './App.css';

export const App = () => {

  const cardData = Data.map( ({id,img,rating,reviewCount,location,title,price,openSpots}) => {
    return (
      < Card
            key = {id}
            img = { img }
            rating = { rating }
            reviewCount = { reviewCount }
            location = { location } 
            title = { title }
            price = { price }
            openSpots = {openSpots}
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

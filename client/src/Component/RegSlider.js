import React,{Component} from 'react';
import S1 from './images/slide1.png';
import S2 from './images/slide2.png';
import S3 from './images/slide3.png';
import S4 from './images/slide4.png';
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image: S1
      
    },
    {
      image: S2
    },
    {
      image: S3
    },
    {
      image: S4
      
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    
      <div >
          <Carousel
          
            data={data}
            time={5000}
            width="100%"
            height="89vh"
            captionStyle={captionStyle}
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="0px"
            slideBackgroundColor="white"
            slideImageFit="53em"
            showNavBtn={false}
            
          />
       </div>
    
  );
}

export default App;
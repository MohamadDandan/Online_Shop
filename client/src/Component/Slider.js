import React,{Component} from 'react';
import S1 from './images/s1.png';
import S2 from './images/s2.png';
import S3 from './images/s3.png';
import SimpleImageSlider from "react-simple-image-slider";
import { Slide } from 'react-slideshow-image'
import ReactDOM from 'react-dom';
import { Carousel } from 'react-carousel-minimal';

function slider() {
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
          time={3000}
          width="50em"
          height="100%"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
         
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "0px auto 80px auto ",
          }}
          />
       </div>
    
  );
}
export default slider;
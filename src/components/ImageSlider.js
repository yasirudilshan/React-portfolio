import React from 'react'
import A from '../Imgs/A.jpg'
import B from '../Imgs/B.jpg'
import C from '../Imgs/C.jpg'
import "../Styles/imageslider.css";
import { Slide  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '5px',
  background: '#0ef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
}
const slideImages = [
  {
    url: 'https://i.ibb.co/94TJ7b2/food.jpg',
    caption: 'Kiosk Food Ordering System'
  },
  {
    url: 'https://i.ibb.co/sCWy7JH/inventory.jpg',
    caption: 'Inventory Management System'
  },
  {
    url: 'https://i.ibb.co/yFgK8N0/weather.jpg',
    caption: 'Weather Application'
  },
  {
    url:'https://i.ibb.co/9crbf1B/student.jpg',
    caption:'Spring boot React Web Application'
  },
  {
    url:'https://i.ibb.co/gDFqHVC/task.jpg',
    caption:'Node js React Web Application'
  },
];


function ImageSlider() {
  return (
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                <span className='imagecaption'>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default ImageSlider

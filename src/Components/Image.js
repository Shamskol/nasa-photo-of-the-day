import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

//const apiKey = process.env.REACT_APP_API_KEY;

 function Image() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=z0A6wXUiQJq5Pa30pl3m90fRJ1lkpWwWTqnEq46J`)
      
      .then(response => {
        
        console.log(response.data)
setImage(response.data)
        
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Image">


      <ImageCard
        title={image.title}
        date={image.date}
        explanation={image.explanation}
        hdurl={image.hdurl}
      /> 
   
</div>
  )


  }

export default Image;



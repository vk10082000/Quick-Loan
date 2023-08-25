import React, { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';

const imageUrls = [
  'https://www.yesbank.in/content/published/api/v1.1/assets/CONT61C0DD0221EB48859461134F9294E00F/native/YBL-Homepage-Banners-FD.jpg?channelToken=21f7ccfa2fc3401091938f541a6f8f2a',
  'https://www.yesbank.in/content/published/api/v1.1/assets/CONTFC9122BCB68C4EB4B28601CD1ADCF664/native/YBL-Homepage-Banners-PL.jpg?channelToken=21f7ccfa2fc3401091938f541a6f8f2a',
  'https://www.yesbank.in/content/published/api/v1.1/assets/CONT11EB8B486F3C4FAC84E549554CB7917F/native/YBL-Homepage-3rd-Banners-img.jpg?channelToken=21f7ccfa2fc3401091938f541a6f8f2a',
  'https://www.yesbank.in/content/published/api/v1.1/assets/CONT6CEFB2FAF4AE4046BCA4A61B041D23AF/native/BYOC-Web_1920-x-400px.jpg?channelToken=21f7ccfa2fc3401091938f541a6f8f2a',
  
];

const ImageScroller = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); 


    return () => clearInterval(interval);
  }, []);

  return (
    <Box overflow="hidden" width="100%" marginTop={"50px"} >
      <Box
        display="flex"
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentImageIndex * 100}%)`}
        w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
          }}
      >
        {imageUrls.map((imageUrl, index) => (
          <Image height={"500px"} borderRadius={"10px"} key={index} src={imageUrl} alt={`Image ${index}`} boxSize="100%" objectFit="cover" />
        ))}
      </Box>
    </Box>
  );
};

export default ImageScroller;


// Make sure you integrate this into your existing project structure and customize it further based on your design requirements.







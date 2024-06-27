import React from 'react';
import { Box, Text, Image, AspectRatio, useColorModeValue } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ items }) => {
  const bgColor = useColorModeValue('white', 'gray.800'); 
  const textColor = useColorModeValue('gray.800', 'white'); 

  return (
    <Box
      w={["90%", "80%", "70%", "60%"]}
      mx="auto"
      p={4}
      boxShadow="md"
      borderRadius="lg"
      bg={bgColor}
    >
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        infiniteLoop
        autoPlay
        interval={5000}
        stopOnHover
        swipeable
      >
        {items.map((item, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg={bgColor}
          >
            {item.type === 'image' && (
              <Image
                src={item.src}
                alt={`carousel-item-${index}`}
                borderRadius="md"
                boxShadow="sm"
                maxH={["200px", "300px", "400px", "500px"]}
                objectFit="contain"
                objectPosition="center"
              />
            )}
            {item.type === 'video' && (
              <AspectRatio ratio={16 / 9} borderRadius="md" boxShadow="sm" maxH={["200px", "300px", "400px", "500px"]}>
                <video controls style={{ maxHeight: '100%' }}>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
            )}
            <Text mt={2} fontSize={["sm", "md", "lg"]} textAlign="center" color={textColor}>
              {item.description}
            </Text>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

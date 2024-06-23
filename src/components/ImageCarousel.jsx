import React from 'react';
import { Box, Text, Image, AspectRatio } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ items }) => {
  return (
    <Box w="50%" h={"50px"} mx="auto" p={4}>
      <Carousel>
        {items.map((item, index) => (
          <Box key={index}>
            {item.type === 'image' && (
              <Image src={item.src} alt={`carousel-item-${index}`} />
            )}
            {item.type === 'video' && (
              <AspectRatio ratio={16 / 9}>
                <video controls>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </AspectRatio>
            )}
            <Text mt={2} fontSize="md" textAlign="center">
              {item.description}
            </Text>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

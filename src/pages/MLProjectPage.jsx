import React from 'react';
import { Flex, Box, Text, Image, Heading, Stack, Link, Divider, UnorderedList, ListItem, useMediaQuery } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import ReturnButton from '../components/ReturnButton';
import CustomBadge from '../components/CustomBadge';

const tags = ["Jupyter", "Machine Learning", "Python"];

const MLProject = () => {
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

  return (
    <Box pt={10} w="100%" alignContent={'center'} justifyContent={'center'} bg={'gray.50'}>
      <Box mx={5}><ReturnButton /></Box>
      <Box pt={1} alignContent={'center'} justifyContent={'center'} w="100%">
        <Flex direction={['column', 'column', 'row']} mt={10} mx={[5, 10, 50]} align={'center'} justify={'center'}>
          <Stack direction={'column'} textAlign={['center', 'center', 'left']} mb={[4, 4, 0]}>
            <Heading className='pulse-gradient' fontSize={['3xl', '4xl', '5xl', '6xl']}>Fraud Detection.</Heading>
            <CustomBadge tags={tags} customSize={'1em'} />
          </Stack>
          <Link href="https://github.com/AarushBedi/CS334_FinalProject" mx={7} mt={6}><LinkIcon boxSize={['24px', '28px', '32px', '36px']} /></Link>
          <Divider orientation={isLargerThanMd ? 'vertical' : 'horizontal'} height={isLargerThanMd ? '300px' : '2px'} borderColor="teal.500" borderWidth={isLargerThanMd ? '2px' : '0px'} mr={10} mb={isLargerThanMd ? 0 : 4} />
          <Image
            src="images/fraud_icon.webp"
            alt="Mutuals Project"
            borderRadius="md"
            mb={4}
            w={['200px', '300px', '400px']}
            objectFit="cover"
            boxShadow="sm"
          />
        </Flex>
        <Flex direction={'column'} alignContent={'center'} justifyContent={'center'} w={'100%'} h={'100%'} mt={10} mb={10}>
          <Box alignContent={'center'} w={['95%', '90%', '80%']} mx={'auto'} justifyContent={'center'}>
            <Heading color={'black'} textAlign={'center'} fontSize={['2xl', '3xl', '4xl']}>Description</Heading>
            <Text mt={7} textAlign={'left'} fontSize={['md', 'lg', 'xl']}>
              This ablation study investigates the significance of cardholder personal information (PI) in credit card fraud detection through binary classification analysis. Utilizing the Kaggle datasets ‘Credit Card Fraud Prediction’, comprising 22 distinct features related to specific transactions and cardholder PI, extensive data cleaning and preprocessing were performed. This preprocessed data was then broken up into several subsets with varying degrees of PI and were then fed into two different machine learning models, namely Decision Tree and XGBoost, to evaluate the importance of PI. While prior research in this domain has mainly focused on model evaluation and performance, this study prioritizes the impact of the input data on model efficacy. Understanding the role of PI in credit card fraud classification is crucial in today’s society, particularly as people continue to be concerned with the amount of their personal information that is easily accessible and utilized by large corporations. Given that the current methodology for detecting credit card fraud requires data on specific transactions, the merchant involved, as well as personal cardholder details, this study aims to highlight the relevance of cardholder personal information, offering insight into the potential development of more privacy-conscious fraud detection algorithms. The results of this study show that personal cardholder information (PI) has insignificant relevance in terms of fraud classification, and therefore, could be considered for removal in future detection implementations.
            </Text>
            <Heading mt={10} color={'black'} textAlign={'center'} fontSize={['2xl', '3xl', '4xl']}>Tech Stack</Heading>
            <Text mt={7} textAlign={'left'} fontSize={['md', 'lg', 'xl']}>
              We used the following tools, technologies and libraries to build this web application:
              <UnorderedList mt={2} ml={8} spacing={1} styleType={'disc'}>
                <ListItem>Python</ListItem>
                <ListItem>XGBoost</ListItem>
                <ListItem>Decision Trees</ListItem>
                <ListItem>SciKit</ListItem>
                <ListItem>Pandas</ListItem>
                <ListItem>Jupyter Notebooks</ListItem>
              </UnorderedList>
            </Text>
            <Heading mt={7} color={'black'} textAlign={'center'} fontSize={['2xl', '3xl', '4xl']}>How it works?</Heading>
            <Text mt={7} textAlign={'left'} fontSize={['md', 'lg', 'xl']}>
              For this study we went through many different stages such as preprocessing, building datasets, building and training models and finally concluding the study. For preprocessing we used different methods like oversampling, feature scaling, feature selection through correlation matrix and feature extraction to attain a base dataset. This dataset was then divided into 7 sub datasets that corresponded to different personal information features either being isolated or completely removed. We then build and trained decision trees and XGBoost models for each of these subsets, leaving us with 14 models to observe and conclude our hypothesis with. We then used different evaluation metrics to understand how each dataset changed the results of our study.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MLProject;

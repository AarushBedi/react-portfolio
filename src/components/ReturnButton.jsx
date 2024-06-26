import React from 'react';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/#projects');
    };
    
    return (
        <> 
         <Button onClick={handleReturn} leftIcon={<ArrowBackIcon/>} color={'grey.500'} size={'md'} variant={'solid'} height={'35px'} width={'150px'}>Return home</Button>
        </>
    );
};

export default ReturnButton;
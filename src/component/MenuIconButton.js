import React from 'react';
import { 
    IconButton 
} from '@chakra-ui/button'
import {
    FaFacebook, 
    FaTwitter, 
    FaInstagram,
} from 'react-icons/fa'


function MenuIconButton() {
    return (
        <>
            <IconButton icon={<FaFacebook/>} isRound={true}></IconButton>
            <IconButton icon={<FaTwitter/>} isRound={true}></IconButton>
            <IconButton icon={<FaInstagram/>} isRound={true}></IconButton>
        </>
  );
}

export default MenuIconButton;

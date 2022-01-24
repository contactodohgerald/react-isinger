import { 
    Box,
    Center,
    Heading,
    HStack,
    Image,
    Text,
    useMediaQuery
 } from '@chakra-ui/react';
import React from 'react';
import { 
    FaTwitter, 
    FaFacebook, 
    FaPinterest, 
    FaInstagram
} from 'react-icons/fa'

function CardSix(props) {
    const {name, title, imageSrc} = props
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    return (
        <Box width={isNotSmallerScreen ? '300px' : ''} boxShadow="xl" p="5" borderRadius="lg">
            <Image src={imageSrc} alt={title} borderRadius="lg" width="100%" height="200px"  />
            <Heading fontSize="20px" textAlign="center">{name}</Heading>
            <Text fontSize="14px" textAlign="center">{title}</Text>
            <Center>
                <HStack>
                    <FaFacebook />
                    <FaTwitter />
                    <FaPinterest />
                    <FaInstagram />
                </HStack>
            </Center>
        </Box>        
    );
}

export default CardSix;

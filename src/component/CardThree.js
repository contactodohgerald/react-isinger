import { 
    Box,
    Heading, 
    Icon, 
    Image, 
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import { FaEye, FaClock } from 'react-icons/fa'

function CardThree() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    return (
        <Box width={isNotSmallerScreen ? '400px' : ''} boxShadow="xl" p="5" borderRadius="lg">
            <Image src="https://image.shutterstock.com/image-photo/classical-music-collage-600w-103257545.jpg" borderRadius="lg" alt="Best of Music Industry" width="100%" height="70%" />
            <Heading mt="3" fontSize="28px">Best of Music Industry</Heading>
            <Text><Icon as={FaClock} /> 3:32  | <Icon as={FaEye} /> 13 M </Text>
        </Box>
    );
}

export default CardThree;

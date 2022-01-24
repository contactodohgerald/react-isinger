import { 
    Box,
    Flex,
    Heading, 
    Icon, 
    Image, 
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import { FaEye, FaClock } from 'react-icons/fa'

function CardFour(props) {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    const {title, summary, imageSrc} = props
    return (
        <Box width={isNotSmallerScreen ? '600px' : ''} boxShadow="xl" p="5" borderRadius="lg">
           <Flex>
               <Box>
                    <Image src={imageSrc} borderRadius="lg" alt={title}  width="100px" height="80px" />
               </Box>
               <Box alignSelf="center">
                    <Heading ml="5" fontSize="18px">{title}</Heading>
                    <Text ml="5" ><Icon as={FaClock} /> {summary.time}  | <Icon as={FaEye} /> {summary.view} M </Text>
               </Box>
           </Flex>
        </Box>
    );
}

export default CardFour;

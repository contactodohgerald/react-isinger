import { 
    Box,
    Heading,
    Icon,
    Text,
 } from '@chakra-ui/react';
import React from 'react';

function CardFive(props) {
    const {icons, title, description} = props
    return (
        <Box boxShadow="lg" p="5" borderRadius="lg" _hover={{boxShadow: "xl"}}>
            <Icon as={icons} p="4" w="24" h="24" />
            <Heading fontSize="24px">{title}</Heading>
            <Text>{description}</Text>
        </Box>        
    );
}

export default CardFive;

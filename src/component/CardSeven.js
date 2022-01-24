import { 
    Box,
    Heading,
    Icon,
    Image,
    Link,
    Text,
 } from '@chakra-ui/react';
import React from 'react';
import { 
    FaArrowRight, 
    FaCalendar, 
    FaClock 
} from 'react-icons/fa';

function CardSeven(props) {
    const {title, description, summary, imageSrc, url} = props
    return (
        <Box boxShadow="xl" p="5" borderRadius="lg">
            <Image src={imageSrc} alt={title} borderRadius="lg" width="100%" height="200px"  />
            <Text ml="5" mt="5"><Icon as={FaCalendar} /> {summary.date} | <Icon as={FaClock}/> {summary.time}</Text>
            <Heading fontSize="20px" mt="5">{title}</Heading>
            <Text fontSize="14px" mt="5" mb="6">{description}</Text>
            <Link href={url} target="_blank"> <Text><b>Read More <Icon as={FaArrowRight} /> </b></Text> </Link>
        </Box>        
    );
}

export default CardSeven;

import { 
    Box, 
    Button, 
    Flex, 
    Heading, 
    Icon, 
    Image, 
    Stack, 
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import React from 'react';

function CardTwo(props) {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    const {title, summary, imageSrc} = props;
    return (
        <Box boxShadow="lg" mt="10" borderRadius="sm" overflow="hidden" p="5" width={isNotSmallerScreen ? '1000px' : ''}>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'}>
                <Box>
                    <Image borderRadius='lg' boxSize='120px' src={imageSrc} alt={title}/>
                </Box>
                <Box>
                    <Heading m="5" mb="0" fontSize="26px">{title}</Heading>
                    <Flex>
                        <Box>
                            <Text ml="5" mt="0"><b>Date</b>  :  {summary.date}</Text>
                            <Text ml="5" mt="0"><b>Location</b>  : {summary.location} </Text>
                        </Box>
                        <Box>
                            <Text ml="5" mt="0"><b>Time</b>  :  {summary.time}</Text>
                            <Text ml="5" mt="0"><b>Ticket</b>  :  {summary.ticket}</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box ml="5">
                    <Heading fontSize="16px" mt="5" mb="3"><Icon as="FaQuestionCircle" />Ticket: {summary.total_left} Left</Heading>
                    <Stack spacing={4} direction='row' align='center'>
                        <Button colorScheme='purple' size='sm'>TICKETS</Button>
                        <Button colorScheme='teal' size='sm'>RSVP</Button>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
}

export default CardTwo;

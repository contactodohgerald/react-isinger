import { 
    Box,
    Center,
    Circle,
    Flex,
    Heading,
    Square, 
    Stack, 
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import { 
    FaArrowCircleLeft, 
    FaArrowCircleRight 
} from 'react-icons/fa';
import { 
    DiAws, 
    DiAndroid, 
    DiZend,
    DiAsterisk
} from 'react-icons/di'
import CardFive from './CardFive';

function WhereIWork() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    const dataList = [
        {
            id: 1,
            icons: DiAws,
            title: 'Dj Party Events',
            description: 'So we are glad to invite you all into our club to dance on the best music.'
        },
        {
            id: 2,
            icons: DiAndroid,
            title: 'Birthday Party',
            description: 'So we are glad to invite you all into our club to dance on the best music.'
        },
        {
            id: 3,
            icons: DiZend,
            title: 'Wedding Events',
            description: 'So we are glad to invite you all into our club to dance on the best music.'
        },
        {
            id:4,
            icons: DiAsterisk,
            title: 'Dj Party Events',
            description: 'So we are glad to invite you all into our club to dance on the best music.'
        }
    ]
    return (
        <Stack>
            <Square position="absolute" bg="blue.200" opacity="0.1" w="500px" h="500px" alignSelf="flex-end"/>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" pl={isNotSmallerScreen ? '60' : '0'} pt={isNotSmallerScreen ? '40' : '10'} alignSelf="flex-start">
                <Box>
                    <Heading textAlign="center"  as='h2' size='2xl' ml="5">Where Do I Work</Heading>
                    <Text ml="5">So we are glad to invite you all into our club to dance on the best music to all time best noise..</Text>
                </Box>
            </Flex>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" >
                {
                    dataList.map(function (data) {
                        const {id, icons, title, description} = data
                        return <CardFive key={id} icons={icons} title={title} description={description} />
                    })
                }
            </Flex>
            <Center>
                <Circle size='40px' bg='tomato' color='white'>
                    <FaArrowCircleLeft />
                </Circle>
                <Circle size='40px' bg='tomato' color='white'>
                    <FaArrowCircleRight />
                </Circle>
            </Center>
        </Stack>
    );
}

export default WhereIWork;

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
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import CardSeven from './CardSeven';

function LatestBlog() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    const dataList = [
        {
          id: "1",
          title: "Imagine and Create",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
          summary: {
            date: "20 June 2022",
            time: '35 Min',
          },
          imageSrc: "https://image.shutterstock.com/image-photo/riga-latvia-26082017-group-people-260nw-1554807827.jpg",
          url: "https://contactxanta.com"
        },
        {
          id: "2",
          title: "Imagine and Create",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
          summary: {
            date: "20 June 2020",
            time: '10 Min',
          },
          imageSrc: "https://image.shutterstock.com/image-photo/closeup-two-hands-people-exchange-600w-2069820137.jpg",
          url: "https://contactxanta.com"
        },
        {
          id: "3",
          title: "Imagine and Create",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ",
          summary: {
            date: "20 June 2027",
            time: '8 Min',
          },
          imageSrc: "https://image.shutterstock.com/image-photo/korea-everland-play-ground-family-600w-1929773540.jpg",
          url: "https://contactxanta.com"
        }
    ];
    return (
        <Stack>
            <Square position="absolute" bg="blue.200" opacity="0.1" w="500px" h="500px" alignSelf="flex-start" mt="20"/>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" pl={isNotSmallerScreen ? '60' : '0'} pt={isNotSmallerScreen ? '40' : '10'} alignSelf="flex-start">
                <Box>
                    <Heading as='h2' size='2xl' ml="5">Latest Blog</Heading>
                    <Text ml="5">So we are glad to invite you all into our club to dance on the best music to all time best noise..</Text>
                </Box>
                <Center>
                    <Circle size='40px' bg='tomato' color='white'>
                        <FaArrowCircleLeft />
                    </Circle>
                    <Circle size='40px' bg='tomato' color='white'>
                        <FaArrowCircleRight />
                    </Circle>
                </Center>
            </Flex>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" >
                {
                    dataList.map(function (data) {
                        const {id, title, description, summary, imageSrc, url} = data
                        return <CardSeven key={id} title={title} description={description} summary={summary} imageSrc={imageSrc} url={url} />
                    })
                }
            </Flex>
        </Stack>
    );
}

export default LatestBlog;

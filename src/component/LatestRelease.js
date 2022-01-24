import { 
    Box,
    Center,
    Circle,
    Flex,
    Heading,
    SimpleGrid,
    Square,
    Stack,
    Text,
    useMediaQuery,
 } from '@chakra-ui/react';
import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Card from './Card';

function LatestRelease() {
    const dataList = [
        {
          id: "1",
          title: "Vintagiya Ritm",
          summary: {
            release: "13 - 09 - 2017",
            label: 'I am the Best, RED',
            format: 'Digital download, CD',
            certification: 'RIAA; Gold'
          },
          imageSrc: "https://image.shutterstock.com/image-photo/viersen-germany-july-9-2020-600w-1803858868.jpg"
        },
        {
          id: "2",
          title: "Party All Night",
          summary: {
            release: "13 - 09 - 2017",
            label: 'I am the Best, RED',
            format: 'Digital download, CD',
            certification: 'RIAA; Gold'
          },
          imageSrc: "https://image.shutterstock.com/image-photo/sweden-august-18-2019-vinyl-600w-1484975216.jpg"
        },
        {
          id: "3",
          title: "Not Alone Today",
          summary: {
            release: "13 - 09 - 2017",
            label: 'I am the Best, RED',
            format: 'Digital download, CD',
            certification: 'RIAA; Gold'
          },
          imageSrc: "https://image.shutterstock.com/image-photo/wellington-florida-august-28-2016-600w-475194136.jpg"
        },
        {
            id: "4",
            title: "Always with You",
            summary: {
                release: "13 - 09 - 2017",
                label: 'I am the Best, RED',
                format: 'Digital download, CD',
                certification: 'RIAA; Gold'
              },
            imageSrc: "https://image.shutterstock.com/image-photo/fujeira-circa-1972-stamp-printed-600w-160193270.jpg"
          }
    ];
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    return (
        <Stack>
            <Square position="absolute" bg="blue.200" opacity="0.1" w="500px" h="500px" alignSelf="flex-end"/>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" pl={isNotSmallerScreen ? '60' : '0'} pt={isNotSmallerScreen ? '40' : '0'} alignSelf="flex-start">
                <Box>
                    <Heading  as='h2' size='2xl' ml="5">Latest Release</Heading>
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
            <SimpleGrid columns={isNotSmallerScreen ? '4' : '1'} spacing={5}>
                {dataList.map(function (data) {
                    const { id, title, summary, imageSrc} = data;
                    return (
                    <Card
                        key={id}
                        title={title}
                        summary={summary}
                        imageSrc={imageSrc}
                    />
                    );
                })}
            </SimpleGrid>
        </Stack>
    );
}

export default LatestRelease;

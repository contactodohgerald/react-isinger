import React from 'react';
import { 
    Box,
    Flex,
    Heading,
    Square,
    Stack,
    Text,
    useMediaQuery
 } from '@chakra-ui/react'
import CardTwo from './CardTwo';


function UpcomingShow() {
    const dataList = [
        {
          id: "1",
          title: "Generations on the Internet",
          summary: {
            date: "27 Jun 2012",
            location: 'California, USA',
            time: '5:00 PM',
            ticket: '560 USD',
            total_left: 29
          },
          imageSrc: "https://image.shutterstock.com/image-photo/rock-concert-silhouettes-happy-people-600w-141727294.jpg"
        },
        {
          id: "2",
          title: "National song means a loting",
          summary: {
            date: "27 Jun 2012",
            location: 'California, USA',
            time: '5:00 PM',
            ticket: '700 USD',
            total_left: 9
          },
          imageSrc: "https://image.shutterstock.com/image-photo/heart-shaped-hands-concert-loving-600w-305061929.jpg"
        },
        {
          id: "3",
          title: "Professional people the sow",
          summary: {
            date: "27 Jun 2012",
            location: 'California, USA',
            time: '5:00 AM',
            ticket: '1200 USD',
            total_left: 13
          },
          imageSrc: "https://image.shutterstock.com/image-photo/cheerful-friends-partying-club-night-600w-527769883.jpg"
        },
      ];
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    return (
        <Stack>
             <Square mt="20" position="absolute" bg="blue.200" opacity="0.1" w="500px" h="500px" alignSelf="flex-start"/>
             <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" pl={isNotSmallerScreen ? '60' : '0'} pt={isNotSmallerScreen ? '40' : '0'} alignSelf="flex-start">
                <Box alignContent="center">
                    <Heading textAlign='center' as='h2' size='2xl' ml="5">Upcoming Shows</Heading>
                    <Text textAlign='center' ml="5">So we are glad to invite you all into our club to dance on the best music to all time best noise..</Text>
                    {dataList.map(function (data) {
                        const { id, title, summary, imageSrc} = data;
                        return (
                        <CardTwo
                            key={id}
                            title={title}
                            summary={summary}
                            imageSrc={imageSrc}
                        />
                        );
                    })}
                </Box>
             </Flex>
        </Stack>
    );
}

export default UpcomingShow;

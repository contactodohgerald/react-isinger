import { 
    Box,
    Center,
    Flex,
    Heading, 
    Stack,
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import CardFour from './CardFour';
import CardThree from './CardThree';

function LatestVideo() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    const dataList = [
        {
            id: 1,
            title: 'Best of Rap Industry ',
            summary: {
                view: 23,
                time: '5:00'
            },
            imageSrc: 'https://image.shutterstock.com/image-photo/cheerful-young-african-american-bloggers-600w-1335288572.jpg'
        },
        {
            id: 2,
            title: 'Best of Hip Hop Industry ',
            summary: {
                view: 2,
                time: '1:40'
            },
            imageSrc: 'https://image.shutterstock.com/image-photo/black-girl-listening-music-pair-600w-112570745.jpg'
        },
        {
            id: 3,
            title: 'Best of Blues Industry ',
            summary: {
                view: 900,
                time: '5:40'
            },
            imageSrc: 'https://image.shutterstock.com/image-photo/kyiv-ukraine-november-27-2020-600w-1904088586.jpg'
        },
        {
            id: 4,
            title: 'Best of Trap Industry ',
            summary: {
                view: 250,
                time: '12:40'
            },
            imageSrc: 'https://image.shutterstock.com/image-photo/close-on-microphone-protected-by-600w-1927172840.jpg'
        }
    ]
    return (
        <Stack mt="10">
            <Center>
                <Heading  as='h2' size='2xl' ml="5">Latest Videos</Heading>
            </Center>
            <Center>
                <Text ml="5">So we are glad to invite you all into our club to dance on the best music to all time best noise..</Text>
            </Center>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'}  pl={isNotSmallerScreen ? '60' : '0'}>
                <Box >
                    <CardThree/>
                </Box>
                <Box>
                    {
                        dataList.map(function (data) {
                            const {id, title, summary, imageSrc} = data
                            return <CardFour key={id} title={title} summary={summary} imageSrc={imageSrc} />
                        })
                    }
                </Box>
            </Flex>
        </Stack>
    );
}

export default LatestVideo;

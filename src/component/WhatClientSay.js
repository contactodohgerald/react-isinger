import { 
    Box,
    Flex,
    Heading,
    HStack,
    Image,
    Stack, 
    Text,
    useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import { FaArrowAltCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

function WhatClientSay() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    return (
        <Stack>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} pl={isNotSmallerScreen ? '60' : '0'} pt={isNotSmallerScreen ? '20' : '10'}>
                <Box>
                    <Heading  as='h2' size='2xl' ml="5">What Says Client</Heading>
                    <Text ml="5">So we are glad to invite you all into our club to dance on the best music to all time best noise..</Text>
                </Box>
            </Flex>
            <Flex>
            <HStack>
                <Box>
                    <FaArrowAltCircleLeft />
                </Box>
                <Box>
                    <Image src="https://image.shutterstock.com/image-photo/classical-music-collage-600w-103257545.jpg" borderRadius="full" alt="John Lincoln" width="200" height="200" />
                    <Heading fontWeight="bold" fontSize="lg">John Lincoln</Heading>
                    <Text>Ceo, Google</Text>
                </Box>
                <Box>
                    <Text>I love that Overpass lets us manage everything in one place. <br/> It's super helpful to be able to listen to voice samples, upload our own <br/> lists, and find quality salespeple that <br/> can grow with our team.</Text>
                </Box>
                <Box>
                    <FaArrowCircleRight />
                </Box>
            </HStack>
            </Flex>
           
        </Stack>
  );
}

export default WhatClientSay;

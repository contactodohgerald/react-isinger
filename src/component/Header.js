import { 
    Box,
    Button,
    Circle, 
    Flex, 
    Heading, 
    Image, 
    Stack,
    Text,
    useMediaQuery,
    VStack
} from '@chakra-ui/react';
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

function Header() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')

    const newDoc = () => {
        window.location.assign("https://contactxanta.com")
    }
    return ( 
        <Stack>
            <Circle position="absolute" bg="pink.600" opacity="0.1" w="400px" h="400px" alignSelf="flex-end" />
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" pl={isNotSmallerScreen ? '60' : '0'} pt={isNotSmallerScreen ? '40' : '0'} alignSelf="flex-start">
                <Box>
                    <Heading  as='h1' size='3xl' ml="5">The</Heading>
                    <Heading  as='h1' size='3xl' ml="5">Pleasures</Heading>
                    <Heading  as='h1' size='3xl' ml="5">Of Music</Heading>
                    <Text ml="5">DJ Zambua is one of the best DJ.s from Europe,<br/> so we are glad to invite you all into our club to dance on the best music</Text>
                    <Button rightIcon={<FaArrowCircleRight />} colorScheme='teal' variant='outline' onClick={newDoc}>Contact Me</Button>
                </Box>
                <VStack>
                    <Circle position="absolute" bg="purple.500" opacity="0.1" w="200px" h="200px" alignSelf="flex-start" />
                    <Image alignSelf="center" mt={isNotSmallerScreen ? '0' : '12'} mb={isNotSmallerScreen ? '0' : '12'} borderRadius="xl" backgroundColor="transparent" boxShadow='lg' boxSize='400px' src='https://image.shutterstock.com/image-photo/woman-using-virtual-reality-headset-600w-1682238244.jpg'/>
                </VStack>
            </Flex>
        </Stack>
  )
}

export default Header;

import { 
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Square,
    Stack,
    Text,
    useMediaQuery
 } from '@chakra-ui/react';
import React from 'react';

function About() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    return (
      <Stack>
        <Square position="absolute"  borderRadius="lg" bg="pink.600" opacity="0.1" w="200px" h="400px" alignSelf="flex-start" left={isNotSmallerScreen ? '350' : ''} top={isNotSmallerScreen ? '1440' : ''} />
        <Square position="absolute"  borderRadius="lg" bg="purple.600" opacity="0.1" w="200px" h="400px" alignSelf="flex-start" left={isNotSmallerScreen ? '380' : ''} top={isNotSmallerScreen ? '1440' : ''} />
        <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" pl={isNotSmallerScreen ? '60' : '0'} pt={isNotSmallerScreen ? '40' : '0'} alignSelf="flex-start">
            <Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? '0' : '12'} mb={isNotSmallerScreen ? '0' : '12'} borderRadius="xl" backgroundColor="transparent" boxShadow='lg' boxSize='350px' src='https://image.shutterstock.com/image-photo/listening-music-futuristic-neon-lighting-600w-1718826076.jpg'/>
            </Box>
            <Box>
                <Heading  as='h1' size='3xl' ml="5" mb="10">About Me</Heading>
                <Text textAlign="center">iriure scripserit vix, vis id modo soluta. Meis utinam quo at, esse aeterno adversarium ei has, ad nec utinam putent.</Text>
                <br/>
                <Text textAlign="center">Hinc noluisse consequat te mel, corrumpit laboramus at eos. Ne pri essent aliquid voluptatum, et duo equidem vivendum ad dicam noster quo, per cu solet appareat convenire.</Text>
                <br/>
                <Text textAlign="center">Ius ex idque audiam vivendum, dicunt corpora id has. Liber quidam pertinax te mea. Cu esse alterum dolores vix, cibo quas deserunt nam eu, graeco evertitur per ut.</Text>
                <Button textAlign='center' colorScheme='teal' variant='outline'>Know More</Button>
            </Box>
        </Flex>
      </Stack>
    );
}

export default About;

import { 
    Box,
    Button,
    Center,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    SimpleGrid,
    Text,
    useMediaQuery,
 } from '@chakra-ui/react';
import React from 'react';

function NewsLetter() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
  return (
    <Box w="100%" h="100%" bg="purple" p="5" mt="5" borderRadius="lg">
      <SimpleGrid columns={isNotSmallerScreen ? 2 : 1} spacing={isNotSmallerScreen ? 5 : 1} pt="5">
        <Box>
          <Center>
            <Heading color="white">Newsletter</Heading>
          </Center>
          <Center>
            <Text textAlign="center" color="white">So we are glad to invite you all into our club to dance</Text>
          </Center>
        </Box>
        <Box>
          <InputGroup size='md' mt="5">
            <Input pr='3.5rem' type='email' placeholder='Enter Email' />
            <InputRightElement width='100px'>
              <Button bg="teal" h='2.60rem' size='lg'>SUBSCRIBE</Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default NewsLetter;

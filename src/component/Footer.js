import { 
    Box,
    Center,
    Divider,
    Heading,
    HStack,
    Link,
    SimpleGrid,
    Text,
    useMediaQuery,
 } from '@chakra-ui/react';
import React from 'react';
import { 
    FaTwitter, 
    FaFacebook, 
    FaPinterest, 
    FaInstagram
} from 'react-icons/fa'

function Footer() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
  return (
    <Box w="100%" p="5" mt="5">
      <SimpleGrid columns={isNotSmallerScreen ? 2 : 1} spacing={isNotSmallerScreen ? 5 : 1} pt="5">
        <Box>
          <Center>
            <Heading ml="5" size="md" fontWeight="semibold" alignSelf={isNotSmallerScreen ? '' : 'center'}>
                <Link href='https://contactxanta.com' isExternal>ISINGER./</Link>
            </Heading>
          </Center>
          <Center>
            <Text textAlign="center">Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas </Text>
          </Center>
        </Box>
        <Box>
            <Center>
                <HStack>
                    <FaFacebook />
                    <FaTwitter />
                    <FaPinterest />
                    <FaInstagram />
                </HStack>
            </Center>
            <Center>
                <Text mt="5"><b>Send us a question <Link href='mailto:hello@zainiklab.com' color="teal">hello@zainiklab.com</Link> </b></Text>
            </Center>
        </Box>
      </SimpleGrid>
      <Divider mt="5" orientation='horizontal' />
      <Text fontSize="14px" fontWeight="semibold" textAlign="center" mt="5">© 2020 - 2022 | Alright Reserved By <Link color="teal" href='https://contactxanta.com'>Odoh Gerald</Link></Text>
    </Box>
  );
}

export default Footer;

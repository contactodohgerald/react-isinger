import React from 'react';
import { 
    Link,
    HStack,
    Box,
} from '@chakra-ui/react'

function WebView() {
  return (
    <HStack spacing='20px'>
        <Box>
            <Link href='https://contactxanta.com' target='_blank'>Home</Link>
        </Box>
        <Box>
            <Link href='https://contactxanta.com' target='_blank'>About</Link>
        </Box>
        <Box>
            <Link href='https://contactxanta.com' target='_blank'>Music</Link>
        </Box>
        <Box>
            <Link href='https://contactxanta.com' target='_blank'>Project</Link>
        </Box>
        <Box>
            <Link href='https://contactxanta.com' target='_blank'>Album</Link>
        </Box>
        <Box>
            <Link href='https://contactxanta.com' target='_blank'>Contact</Link>
        </Box>
    </HStack>
  );
}

export default WebView;

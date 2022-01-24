import React from 'react';
import { 
    VStack, 
    Flex, 
    Heading,
    Link,
    useColorMode,
    useMediaQuery,
    Tooltip,
    Spacer,
  } from '@chakra-ui/react'
import { 
    IconButton 
} from '@chakra-ui/button'
import {
    FaSun, 
    FaMoon, 
} from 'react-icons/fa'
import WebView from './WebView';
import MobileView from './MobileView';
import MenuIconButton from './MenuIconButton';

function Head() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === 'dark'
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
  return (
    <VStack p="5">
        <Flex w={isNotSmallerScreen ? '100%' : '100%'}>
            <Heading ml="5" size="md" fontWeight="semibold">
                <Link href='https://contactxanta.com' isExternal>ISINGER./</Link>
            </Heading>
            <Spacer />
            {
                isNotSmallerScreen ? <WebView /> : <MobileView />
            }
            {
                isNotSmallerScreen ? <Spacer /> : ''
            }
            <Flex>
                {
                    isNotSmallerScreen ? <MenuIconButton />  : ''
                }
                <Tooltip label='Toggle Background Mode' fontSize='sm'>
                    <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} isRound={true} onClick={toggleColorMode}></IconButton>
                </Tooltip>
            </Flex>
        </Flex>
    </VStack>
  );
}

export default Head;

import { 
    Flex, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Center,
    Link
} from '@chakra-ui/react'
import React from 'react';
import { 
    IconButton 
} from '@chakra-ui/button'
import {
    FaHamburger,
    FaHome,
    FaBarcode,
    FaAccusoft,
    FaAdjust,
    FaLocationArrow,
    FaMusic, 
} from 'react-icons/fa'
import MenuIconButton from './MenuIconButton';

function MobileView() {
  return (
    <Menu isLazy>
        <MenuButton as={IconButton} aria-label='Options' icon={<FaHamburger />} variant='outline'/>
        <MenuList>
            <MenuItem icon={<FaHome />} ><Link href='#'>Home</Link></MenuItem>
            <MenuItem icon={<FaBarcode />}><Link href='#'>About</Link></MenuItem>
            <MenuItem icon={<FaAccusoft />}><Link href='#'>Music</Link></MenuItem>
            <MenuItem icon={<FaAdjust />} ><Link href='#'>Project</Link></MenuItem>
            <MenuItem icon={<FaMusic />} ><Link href='#'>Album</Link></MenuItem>
            <MenuItem icon={<FaLocationArrow />} ><Link href='#'>Contact</Link></MenuItem>
            <Center>
                <Flex flexDirection='row'>
                   <MenuIconButton />
                </Flex>
            </Center>
        </MenuList>
    </Menu>
  );
}

export default MobileView;

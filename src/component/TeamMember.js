import { 
    Box,
    Flex,
    Heading,
    Stack,
    Text,
    useMediaQuery
 } from '@chakra-ui/react';
import React from 'react';
import CardSix from './CardSix';

function TeamMember() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
    const dataList = [
        {
            id: 1,
            name: 'Xanta Chukwu',
            title: 'Ceo',
            imageSrc: 'https://bit.ly/prosper-baba'
        },
        {
            id: 2,
            name: 'Onyeoma Uber',
            title: 'Manager',
            imageSrc: 'https://bit.ly/kent-c-dodds'
        },
        {
            id: 3,
            name: 'John Lincoln',
            title: 'Vocal Artist',
            imageSrc: 'https://bit.ly/code-beast'
        },
        {
            id: 4,
            name: 'D1 Makanaki',
            title: 'Drammer',
            imageSrc: 'https://bit.ly/sage-adebayo'
        }
    ]
    return (
        <Stack>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" pl={isNotSmallerScreen ? '60' : '0'} pt={isNotSmallerScreen ? '40' : '10'} alignSelf="flex-start">
                <Box>
                    <Heading textAlign="center"  as='h2' size='2xl' ml="5">Our Team Member</Heading>
                    <Text ml="5">So we are glad to invite you all into our club to dance on the best music to all time best noise..</Text>
                </Box>
            </Flex>
            <Flex flexDirection={isNotSmallerScreen ? 'row' : 'column'} spacing="100px" >
                {
                    dataList.map(function (data) {
                        const {id, name, title, imageSrc} = data
                        return <CardSix key={id} name={name} title={title} imageSrc={imageSrc} />
                    })
                }
            </Flex>
        </Stack>
    );
}

export default TeamMember;

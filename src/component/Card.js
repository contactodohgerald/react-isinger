import React from "react";
import {
  Box,
  Image,
  Stack,
  Heading,
  Flex
} from "@chakra-ui/react";

function Card(props) {
  const { title, summary, imageSrc } = props;
  return (
    <Box p={2} display={{ md: "flex" }}  maxWidth="32rem" boxShadow='lg'>
        <Stack >
            <Image src={imageSrc} alt={title} alignSelf='center' />
            <Heading mb="5" as="h1" fontSize="lg" >{title}</Heading>
            <Flex>
                <Box><b>Releases:</b></Box>
                <Box>{summary.release}</Box>
            </Flex>
            <Flex>
                <Box><b>Label:</b></Box>
                <Box>{summary.label}</Box>
            </Flex>
            <Flex>
                <Box><b>Format:</b></Box>
                <Box>{summary.format}</Box>
            </Flex> 
            <Flex>
                <Box><b>Certifications:</b></Box>
                <Box>{summary.certification}</Box>
            </Flex>
        </Stack>
    </Box>
  );
}
export default Card;

import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Link,
  Divider,
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Grid,
  GridItem,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import Container from "../components/Container";

export default function About() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const colorAlt = {
    light: "black",
    dark: "white",
  };
  const colorElement = {
    light: "gray.500",
    dark: "gray.200",
  };
  const colorBox = {
    light: "gray.100",
    dark: "rgba(0, 0, 0, 0.2)",
  };
  return (
    <Container>
      <Head>
        <title>Nashir's Website</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        width="full"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          width="100%"
        >
          <Heading mb={5}>About Me</Heading>
          <Box
            bg={colorBox[colorMode]}
            css={{ backdropFilter: "blur(10px)" }}
            p={10}
            width="100%"
            rounded={10}
          >
            <Image
              src="./photo.jpeg"
              alt="Nashir Jamali"
              borderRadius="full"
              boxSize="150px"
              mx="auto"
            />
            <Text color={colorAlt[colorMode]}>lorem ipsum</Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

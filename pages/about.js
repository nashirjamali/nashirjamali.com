import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import Head from 'next/head';
import Container from '../components/Container';

export default function About() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  const colorAlt = {
    light: 'black',
    dark: 'white',
  };
  const colorElement = {
    light: 'gray.500',
    dark: 'gray.200',
  };
  const colorBox = {
    light: 'gray.100',
    dark: 'rgba(0, 0, 0, 0.2)',
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
            css={{ backdropFilter: 'blur(10px)' }}
            p={10}
            width="100%"
            rounded={10}
          >
            <Image
              src="./kabuto.jpg"
              alt="Nashir Jamali"
              borderRadius="full"
              boxSize="150px"
              mx="auto"
            />
            <Text color={colorSecondary[colorMode]} mt="28px" fontSize={18}>
              I'm a programmer, based in Indonesia. Currently, i'm focusing in
              Backend Development but i have skills in Frontend and Mobile
              Developement as well.
              <Text mt="10px">
                My professional work as programmer started from 2019 ,and now
                i'm working as freelancer and one of the biggest IT Company in
                Indonesia.
              </Text>
              <Text mt="10px">
                Apart from work/programming, I love reading, photography,
                design, and music.
              </Text>
            </Text>
            <Text
              as="h2"
              color={colorAlt[colorMode]}
              fontWeight="bold"
              fontSize={18}
              mb={5}
              mt="40px"
            >
              Contact me via
            </Text>
            <Box color={colorSecondary[colorMode]}>
              <Text>
                Email: &emsp; &ensp; &ensp;
                <Link mr={3} href="mailto:nashirjamali@gmail.com">
                  nashirjamali@gmail.com
                </Link>
              </Text>
            </Box>
            <Box color={colorSecondary[colorMode]}>
              <Text>
                Instagram: &ensp;
                <Link mr={3} href="https://www.instagram.com/nashir_j/">
                  nashir_j
                </Link>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

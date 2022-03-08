import {
  Box, Flex, Grid,
  GridItem, Heading, Link, ListItem, Stack, Text, UnorderedList, useColorMode
} from "@chakra-ui/react";
import Head from "next/head";
import Container from "../components/Container";


export default function Index() {
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
    light: "gray.200",
    dark: "black",
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
        >
          <Heading mb={2}>Hi, Nashir here!</Heading>
          <Text color={colorSecondary[colorMode]} mt={10} fontSize={20}>
            I am programmer during daytime, <br /> work with batman during
            nights, <br /> and photographer on the weekend.
          </Text>
          <Text
            color={colorAlt[colorMode]}
            fontWeight="bold"
            fontSize={20}
            mt={5}
          >
            Based on{" "}
            <Link
              href="https://www.google.com/maps/place/Jakarta,+Daerah+Khusus+Ibukota+Jakarta/@-6.2295712,106.7594779,12z/data=!3m1!4b1!4m5!3m4!1s0x2e69f3e945e34b9d:0x5371bf0fdad786a2!8m2!3d-6.2087634!4d106.845599?hl=id"
              isExternal
            >
              Jakarta
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.google.com/maps/place/Surabaya,+Kota+SBY,+Jawa+Timur/@-7.2754438,112.6426437,12z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fbf8381ac47f:0x3027a76e352be40!8m2!3d-7.2574719!4d112.7520883?hl=id"
              isExternal
            >
              Surabaya
            </Link>
            , Indonesia
          </Text>
          <Flex my={10} />

          {/* Work Experience */}
          <Box>
            <Text
              as="h2"
              color={colorAlt[colorMode]}
              fontWeight="bold"
              fontSize={18}
              mb={5}
            >
              Work Experience
            </Text>
            <Grid
              templateColumns="repeat(5, 1fr)"
              width="100%"
              gap={2}
              rowGap={5}
              color={colorSecondary[colorMode]}
            >
              {/* Mitrais */}
              <GridItem>2021 - now</GridItem>
              <GridItem colSpan={2}>Software Enginner (PG) </GridItem>
              <GridItem colSpan={2}>
                <Link
                  href="https://www.mitrais.com/id/"
                  isExternal
                  textDecoration="underline"
                >
                  PT. Mitrais
                </Link>{" "}
                (Currently delegated in{" "}
                <Link
                  href="https://kargo.tech/"
                  isExternal
                  textDecoration="underline"
                >
                  Kargo Tech
                </Link>
                )
              </GridItem>
              {/* Kreasi Informatika */}
              <GridItem>2020 - now</GridItem>
              <GridItem colSpan={2}>Web Developer (Sr.)</GridItem>
              <GridItem colSpan={2}>
                {" "}
                <Link
                  href="https://kreasiiman.id/"
                  isExternal
                  textDecoration="underline"
                >
                  PT. Kreasi Informatika Mandiri
                </Link>
              </GridItem>
              {/* Telkom Indonesia */}
              <GridItem>2021</GridItem>
              <GridItem colSpan={2}>Backend Developer (Freelance)</GridItem>
              <GridItem colSpan={2}>
                <Link
                  href="https://www.telkom.co.id/sites"
                  isExternal
                  textDecoration="underline"
                >
                  PT. Telkom Indonesia
                </Link>
              </GridItem>
              {/* Vascomm */}
              <GridItem>2020</GridItem>
              <GridItem colSpan={2}>Backend Developer (Freelance)</GridItem>
              <GridItem colSpan={2}>
                <Link
                  href="https://vascomm.co.id/"
                  isExternal
                  textDecoration="underline"
                >
                  PT. Vascomm
                </Link>
              </GridItem>
              {/* GarasiLabs */}
              <GridItem>2020</GridItem>
              <GridItem colSpan={2}>QA Enginner (Intern)</GridItem>
              <GridItem colSpan={2}>
                {" "}
                <Link
                  href="https://www.garasilabs.com/"
                  isExternal
                  textDecoration="underline"
                >
                  PT. GarasiLabs
                </Link>
              </GridItem>
            </Grid>
          </Box>

          {/* Expertise */}
          <Box width="100%">
            <Text
              as="h2"
              color={colorAlt[colorMode]}
              fontWeight="bold"
              fontSize={18}
              mb={5}
              mt={20}
            >
              Expertises / Skills
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              width="100%"
              gap={5}
              rowGap={5}
              color={colorSecondary[colorMode]}
            >
              <GridItem>
                <Text
                  as="h3"
                  color={colorAlt[colorMode]}
                  fontWeight="semibold"
                  fontSize={16}
                  mb={3}
                >
                  Frontend
                </Text>
                <UnorderedList>
                  <ListItem>React Js</ListItem>
                  <ListItem>React Native</ListItem>
                  <ListItem>Chakra UI</ListItem>
                  <ListItem>Tailwind</ListItem>
                  <ListItem>Vue Js</ListItem>
                </UnorderedList>
              </GridItem>
              <GridItem>
                <Text
                  as="h3"
                  color={colorAlt[colorMode]}
                  fontWeight="semibold"
                  fontSize={16}
                  mb={3}
                >
                  Backend
                </Text>
                <UnorderedList>
                  <ListItem>Laravel</ListItem>
                  <ListItem>Node Js</ListItem>
                  <ListItem>GraphQL</ListItem>
                  <ListItem>Elixir</ListItem>
                </UnorderedList>
              </GridItem>
              <GridItem>
                <Text
                  as="h3"
                  color={colorAlt[colorMode]}
                  fontWeight="semibold"
                  fontSize={16}
                  mb={3}
                >
                  Others
                </Text>
                <UnorderedList>
                  <ListItem>Valorant</ListItem>
                  <ListItem>FIFA 22</ListItem>
                  <ListItem>Play guitar</ListItem>
                  <ListItem>Make joy</ListItem>
                </UnorderedList>
              </GridItem>
            </Grid>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

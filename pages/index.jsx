import Head from 'next/head';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import Container from '../components/Container';

export default function Home() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  return (
    <Container>
      <Head>
        <title>Home - Personal Site</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        m="0 auto 4rem auto"
        px={2}
        maxWidth={700}
      >
        <Flex flexDirection="column" maxWidth={700} px={4}>
          <Heading mb={2}>Hi, I&apos;m Paul Coffman Jr.</Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante
            nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus
            lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}

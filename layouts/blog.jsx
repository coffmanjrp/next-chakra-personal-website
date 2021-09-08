import Head from 'next/head';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
} from '@chakra-ui/react';
import Container from '../components/Container';

const BlogLayout = ({ children, frontMatter }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400',
  };
  const slug = router.asPath.replace('/blog', '');

  return (
    <Container>
      <Head>
        <title>{slug} - Blog - Personal Web Site</title>
      </Head>
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        m="0 auto 4rem auto"
        maxWidth={700}
        w="100%"
        px={2}
      >
        <Flex flexDirection="column" maxWidth={700} w="100%">
          <Heading as="h1" letterSpacing="tight" mb={2} size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justifyContent="space-between"
            alignItems={['initial', 'center']}
            flexDirection={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex alignItems="center">
              <Avatar
                size="xs"
                name="coffmanjrp"
                src="/images/portrait.png"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by}
                {'coffmanjrp / '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth={100} mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
};

export default BlogLayout;

import { useState } from 'react';
import Head from 'next/head';
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';

const BlogPage = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  return (
    <>
      <Head>
        <title>Blog - Personal Web Site</title>
      </Head>
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          m="0 auto 4rem auto"
          px={2}
          maxWidth={700}
        >
          <Flex flexDirection="column" maxWidth={700} px={4}>
            <Heading as="h1" mb={4} size="2xl" letterSpacing="tight">
              Blog ({posts.length} posts)
            </Heading>
            <InputGroup mb={4} mr={4} width="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightAddon children={<SearchIcon />} />
            </InputGroup>

            {!filteredBlogPosts.length && 'No posts found :('}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog');

  return {
    props: { posts },
  };
};

export default BlogPage;

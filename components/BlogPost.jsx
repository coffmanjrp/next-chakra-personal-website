import NextLink from 'next/link';
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={10} display="block" width="100%">
          <Flex
            width="100%"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Flex flexDirection="column" width="100%">
              <Heading as="h3" size="md" mb={1} fontWeight="medium">
                {title}
              </Heading>
            </Flex>
            <Text
              color="gray.500"
              minWidth="105px"
              textAlign={['left', 'right']}
              mb={[4, 0]}
            >
              {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;

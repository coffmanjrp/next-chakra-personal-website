import Link from 'next/link';
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import DarkModeSwitch from './DarkModeSwitch';

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: '#171717',
  };

  const navHoverBg = {
    light: 'gray.600',
    dark: 'gray.300',
  };

  const color = {
    light: 'black',
    dark: 'white',
  };

  const StickNav = styled(Flex)`
    position: sticky;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
    z-index: 10;
  `;

  return (
    <>
      <StickNav
        as="nav"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
        px={[2, 6, 6]}
        py={2}
        maxWidth={800}
        minWidth={356}
        width="100%"
        bg={bgColor[colorMode]}
      >
        <Box>
          <Link href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </Link>
          <Link href="/blog" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Blog
            </Button>
          </Link>
        </Box>
        <DarkModeSwitch />
      </StickNav>
      <Flex
        as="main"
        flexDirection="column"
        justifyContent="center"
        mt={[4, 8, 8]}
        px={[0, 4, 4]}
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    green: {
      400: '#0FDB54',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
      // styles for the `a`
      a: {
        color: 'green.400',
        _hover: {
          textDecoration: 'underline',
        },
      },
      option: {
        color: 'gray.900',
      },
    },
  },
});

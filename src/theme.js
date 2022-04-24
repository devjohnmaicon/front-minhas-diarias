import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        white: '#F5F5F5',
        red: '#F05454',
        black: '#171717',
        background: '#F2F2F2'
      },

      error: 'red.500',
      success: 'green.500',
    },
  },
});

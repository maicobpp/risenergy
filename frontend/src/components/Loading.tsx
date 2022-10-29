import { Box, Center, Spinner } from '@chakra-ui/react';

export function Loading() {
  return (
    <Box flex="1" mt="20">
      <Center>
        <Spinner size="xl" />
      </Center>
    </Box>
  );
}

import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Headers } from '../pages/Header';
import { SideBar } from '../pages/Sidebar';

export function Default() {
  return (
    <Flex direction="column" h="100vh">
      <Headers />

      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <SideBar />
        <Outlet />
      </Flex>
    </Flex>
  );
}

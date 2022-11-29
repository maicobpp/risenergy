import {
  Flex, Text, Box, Avatar, Image,
} from '@chakra-ui/react';
import logo from '../assets/logo.svg';

export function Headers() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Image boxSize="60px" src={logo} mr="2" alt="logo" />
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="wider"
        w="64"
      >
        Rysenergy
        <Text as="span" ml="1" color="green.400">.</Text>
      </Text>

      {/* <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Pesquisar"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex> */}

      <Flex
        align="center"
        ml="auto"
      >
        <Box mr="4" textAlign="right">
          <Text>
            Maico Beppler
          </Text>
          <Text color="gray.300" fontSize="small">
            maicobeppler@gmail.com
          </Text>
        </Box>
        <Avatar size="md" name="Maico Beppler" />
      </Flex>
    </Flex>

  );
}

import {
  Button, Flex, Image, Text,
} from '@chakra-ui/react';
import { Input } from '../components/Input';
import logo from '../assets/logo.svg';

export function Login() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDir="column"
    >
      <Image boxSize="180" src={logo} mr="2" alt="logo" />
      <Flex mb="4">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          letterSpacing="wider"
        >
          Rysenergy
          <Text as="span" ml="1" color="green.400">.</Text>
        </Text>
      </Flex>
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Input
          name="email"
          type="email"
          label="e-Mail"
        />
        <Input
          name="password"
          type="password"
          label="Senha"
        />

        <Button
          as="a"
          mt="6"
          colorScheme="blue"
          href="/"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

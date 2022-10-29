import {
  Box, Button, Flex, Heading, HStack, Icon, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  SimpleGrid, Spinner, Text, useDisclosure, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { RiCloseLine, RiSaveLine } from 'react-icons/ri';
import { Input } from '../components/Input';
import { Loading } from '../components/Loading';
import { stateCustomer } from '../stores/CustomerState';

export const Customer = observer(() => {
  const params = useParams();
  const { id } = params as { id: string };
  // const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get('id') as string;
  const { isOpen, onOpen, onClose } = useDisclosure;

  useEffect(() => {
    stateCustomer.loadCustomer(id);
  }, [id]);

  if (stateCustomer.isLoading && !stateCustomer.isSaving) {
    return (<Loading />);
  }

  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">Cliente</Heading>
        <Heading size="xs" textColor="gray.400" fontWeight="normal">{stateCustomer.customer.id}</Heading>
      </Flex>
      <VStack spacing="4">
        <Input
          name="name"
          label="Nome Completo"
          onChange={(e) => { stateCustomer.customer.name = e.target.value; }}
          value={stateCustomer.customer.name}
        />
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input
            name="email"
            type="email"
            label="e-Mail"
            onChange={(e) => { stateCustomer.customer.email = e.target.value; }}
            value={stateCustomer.customer.email}
          />
          <Input
            name="phone"
            type="tel"
            label="Telefone"
            onChange={(e) => { stateCustomer.customer.phone = e.target.value; }}
            value={stateCustomer.customer.phone}
          />
        </SimpleGrid>
      </VStack>

      <HStack mt="10">
        <Flex justify="flex-start">
          <Button size="sm" fontSize="sm" colorScheme="cyan" leftIcon={<Icon as={RiSaveLine} />} onClick={onOpen}>
            Instalações
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>uahsdiuhasiudhaisu iuashdiuahsdiuahsdi uhasidu ha</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <Flex justify="flex-end" w="100%">
          <HStack spacing="4">
            {stateCustomer.isSaving ? <Spinner size="sm" /> : ''}
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="whiteAlpha"
              href="/customers"
              leftIcon={<Icon as={RiCloseLine} />}
            >
              Cancelar
            </Button>
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="blue"
              leftIcon={<Icon as={RiSaveLine} />}
              onClick={stateCustomer.saveCustomer}
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </HStack>
    </Box>
  );
});

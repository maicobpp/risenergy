import {
  Box,
  Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalFooter,
  ModalHeader, ModalOverlay, Table, Tbody, Td, Text, Th, Thead, Tr, useDisclosure,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { RiSearchLine, RiUserReceivedLine } from 'react-icons/ri';
// import { useEffect, useState } from 'react';
import { stateProject } from '../stores/ProjectState';
import { stateCustomersList } from '../stores/CustomersListState';
import { ICustomer } from '../interfaces/ICustomer';

export const FindCustomerModal = observer(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [customerId, setCustomerId] = useState('');

  function setCustomer(customer: ICustomer) {
    stateProject.project.customer.id = customer.id;
    stateProject.project.customer.name = customer.name;
    onClose();
  }

  // useEffect(() => {
  //   stateProject.project.customer.id = customerId;
  //   onClose();
  // }, [customerId]);

  return (
    <>
      <Button
        mt="7"
        size="sm"
        fontSize="sm"
        maxW="8"
        colorScheme="whitealpha"
        onClick={onOpen}
        leftIcon={<Icon as={RiSearchLine} />}
      />

      <Modal
        size="3xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgColor="gray.800">Selecione um cliente</ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor="gray.800">
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th>Cliente</Th>
                  <Th>Cidade</Th>
                  <Th width="3" />
                </Tr>
              </Thead>
              <Tbody>
                {stateCustomersList.customers.map((customer) => {
                  return (
                    <Tr>
                      <Td>
                        <Box>
                          <Text fontSize="sm" fontWeight="bold">{customer.name}</Text>
                          <Text fontSize="xs" color="gray.300">{customer.email}</Text>
                        </Box>
                      </Td>
                      <Td>
                        <Text fontSize="sm" fontWeight="bold">{customer.phone}</Text>
                      </Td>
                      <Td>
                        <Button
                          size="sm"
                          fontSize="xs"
                          colorScheme="cyan"
                          leftIcon={<Icon as={RiUserReceivedLine} />}
                          onClick={() => { setCustomer(customer); }}
                        >
                          Selecionar
                        </Button>
                      </Td>

                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter bgColor="gray.800" />
        </ModalContent>
      </Modal>
    </>
  );
});

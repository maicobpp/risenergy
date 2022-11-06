import {
  Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { RiAddLine, RiDeleteBin2Line, RiPencilLine } from 'react-icons/ri';
import { Loading } from '../components/Loading';
import { stateCustomersList } from '../stores/CustomersListState';

export const CustomersList = observer(() => {
  if (stateCustomersList.isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="md" fontWeight="normal">Clientes</Heading>

        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="blue"
          href="/customer/new"
          leftIcon={<Icon as={RiAddLine} />}
        >
          Novo Cliente
        </Button>
      </Flex>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Cliente</Th>
            <Th>Cidade</Th>
            <Th width="3" />
            <Th width="3" />
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
                    as="a"
                    size="sm"
                    fontSize="xs"
                    colorScheme="cyan"
                    href={`/units/${customer.id}`}
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Instalações
                  </Button>
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="xs"
                    colorScheme="blue"
                    href={`/customer/${customer.id}`}
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
                <Td>
                  <Button
                    size="sm"
                    fontSize="xs"
                    colorScheme="pink"
                    leftIcon={<Icon as={RiDeleteBin2Line} />}
                    onClick={() => { stateCustomersList.deleteCustomer(customer.id); }}
                  >
                    Excluir
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
});

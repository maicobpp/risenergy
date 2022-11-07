import {
  Box, Button, Flex, Heading, HStack, Icon,
  SimpleGrid, Spinner, VStack,
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
  const { id } = params as { id: string } || '';
  const final = (id === 'new' ? '' : id);

  useEffect(() => {
    stateCustomer.loadCustomer(final);
  }, [final]);

  if (stateCustomer.isLoading && !stateCustomer.isSaving) {
    return (<Loading />);
  }

  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="md" fontWeight="normal">Cliente</Heading>
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
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="cyan"
            href={`/units/${stateCustomer.customer.id}`}
            leftIcon={<Icon as={RiSaveLine} />}
          >
            Instalações
          </Button>
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

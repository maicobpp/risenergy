import {
  Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { UnitModal } from '../components/UnitModal';
import { stateUnitsList } from '../stores/UnitsListState';
import { integerFormatter, priceFormatter } from '../utils/formatter';
import { IUnit } from '../interfaces/IUnit';

export const UnitsList = observer(() => {
  const params = useParams();
  const { customer } = params as { customer: string };

  const newUnit: IUnit = {
    id: '',
    customer_id: customer,
    data: {
      id: '',
    },
  };

  useEffect(() => {
    stateUnitsList.loadUnits(customer);
  }, [customer]);

  if (stateUnitsList.isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="md" fontWeight="normal">{stateUnitsList.customer.name}</Heading>
        <UnitModal unit={newUnit} label="Nova Instalação" fontSize="sm" />

      </Flex>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th><Text>Descrição</Text></Th>
            <Th><Text align="right">Consumo médio</Text></Th>
            <Th><Text align="right">Ultima Conta</Text></Th>
            <Th><Text align="right">Custo Fixo</Text></Th>
            <Th><Text align="right">Taxa Mínima</Text></Th>
            <Th width="3" />
            <Th width="3" />
          </Tr>
        </Thead>
        <Tbody>
          {stateUnitsList.units.map((unit) => {
            return (
              <Tr>
                <Td minW="50">
                  <Text fontSize="sm" fontWeight="bold">{unit.name}</Text>
                </Td>
                <Td>
                  <Text align="right" fontSize="xs" color="gray.200">{integerFormatter.format(unit.avg || 0)}</Text>
                </Td>
                <Td>
                  <Text align="right" fontSize="xs" color="gray.200">{priceFormatter.format(unit.last_bill || 0)}</Text>
                </Td>
                <Td>
                  <Text align="right" fontSize="xs" color="gray.200">{priceFormatter.format(unit.fixed_cost || 0)}</Text>
                </Td>
                <Td>
                  <Text align="right" fontSize="xs" color="gray.200">{priceFormatter.format(unit.minimun_charge || 0)}</Text>
                </Td>
                <Td>
                  <UnitModal unit={unit} label="Editar" fontSize="xs" edit />
                </Td>
                <Td>
                  <Button
                    size="sm"
                    fontSize="xs"
                    colorScheme="pink"
                    leftIcon={<Icon as={RiDeleteBin2Line} />}
                    onClick={() => { stateUnitsList.deleteUnit(unit.id, unit.customer_id); }}
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

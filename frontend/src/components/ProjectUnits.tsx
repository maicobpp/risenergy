import {
  Box, Button, Icon, Table, Tbody, Td, Text, Th, Thead, Tr,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { Loading } from './Loading';
import { stateUnitsList } from '../stores/UnitsListState';
import { integerFormatter, priceFormatter } from '../utils/formatter';

interface ICustomerID {
  customer: string;
}

export const PorjectUnits = observer(({ customer }: ICustomerID) => {
  useEffect(() => {
    stateUnitsList.loadUnits(customer);
  }, [customer]);

  if (stateUnitsList.isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <Box flex="1" borderRadius={4} p="4" bg="gray.900" mt="2">
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th><Text>Descrição</Text></Th>
            <Th><Text align="right">Consumo médio</Text></Th>
            <Th><Text align="right">Ultima Conta</Text></Th>
            <Th><Text align="right">Custo Fixo</Text></Th>
            <Th><Text align="right">Taxa Mínima</Text></Th>
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
                  <Button
                    size="sm"
                    fontSize="xs"
                    colorScheme="pink"
                    leftIcon={<Icon as={RiDeleteBin2Line} />}
                    onClick={() => { stateUnitsList.deleteUnit(unit.id, unit.customer_id); }}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
});

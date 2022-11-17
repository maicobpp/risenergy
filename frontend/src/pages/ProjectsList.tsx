import {
  Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import {
  RiAddLine, RiDeleteBin2Line, RiEyeFill,
} from 'react-icons/ri';
import { Loading } from '../components/Loading';
import { stateProjectsList } from '../stores/ProjectsListState';
import { dateFormatter } from '../utils/formatter';
import { getStatus } from '../utils/status';

export const ProjectsList = observer(() => {
  if (stateProjectsList.isLoading) {
    return (
      <Loading />
    );
  }
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="md" fontWeight="normal">Projetos</Heading>

        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="blue"
          href="/project/new"
          leftIcon={<Icon as={RiAddLine} />}
        >
          Novo Projeto
        </Button>
      </Flex>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>Cliente</Th>
            <Th>Data</Th>
            <Th>Status</Th>
            <Th width="3" />
            <Th width="3" />
          </Tr>
        </Thead>
        <Tbody>
          {stateProjectsList.projects.map((project) => {
            return (
              <Tr>
                <Td>
                  <Box>
                    <Text fontSize="sm" fontWeight="bold">{project.customer.name}</Text>
                    <Text fontSize="xs" color="gray.300">{project.city.city}</Text>
                  </Box>
                </Td>
                <Td>
                  <Text fontSize="sm" fontWeight="bold">{dateFormatter.format(new Date(project.date))}</Text>
                </Td>
                <Td>
                  <Text fontSize="sm" fontWeight="bold">{getStatus(project.status)}</Text>
                </Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="xs"
                    colorScheme="blue"
                    href={`/project/${project.id}`}
                    leftIcon={<Icon as={RiEyeFill} />}
                  >
                    Acessar
                  </Button>
                </Td>
                <Td>
                  <Button
                    size="sm"
                    fontSize="xs"
                    colorScheme="pink"
                    leftIcon={<Icon as={RiDeleteBin2Line} />}
                    onClick={() => { stateProjectsList.deleteProject(project.id); }}
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

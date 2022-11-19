import {
  Box, Button, Flex, Heading, HStack, Icon, Text,
  SimpleGrid, Spinner, VStack, Select, FormLabel, FormControl,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import {
  RiAddLine, RiCloseLine, RiSaveLine,
} from 'react-icons/ri';
import { Input } from '../components/Input';
import { Loading } from '../components/Loading';
import { stateProject } from '../stores/ProjectState';
import { addTime, removeTime } from '../utils/formatter';
import { PorjectUnits } from '../components/ProjectUnits';
import { DimensioningModal } from '../components/DimensioningModal';

export const Project = observer(() => {
  const params = useParams();
  const { id } = params as { id: string } || '';
  const final = (id === 'new' ? '' : id);

  useEffect(() => {
    stateProject.loadProject(final);
  }, [final]);

  if (stateProject.isLoading && !stateProject.isSaving) {
    return (<Loading />);
  }

  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="md" fontWeight="normal">Projeto</Heading>
        <Heading size="xs" textColor="gray.400" fontWeight="normal">{stateProject.project.id}</Heading>
      </Flex>
      <VStack spacing="4">
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input
            name="customer"
            label="Cliente"
            value={stateProject.project.customer.name}
          />
          <Input
            name="date"
            label="Data"
            type="date"
            onChange={(e) => { stateProject.project.date = (addTime(e.target.value)); }}
            value={removeTime(stateProject.project.date)}
          />
          <FormControl>
            <FormLabel fontSize="sm">Status</FormLabel>
            <Select
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              _focus={{
                bgColor: 'gray.900',
              }}
              bgColor="gray.900"
              bg="gray.900"
              border={0}
              size="sm"
              onChange={(e) => { stateProject.project.status = (e.target.value); }}
              value={stateProject.project.status}
            >
              <option value="quote">Orçamento</option>
              <option value="open">Aberto</option>
              <option value="applied">Aplicado</option>
              <option value="aproved">Aprovado</option>
              <option value="finished">Finalizado</option>
              <option value="canceled">Cancelado</option>
            </Select>
          </FormControl>
        </SimpleGrid>
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input
            name="inclination"
            label="Inclinação"
            onChange={(e) => { stateProject.project.inclination = Number(e.target.value); }}
            value={stateProject.project.inclination}
          />
          <FormControl>
            <FormLabel fontSize="sm">Orientação</FormLabel>
            <Select
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              _focus={{
                bgColor: 'gray.900',
              }}
              bgColor="gray.900"
              bg="gray.900"
              border={0}
              size="sm"
              onChange={(e) => { stateProject.project.orientation = (e.target.value); }}
              value={stateProject.project.orientation}
            >
              <option value="north">Norte</option>
              <option value="south">Sul</option>
              <option value="east">Leste</option>
              <option value="west">Oeste</option>
            </Select>
          </FormControl>
        </SimpleGrid>
      </VStack>

      <Box mt="4">
        <Text size="md" fontWeight="normal">Instalações</Text>
        <PorjectUnits customer={stateProject.project.customer.id} />
      </Box>

      <HStack mt="10">
        <Flex justify="flex-start">
          <HStack spacing="4">
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="cyan"
              href={`/units/${stateProject.project.id}`}
              leftIcon={<Icon as={RiAddLine} />}
            >
              Adicionar Instalação
            </Button>
            <DimensioningModal state={stateProject} />
          </HStack>
        </Flex>
        <Flex justify="flex-end" w="100%">
          <HStack spacing="4">
            {stateProject.isSaving ? <Spinner size="sm" /> : ''}
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
              onClick={stateProject.saveProject}
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </HStack>
    </Box>
  );
});

import {
  Box,
  Button, Flex, Heading, Icon, Modal, ModalBody, ModalCloseButton, ModalContent,
  ModalFooter,
  ModalHeader, ModalOverlay, Text, useDisclosure, VStack,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { RiBarChartFill } from 'react-icons/ri';
import Chart from 'react-apexcharts';
import { ProjectStore } from '../stores/ProjectState';
import { theme } from '../styles/theme';

interface TModalProps {
  state: ProjectStore,
}

export const DimensioningModal = observer(({ state }: TModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useEffect(() => {
  //   stateUnit.loadUnit(unit);
  // }, [unit.id]);

  // function openModal() {
  //   stateProjetc.loadUnit(unit);
  //   onOpen();
  // }

  // function save() {
  //   stateUnit.saveUnit();
  //   onClose();
  // }

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[400],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dec',
      ],
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shade: 'dark',
      },
    },
    colors: [
      theme.colors.green[400],
    ],
  };

  const geracao = [
    {
      name: 'geracao',
      data: [629.26, 619.53, 556.82, 480.05, 384.91, 331.93, 358.96, 428.16, 423.83, 507.08, 628.18, 649.80],
    },
  ];

  const economia = [
    {
      name: 'economia',
      data: [647.62, 377.20, 683.56, 392.52, 343.22, 279.27, 300.63, 362.77, 354.43, 370.39, 373.80, 309.12],
    },
  ];

  return (
    <>
      <Button
        size="sm"
        fontSize="sm"
        colorScheme="green"
        onClick={onOpen}
        leftIcon={<Icon as={RiBarChartFill} />}
      >
        Gerar Dimensionamento
      </Button>

      <Modal
        size="3xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgColor="gray.800">Dimensionamento</ModalHeader>
          <ModalCloseButton />
          <ModalBody bgColor="gray.800">
            <VStack spacing="6">
              <Flex w="100%">
                <Text>
                  Deve ser instalado um gerado de
                  {' '}
                  <Text as="span" color="green.400">4400</Text>
                  {' '}
                  W para atender 100% da demanda atual da instalação.
                  {' '}
                </Text>
              </Flex>
              <Flex w="100%">
                <Heading ml="4" size="sm">Geração</Heading>
              </Flex>
              <Text size="xs">
                Média de Geração
                {' '}
                <Text as="span" color="green.400">518,74</Text>
                {' '}
                kWh
              </Text>
              <Box
                p="4"
                bg="gray.900"
                borderRadius={8}
                minW="530"
              >
                <Chart options={options} series={geracao} type="bar" height={160} />
              </Box>
              <Flex w="100%">
                <Heading ml="4" size="sm">Economia</Heading>
              </Flex>
              <Text size="xs">
                Economia Anual: R$
                {' '}
                <Text as="span" color="green.400">4.752,56</Text>
              </Text>
              <Box
                p="4"
                bg="gray.900"
                borderRadius={8}
                minW="530"
              >
                <Chart options={options} series={economia} type="bar" height={160} />
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter bgColor="gray.800" />
        </ModalContent>
      </Modal>
    </>
  );
});

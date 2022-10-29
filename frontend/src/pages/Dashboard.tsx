import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Chart from 'react-apexcharts';
import { theme } from '../styles/theme';

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
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
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
    '#0FDB54',
  ],
};

const series = [
  { name: 'orcamentos', data: [8, 10, 11, 3, 5, 8, 2] },
];

export function Dashboard() {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="400px">
      <Box
        p="8"
        bg="gray.800"
        borderRadius={8}
        pb="4"
      >
        <Text fontSize="lg" mb="4">Total Orçamentos</Text>
        <Chart options={options} series={series} type="bar" height={160} />
      </Box>

      <Box
        p="8"
        bg="gray.800"
        borderRadius={8}
      >
        <Text fontSize="lg" mb="4">Total de Projetos</Text>
      </Box>

      <Box
        p="8"
        bg="gray.800"
        borderRadius={8}
      >
        <Text fontSize="lg" mb="4">Taxa de Aprovação</Text>
      </Box>

      <Box
        p="8"
        bg="gray.800"
        borderRadius={8}
      >
        <Text fontSize="lg" mb="4">KWh Instalados</Text>
      </Box>
    </SimpleGrid>
  );
}

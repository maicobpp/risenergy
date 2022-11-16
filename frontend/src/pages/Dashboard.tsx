import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Chart from 'react-apexcharts';
import { theme } from '../styles/theme';
import {
  aprovados, carga, ChartOptions, orcamentos, total,
} from '../utils/charts';

export function Dashboard() {
  return (
    <SimpleGrid
      flex="1"
      gap="4"
      minChildWidth="400px"
    >
      <Box
        p="8"
        bg="gray.800"
        borderRadius={8}
        pb="4"
      >
        <Text
          fontSize="lg"
          mb="4"
        >
          Total Orçamentos
        </Text>
        <Chart
          options={ChartOptions(theme.colors.cyan[400])}
          series={orcamentos}
          type="bar"
          height={160}
        />
      </Box>

      <Box
        p="8"
        bg="gray.800"
        borderRadius={8}
      >
        <Text fontSize="lg" mb="4">Total de Projetos Aprovados</Text>
        <Chart options={ChartOptions(theme.colors.green[400])} series={aprovados} type="bar" height={160} />
      </Box>

      <Box
        p="8"
        bg="gray.800"
        borderRadius={8}
      >
        <Text fontSize="lg" mb="4">Carga Instalada (kWh)</Text>
        <Chart options={ChartOptions(theme.colors.orange[400])} series={carga} type="bar" height={160} />
      </Box>

      <Box
        p="8"
        bg="gray.800"
        borderRadius={8}
      >
        <Text fontSize="lg" mb="4">Total em KWh Instalados</Text>
        <Chart options={ChartOptions(theme.colors.pink[400])} series={total} type="area" height={160} />
      </Box>
    </SimpleGrid>
  );
}

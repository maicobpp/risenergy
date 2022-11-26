import { theme } from '../styles/theme';

export const ChartOptions = ((barsColor: string) => {
  return {
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
      barsColor,
    ],
  };
});

export const orcamentos = [
  { name: 'orcamentos', data: [18, 20, 15, 10, 12, 9, 8, 7, 13, 14, 17, 23] },
];

export const aprovados = [
  { name: 'orcamentos', data: [7, 6, 6, 3, 5, 2, 4, 3, 5, 7, 7, 11] },
];

export const carga = [
  { name: 'orcamentos', data: [35, 26, 28, 18, 12, 4, 8, 11, 23, 37, 18, 42] },
];

export const total = [
  { name: 'orcamentos', data: [35, 61, 89, 107, 119, 123, 131, 142, 165, 202, 220, 262] },
];

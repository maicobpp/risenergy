import {
  Box, Icon, Link, Stack, Text,
} from '@chakra-ui/react';
import {
  RiContactsLine, RiDashboardLine, RiProjectorFill,
} from 'react-icons/ri';

export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Geral
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" href="/">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Painel</Text>
            </Link>
            <Link display="flex" href="/projects">
              <Icon as={RiProjectorFill} fontSize="20" />
              <Text ml="4" fontWeight="medium">Projetos</Text>
            </Link>
            <Link display="flex" href="/customers">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">Clientes</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

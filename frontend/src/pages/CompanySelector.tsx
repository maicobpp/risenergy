import {
  Flex,
} from '@chakra-ui/react';
import { CompanyBox } from '../components/CompanyBox';
import { Headers } from './Header';

export function CompanySelector() {
  return (
    <Flex direction="column" h="100vh">
      <Headers />
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        flexDir="column"
      >
        <CompanyBox name="Kafer Solar" org_id="44f20c08-747a-4566-9dbe-b1b35f579dfd" />
      </Flex>
    </Flex>
  );
}

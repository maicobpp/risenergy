import { useEffect, useState } from 'react';
import {
  Button, Flex, Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface ICompanyBoxProps {
  name: string;
  org_id: string;
}

export function CompanyBox({ name, org_id }: ICompanyBoxProps) {
  const [selected, setSelected] = useState(false);
  const go = useNavigate();

  useEffect(() => {
    if (selected) {
      setSelected(false);
      go('/');
    }
  }, [selected]);

  return (
    <Flex
      width="100%"
      maxW={600}
      bg="gray.800"
      p="6"
      borderRadius={8}
      justify="center"
      align="center"
    >
      <Flex
        flexDir="column"
      >

        <Text
          fontSize="2xl"
          fontWeight="bold"
          letterSpacing="wider"
          minW={450}
        >
          {name}
        </Text>
        <Text
          fontSize="sm"
          textColor="gray.400"
        >
          {org_id}
        </Text>

      </Flex>

      <Button
        colorScheme="blue"
        onClick={() => { setSelected(true); }}
      >
        Acessar
      </Button>
    </Flex>
  );
}

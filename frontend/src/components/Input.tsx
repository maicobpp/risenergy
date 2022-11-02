import {
  FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import InputMask from 'react-input-mask';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel fontSize="sm" htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        as={InputMask}
        masrk="9999999,99"
        name={name}
        id={name}
        focusBorderColor="green.400"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="sm"
        {...rest}
      />
    </FormControl>
  );
}

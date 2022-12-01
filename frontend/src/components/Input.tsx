import {
  FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import ReactInputMask from 'react-input-mask';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  mask?: string;
}

export function Input({
  name, label, mask, ...rest
}: InputProps) {
  if (mask) {
    return (
      <FormControl>
        {!!label && <FormLabel fontSize="sm" htmlFor={name}>{label}</FormLabel>}

        <ChakraInput
          as={ReactInputMask}
          mask={mask}
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
  return (
    <FormControl>
      {!!label && <FormLabel fontSize="sm" htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
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

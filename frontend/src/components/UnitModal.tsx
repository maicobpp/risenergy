import {
  Button, HStack, Icon, Modal, ModalBody, ModalContent, ModalFooter,
  ModalHeader, ModalOverlay, useDisclosure,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { IUnit } from '../interfaces/IUnit';
import { stateUnit } from '../stores/UnitState';
import { Input } from './Input';

interface TModalProps {
  unit: IUnit,
  label: string,
  fontSize: string,
  edit?: boolean,
}

export const UnitModal = observer(({
  unit, label, fontSize, edit = false,
}: TModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    stateUnit.loadUnit(unit);
  }, [unit.id]);

  function openModal() {
    stateUnit.loadUnit(unit);
    onOpen();
  }

  function save() {
    stateUnit.saveUnit();
    onClose();
  }

  return (
    <>
      <Button
        size="sm"
        fontSize={fontSize}
        colorScheme="blue"
        onClick={() => { openModal(); }}
        leftIcon={<Icon as={(edit ? RiPencilLine : RiAddLine)} />}
      >
        {label}
      </Button>

      <Modal
        size="3xl"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgColor="gray.800">Dados da Instalação</ModalHeader>
          <ModalBody bgColor="gray.800">
            <HStack spacing="4">
              <Input
                name="name"
                label="Nome"
                onChange={(e) => { stateUnit.unit.name = e.target.value; }}
                value={stateUnit.unit.name}
              />
              <Input
                name="number"
                label="Numero"
                onChange={(e) => { stateUnit.unit.number = e.target.value; }}
                value={stateUnit.unit.number}
              />
            </HStack>
            <HStack mt="4" spacing="4">
              <Input
                name="january"
                label="Janeiro"
                type="number"
                onChange={(e) => { stateUnit.unit.data.january = Number(e.target.value); }}
                value={stateUnit.unit.data.january}
              />
              <Input
                name="february"
                label="Fevereiro"
                onChange={(e) => { stateUnit.unit.data.february = Number(e.target.value); }}
                value={stateUnit.unit.data.february}
              />
              <Input
                name="march"
                label="Março"
                onChange={(e) => { stateUnit.unit.data.march = Number(e.target.value); }}
                value={stateUnit.unit.data.march}
              />
              <Input
                name="april"
                label="Abril"
                onChange={(e) => { stateUnit.unit.data.april = Number(e.target.value); }}
                value={stateUnit.unit.data.april}
              />
              <Input
                name="may"
                label="Maio"
                onChange={(e) => { stateUnit.unit.data.may = Number(e.target.value); }}
                value={stateUnit.unit.data.may}
              />
              <Input
                name="june"
                label="Junho"
                onChange={(e) => { stateUnit.unit.data.june = Number(e.target.value); }}
                value={stateUnit.unit.data.june}
              />
            </HStack>
            <HStack mt="4" spacing="4">
              <Input
                name="july"
                label="Julho"
                onChange={(e) => { stateUnit.unit.data.july = Number(e.target.value); }}
                value={stateUnit.unit.data.july}
              />
              <Input
                name="august"
                label="Agosto"
                onChange={(e) => { stateUnit.unit.data.august = Number(e.target.value); }}
                value={stateUnit.unit.data.august}
              />
              <Input
                name="september"
                label="Setembro"
                onChange={(e) => { stateUnit.unit.data.september = Number(e.target.value); }}
                value={stateUnit.unit.data.september}
              />
              <Input
                name="october"
                label="Outubro"
                onChange={(e) => { stateUnit.unit.data.october = Number(e.target.value); }}
                value={stateUnit.unit.data.october}
              />
              <Input
                name="november"
                label="Novembro"
                onChange={(e) => { stateUnit.unit.data.november = Number(e.target.value); }}
                value={stateUnit.unit.data.november}
              />
              <Input
                name="december"
                label="Dezembro"
                onChange={(e) => { stateUnit.unit.data.december = Number(e.target.value); }}
                value={stateUnit.unit.data.december}
              />
            </HStack>
            <HStack mt="6" spacing="6">
              <Input
                name="last_bill"
                label="Valor da Última Conta"
                onChange={(e) => { stateUnit.unit.last_bill = Number(e.target.value); }}
                value={stateUnit.unit.last_bill}
              />
              <Input
                name="fixed_price"
                label="Custo Fixo"
                onChange={(e) => { stateUnit.unit.fixed_cost = Number(e.target.value); }}
                value={stateUnit.unit.fixed_cost}
              />
              <Input
                name="minimun_charge"
                label="Taxa Mínima"
                onChange={(e) => { stateUnit.unit.minimun_charge = Number(e.target.value); }}
                value={stateUnit.unit.minimun_charge}
              />
            </HStack>
          </ModalBody>

          <ModalFooter bgColor="gray.800">
            <Button
              colorScheme="whiteAlpha"
              mr="4"
              size="sm"
              fontSize="sm"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              mr="4"
              size="sm"
              fontSize="sm"
              onClick={() => { save(); }}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useRef } from 'react'
import { Button, Stack } from '@chakra-ui/react'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { StepViewProps } from '.'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Identificação: React.FC<StepViewProps> = ({
  getInitialData,
  currentStep,
  prevStep,
  nextStep
}) => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit: SubmitHandler<FormData> = useCallback(() => {
    const data = JSON.stringify(formRef.current.getData())
    localStorage.setItem('@ambulatorio:ID', data)
    nextStep()
  }, [])

  useEffect(() => formRef.current.getFieldRef('nome').focus(), [])

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={getInitialData('ID')}
    >
      <Stack spacing={4}>
        <Input name="nome" label="Nome" />
        <Stack direction="row" spacing={4}>
          <Input
            type="date"
            name="dataDeNascimento"
            label="Data de nascimento"
          />
          <SelectInput
            name="sexo"
            label="Sexo"
            placeholder="Selecione..."
            options={['Masculino', 'Feminino']}
          />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Input name="naturalidade" label="Naturalidade" />
          <Input name="procedência" label="Procedência" />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Input name="cor" label="Cor da pele" />
          <Input name="ocupação" label="Ocupação" />
        </Stack>
      </Stack>
      <Stack direction="row" mt={4} justify="flex-end">
        <Button
          leftIcon={<MdKeyboardArrowLeft />}
          variant="solid"
          bg="gray.500"
          color="gray.100"
          fontWeight="normal"
          borderRadius="sm"
          _hover={{ bg: 'blue.400', color: 'blue.500' }}
          onClick={prevStep}
          isDisabled={currentStep <= 1}
        >
          Voltar
        </Button>
        <Button
          rightIcon={<MdKeyboardArrowRight />}
          variant="solid"
          bg="blue.500"
          color="gray.100"
          fontWeight="normal"
          borderRadius="sm"
          _hover={{ bg: 'blue.400', color: 'blue.500' }}
          type="submit"
        >
          Continuar
        </Button>
      </Stack>
    </Form>
  )
}

export default Identificação

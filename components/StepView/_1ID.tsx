// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react'
import { Stack } from '@chakra-ui/react'
import Input from '../Input'
import SelectInput from '../SelectInput'
import { Form } from '@unform/web'
import { FormHandles, SubmitHandler } from '@unform/core'
import { StepViewProps } from '.'
import VoltarButton from '../VoltarButton'
import ContinuarButton from '../ContinuarButton'

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

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      initialData={getInitialData('ID')}
    >
      <Stack spacing={4}>
        <Input name="nome" label="Nome" autoFocus />
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
          <Input name="cor" label="Cor" />
          <Input name="ocupação" label="Ocupação" />
        </Stack>
      </Stack>
      <Stack direction="row" mt={4} justify="flex-end">
        <VoltarButton prevStep={prevStep} currentStep={currentStep} />
        <ContinuarButton />
      </Stack>
    </Form>
  )
}

export default Identificação

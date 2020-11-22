// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Stack } from '@chakra-ui/react'
import Input from '../Input'

const Identificação: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Input name="nome" label="Nome" />
      <Stack direction="row" spacing={4}>
        <Input type="date" name="dataDeNascimento" label="Data de nascimento" />
        <Input
          name="sexo"
          label="Sexo"
          customType="select"
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
  )
}

export default Identificação

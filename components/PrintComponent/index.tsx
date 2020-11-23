// eslint-disable-next-line no-use-before-define
import React, { forwardRef } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FinalData } from '../StepView'

interface PrintComponentProps {
  finalData: FinalData
}

const PrintComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  PrintComponentProps
> = ({ finalData }, ref) => {
  const { ID, QP, HDA, HPP, HF, HS } = finalData

  const getIdade = () => {
    return (
      new Date(
        Date.now() - new Date(ID.dataDeNascimento).getTime()
      ).getFullYear() - 1970
    )
  }
  return (
    <Flex ref={ref} flexDir="column">
      <Text textAlign="justify">
        {ID.nome}, {getIdade()}, {ID.sexo.toLowerCase()}, natural de{' '}
        {ID.naturalidade}, procedente de {ID.procedência}.
      </Text>
    </Flex>
  )
}

export default forwardRef(PrintComponent)

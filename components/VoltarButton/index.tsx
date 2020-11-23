// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Button } from '@chakra-ui/react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { StepViewProps } from '../StepView'

const VoltarButton: React.FC<StepViewProps> = ({ prevStep, currentStep }) => {
  return (
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
  )
}

export default VoltarButton

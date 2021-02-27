// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useState } from 'react'
import { Divider, Flex, Icon, Text } from '@chakra-ui/react'
import { StepperProps } from './'
import { MdCheck } from 'react-icons/md'

interface StepNodeProps extends StepperProps {
  hidden?: boolean
}

const StepNode: React.FC<StepNodeProps> = ({
  currentStep,
  setCurrentStep,
  step,
  sigla,
  hidden
}) => {
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (currentStep >= step) {
      setDone(true)
    } else {
      setDone(false)
    }
  }, [step, currentStep])
  return (
    <>
      <Flex
        hidden={hidden}
        bgColor={done ? 'brand.500' : 'brand.200'}
        h="2px"
        borderRadius="sm"
        flexGrow={1}
      />
      <Flex
        flexDir="column"
        align="center"
        p={2}
        cursor="pointer"
        onClick={() => step < 7 && setCurrentStep(step)}
      >
        <Flex
          borderRadius="full"
          w="25px"
          h="25px"
          bgColor={done ? 'brand.500' : 'brand.200'}
          align="center"
          justify="center"
          color="brand.100"
        >
          {done ? <Icon as={MdCheck} w={4} h={4} /> : step}
        </Flex>
        <Text color={done ? 'brand.500' : 'brand.200'}>{sigla}</Text>
      </Flex>
    </>
  )
}

export default StepNode

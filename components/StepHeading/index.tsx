// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Flex, FlexProps, Heading } from '@chakra-ui/react'

interface StepHeadingProps extends FlexProps {
  text: string
  step: number
}

const StepHeading: React.FC<StepHeadingProps> = ({ text, step, ...rest }) => {
  return (
    <Flex align="center" {...rest}>
      <Flex
        bg="blue.500"
        w="35px"
        h="35px"
        align="center"
        justify="center"
        borderRadius="20px"
        color="gray.100"
      >
        {step}
      </Flex>
      <Heading ml={2} as="h4" size="sm" color="blue.500">
        {text}
      </Heading>
    </Flex>
  )
}

export default StepHeading

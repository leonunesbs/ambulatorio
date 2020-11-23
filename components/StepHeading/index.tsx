// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Flex, FlexProps, Heading, Icon, Stack } from '@chakra-ui/react'
import { MdRefresh } from 'react-icons/md'
import { useRouter } from 'next/router'

interface StepHeadingProps extends FlexProps {
  text: string
  step: number
}

const StepHeading: React.FC<StepHeadingProps> = ({ text, step, ...rest }) => {
  const router = useRouter()
  const handleRestart = () => {
    localStorage.clear()
    router.reload()
  }
  return (
    <Flex align="flex-end" justify="space-between" {...rest}>
      <Stack direction="row" align="center">
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
        <Heading as="h4" size="sm" color="blue.500">
          {text}
        </Heading>
      </Stack>
      <Icon
        cursor="pointer"
        as={MdRefresh}
        color="blue.500"
        w={6}
        h={6}
        onClick={handleRestart}
      />
    </Flex>
  )
}

export default StepHeading

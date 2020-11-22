// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import StepHeading from '../components/StepHeading'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Flex
          bg="gray.100"
          flexDir="column"
          minH="100vh"
          py={10}
          justify="center"
          px={[4, 40]}
        >
          <Flex flexDir="column" align={['center', 'flex-start']}>
            <Heading as="h1" color="blue.500">
              Ambulatório
            </Heading>
            <Heading as="h2" color="gray.500" size="sm" fontWeight="light">
              Prontuário do paciente
            </Heading>
          </Flex>

          <Flex flexDir="column" mt="50px">
            <StepHeading text="Identificação" step={1} mb={4} />

            <Flex flexDir="column" bg="blue.400" mb={4} borderRadius="md" p={4}>
              Teste <br />
            </Flex>
          </Flex>
          <Stack direction="row" alignSelf="flex-end">
            <Button
              leftIcon={<MdKeyboardArrowLeft />}
              variant="solid"
              bg="gray.500"
              color="gray.100"
              fontWeight="normal"
              borderRadius="sm"
              _hover={{ bg: 'blue.400', color: 'blue.500' }}
              isDisabled
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
            >
              Continuar
            </Button>
          </Stack>
        </Flex>
      </main>
    </div>
  )
}

export default Home

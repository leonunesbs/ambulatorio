// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Flex, Heading, Link } from '@chakra-ui/react'
import StepView from '../components/StepView'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Ambulatório</title>
        <meta
          name="description"
          content="Esquema de prontuário do paciente para consultas ambulatoriais."
        />
      </Head>
      <main>
        <Flex
          bg="gray.100"
          flexDir="column"
          minH="100vh"
          py={[4, 10]}
          px={[4, 40]}
        >
          <Flex flexDir="column" align={['center', 'flex-start']}>
            <NextLink as="/" href="/">
              <Link breakout="true" style={{ textDecoration: 'none' }}>
                <Heading
                  as="h1"
                  color="blue.500"
                  borderWidth={1}
                  borderRadius="sm"
                  border="solid"
                  p={1}
                  onClick={() => {
                    localStorage.clear()
                    router.reload()
                  }}
                >
                  Ambulatório
                </Heading>
              </Link>
            </NextLink>
            <Heading as="h2" color="gray.500" size="sm" fontWeight="light">
              Prontuário do paciente
            </Heading>
          </Flex>

          <Flex flexDir="column" mt="60px">
            <StepView />
          </Flex>
        </Flex>
      </main>
    </div>
  )
}

export default Home

/* eslint-disable no-use-before-define */
import React from 'react'

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps
} from 'next/document'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Ambulatório</title>
          <meta
            name="description"
            content="Esquema de prontuário do paciente para consultas ambulatoriais."
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

import Head from 'next/head'

import ContactsModule from '../modules/contacts'

import PageWrapper from '../components/page-wrapper'

export default function About() {
  return (
    <PageWrapper key="contacts">
      <Head>
        <title>Контакты</title>
      </Head>

      <ContactsModule />
    </PageWrapper>
  )
}

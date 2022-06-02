import Head from 'next/head'

import RegistrationModule from '../modules/registration'

import PageWrapper from '../components/page-wrapper'

export default function Registration() {
  return (
    <PageWrapper itemKey="registration">
      <Head>
        <title>Регистрация</title>
      </Head>
      <RegistrationModule />
    </PageWrapper>
  )
}

import Head from 'next/head'

import SponsorModule from '../modules/sponsor'

import PageWrapper from '../components/page-wrapper'

export default function Sponsor() {
  return (
    <PageWrapper key="sponsor">
      <Head>
        <title>Стать спонсором</title>
      </Head>
      <SponsorModule />
    </PageWrapper>
  )
}

import Head from 'next/head'

import SponsorModule from '../modules/sponsor'

import PageWrapper from '../components/page-wrapper'

export default function Sponsor() {
  return (
    <PageWrapper itemKey="sponsor">
      <Head>
        <title>Стать спонсором</title>
      </Head>
      <SponsorModule />
    </PageWrapper>
  )
}

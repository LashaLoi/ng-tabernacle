import { useCallback } from 'react'

import Header from '../../components/header'

import { ContactNotification } from './notification'

import { MapSection } from './map-section'
import { ContactSection } from './contact-section'
import { ContactUsSection } from './contact-us-section'

import { useTimeoutShow } from '../../hooks/useTimeoutShow'

export default function ContactsModule() {
  const [showNotification, setShowNotification] = useTimeoutShow(4000)

  const handleSubmit = useCallback(() => {
    setShowNotification(true)
  }, [setShowNotification])

  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />

      <MapSection onSubmit={handleSubmit} />

      <ContactUsSection />

      <ContactSection />

      <ContactNotification show={showNotification} />
    </div>
  )
}

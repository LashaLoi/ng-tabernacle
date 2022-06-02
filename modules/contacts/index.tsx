import { useCallback } from 'react'

import Header from '../../components/header'

import { ContactNotification } from './notification'

import { useTimeoutShow } from '../../hooks/useTimeoutShow'
import { MapSection } from './map-section'
import { ContactSection } from './ contact-section'

export default function ContactsModule() {
  const [showNotification, setShowNotification] = useTimeoutShow(4000)

  const handleSubmit = useCallback(() => {
    setShowNotification(true)
  }, [setShowNotification])

  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />

      <MapSection onSubmit={handleSubmit} />

      <ContactSection />

      <ContactNotification show={showNotification} />
    </div>
  )
}

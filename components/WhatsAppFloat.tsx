'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { getWhatsAppLink, getUserData } from '@/lib/utils'
import { trackWhatsAppClick, updateLeadStatus } from '@/lib/analytics'
import { updateLeadStatus as updateSheet } from '@/lib/googleSheets'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      setTimeout(() => setShowTooltip(true), 1000)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = async () => {
    const userData = getUserData()
    trackWhatsAppClick('floating_button')

    if (userData?.idKonsultasi) {
      await updateSheet(userData.idKonsultasi, 'Hot Lead')
    }

    const link = getWhatsAppLink(userData?.nama, userData?.idKonsultasi)
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && !dismissed && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="relative bg-white rounded-2xl shadow-lg px-4 py-3 max-w-[200px] text-right"
              >
                <button
                  onClick={() => setDismissed(true)}
                  className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <X size={10} className="text-gray-600" />
                </button>
                <p
                  className="text-xs text-[#1B3A2E] font-dm leading-snug"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Ada pertanyaan? Chat kami sekarang! 💬
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl relative"
            aria-label="Chat WhatsApp"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
            <MessageCircle fill="white" size={26} className="text-white relative z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

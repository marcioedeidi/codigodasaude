import { useState, useCallback } from 'react'

interface UseNotificationProps {
  duration?: number
}

export function useNotification({ duration = 3000 }: UseNotificationProps = {}) {
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info'
    message: string
  } | null>(null)

  const showNotification = useCallback(
    (message: string, type: 'success' | 'error' | 'info' = 'info') => {
      setNotification({ message, type })
      setTimeout(() => setNotification(null), duration)
    },
    [duration]
  )

  const clearNotification = useCallback(() => {
    setNotification(null)
  }, [])

  return { notification, showNotification, clearNotification }
}

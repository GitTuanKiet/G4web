import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const useQueryParam = (key) => {
  const location = useLocation()

  return useMemo(
    () => new URLSearchParams(location.search).get(key),
    [key, location.search]
  )
}

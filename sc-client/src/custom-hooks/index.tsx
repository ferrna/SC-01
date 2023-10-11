import React from 'react'

export function useQuery(location: string) {
  return React.useMemo(() => new URLSearchParams(location), [location])
}

import React from 'react'

export const dateFormatforInput = (date: Date) => {
  return (
    date.getFullYear().toString().padStart(4, '0') +
    '-' +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    date.getDate().toString().padStart(2, '0')
  )
}
export function useQuery(location: string) {
  return React.useMemo(() => new URLSearchParams(location), [location])
}

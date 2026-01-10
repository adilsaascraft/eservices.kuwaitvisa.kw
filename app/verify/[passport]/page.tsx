'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { visaDataMap } from '@/lib/mock-data'
import { VerifyResult } from '@/components/verify-result'

export default function VerifyPage() {
  const pathname = usePathname()

  const visaData = useMemo(() => {
    if (!pathname) return null

    // pathname example: /verify/V7553311
    const passport = pathname.split('/').pop()?.trim()?.toUpperCase()

    if (!passport) return null

    return visaDataMap[passport] ?? null
  }, [pathname])

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      {visaData ? (
        <VerifyResult data={visaData} />
      ) : (
        <p className="text-center text-lg font-medium text-red-600">
          No Passport or Visa Found
        </p>
      )}
    </div>
  )
}

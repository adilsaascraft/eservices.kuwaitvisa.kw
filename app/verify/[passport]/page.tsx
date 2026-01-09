'use client'

import { useParams } from 'next/navigation'
import { visaDataMap } from '@/lib/mock-data'
import { VerifyResult } from '@/components/verify-result'

export default function VerifyPage() {
  const params = useParams()
  const passportParam = params?.passport as string | undefined

  const normalizedPassport = passportParam?.trim().toUpperCase()

  const visaData = normalizedPassport
    ? visaDataMap[normalizedPassport]
    : undefined

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

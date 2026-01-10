'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { visaDataMap } from '@/lib/mock-data'
import { VerifyResult } from '@/components/verify-result'

export default function VerifyPage() {
  const params = useParams()
  const [visaData, setVisaData] = useState<any>(null)

  useEffect(() => {
    const passport = (params?.passport as string | undefined)
      ?.trim()
      ?.toUpperCase()

    if (passport && visaDataMap[passport]) {
      setVisaData(visaDataMap[passport])
    } else {
      setVisaData(null)
    }
  }, [params?.passport])

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

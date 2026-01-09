'use client'

import { useParams } from 'next/navigation'
import { VALID_PASSPORT, visaData } from '@/lib/mock-data'
import { VerifyResult } from '@/components/verify-result'

export default function VerifyPage() {
  const params = useParams()
  const passport = params?.passport as string | undefined

  const entered = passport?.trim().toUpperCase()
  const valid = VALID_PASSPORT.trim().toUpperCase()

  const isValid = entered === valid

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      {isValid ? (
        <VerifyResult data={visaData} />
      ) : (
        <p className="text-center text-lg font-medium text-red-600">
          No Passport or Visa Found
        </p>
      )}
    </div>
  )
}

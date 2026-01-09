import { VerifyForm } from '@/components/verify-form'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12 text-center">
      <h1 className="mb-6 text-3xl font-semibold">Verify Your Visa</h1>
      <VerifyForm />
    </div>
  )
}

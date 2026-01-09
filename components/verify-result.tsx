import { CheckCircle2 } from 'lucide-react'

function Field({
  label,
  value,
  rtl = false,
}: {
  label: string
  value: string
  rtl?: boolean
}) {
  return (
    <div className={`rounded-lg border p-4 ${rtl ? 'rtl' : 'ltr'}`}>
      <p className="font-semibold">{label}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  )
}

export function VerifyResult({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      {/* Status */}
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
        <p className="mt-2 text-green-600 rtl">وثيقة صالحة</p>
        <p className="font-medium text-green-600 ltr">Valid document</p>
      </div>

      {/* Fields */}
      <Field label="Certificate Type" value={data.certificateType} />
      <Field label="Visa Status" value={data.visaStatus} />
      <Field label="Visa Type" value={data.visaType} />
      <Field label="Visa Number" value={data.visaNumber} />
      <Field label="Nationality" value={data.nationality} />
      <Field label="Passport Number" value={data.passportNumber} />

      {/* Arabic RTL field */}
      <Field label="الاسم العربي" value={data.arabicName} rtl />

      {/* English LTR field */}
      <Field label="Latin Name" value={data.latinName} />

      <Field label="Company Name" value={data.companyName} />
      <Field label="Expiry Date" value={data.expiryDate} />
    </div>
  )
}

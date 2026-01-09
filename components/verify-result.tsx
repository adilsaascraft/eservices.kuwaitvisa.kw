import { CheckCircle2 } from 'lucide-react'

type LocalizedText = {
  en: string
  ar: string
}

function Field({
  labelEn,
  labelAr,
  value,
}: {
  labelEn: string
  labelAr?: string
  value: string | LocalizedText
}) {
  const isLocalized = typeof value === 'object' && value !== null

  return (
    <div className="rounded-lg border p-4 text-center">
      {/* Arabic label (optional) */}
      {labelAr && <p className="font-semibold text-gray-900">{labelAr}</p>}

      {/* English label */}
      <p className="font-semibold text-gray-900">{labelEn}</p>

      {/* Value */}
      {isLocalized ? (
        <>
          <p className="mt-1 text-gray-600">{(value as LocalizedText).ar}</p>
          <p className="text-gray-600">{(value as LocalizedText).en}</p>
        </>
      ) : (
        <p className="mt-1 text-gray-600">{value}</p>
      )}
    </div>
  )
}

export function VerifyResult({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      {/* Status */}
      <div className="text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
        <p className="mt-2 font-medium text-green-600">وثيقة صالحة</p>
        <p className="text-green-600">Valid document</p>
      </div>

      {/* Fields */}
      <Field
        labelEn="Certificate Type"
        labelAr="نوع الشهادة"
        value={data.certificateType}
      />

      <Field
        labelEn="Visa Status"
        labelAr="حالة التأشيرة"
        value={data.visaStatus}
      />

      <Field labelEn="Visa Type" labelAr="نوع التأشيرة" value={data.visaType} />

      <Field labelEn="Visa Number" value={data.visaNumber} />

      <Field labelEn="Nationality" labelAr="الجنسية" value={data.nationality} />

      <Field
        labelEn="Passport Number"
        labelAr="رقم الجواز"
        value={data.passportNumber}
      />

      <Field
        labelEn="Arabic Name"
        labelAr="الاسم العربي"
        value={data.arabicName}
      />

      <Field labelEn="Latin Name" value={data.latinName} />

      <Field
        labelEn="Company Name"
        labelAr="اسم الشركة"
        value={data.companyName}
      />

      <Field
        labelEn="Expiry Date"
        labelAr="تاريخ الانتهاء"
        value={data.expiryDate}
      />
    </div>
  )
}

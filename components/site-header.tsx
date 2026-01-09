import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="border-b bg-white">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="text-sm text-gray-700">
            <p className="font-bold">State of Kuwait</p>
            <p className="font-bold">Ministry of Interior</p>
          </div>

          <Image
            src="/police.png"
            alt="Kuwait Police"
            width={150}
            height={100}
          />

          <div className="text-sm text-gray-700">
            <p className="font-bold">دولة الكويت</p>
            <p className="font-bold"> وزارة الداخلية</p>
          </div>
        </div>
        <div className="w-full bg-gray-100 border-b">
          <div className="mx-auto max-w-5xl px-4 py-4 text-center">
            {/* Arabic (Top) */}
            <p className="rtl text-sm text-sky-700 font-medium">
              الموقع الرسمي للتحقق من الوثائق والشهادات الصادرة من وزارة
              الداخلية
            </p>

            {/* English (Bottom) */}
            <p className="ltr mt-2 text-sm text-sky-700">
              The official website for verifying documents and certificates
              issued by the Ministry of Interior.
            </p>

            {/* Divider below English */}
            <div className="w-full  mt-3 h-px w-32 bg-gray-300" />
          </div>
        </div>
      </div>
    </header>
  )
}

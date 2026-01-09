import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-sky-700">
        <p>
          All rights reserved to the Ministry of Interior – State of Kuwait ©
          2023
        </p>
        <p>
          All rights reserved to the Ministry of Interior – State of Kuwait ©
          2023
        </p>

        <div className="mt-4 flex justify-center gap-6 text-gray-500">
          <Instagram />
          <Twitter />
          <Facebook />
          <Youtube />
        </div>
      </div>
    </footer>
  )
}

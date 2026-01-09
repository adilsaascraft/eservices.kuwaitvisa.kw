'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function VerifyForm() {
  const router = useRouter()
  const [value, setValue] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!value) return
    router.push(`/verify/${value.toLowerCase()}`)
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <Button type="submit" variant="secondary">
        Search
      </Button>
      <Input
        placeholder="Enter passport number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}

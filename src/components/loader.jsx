

"use client"

import { useEffect, useState } from "react"

export function HexLoader() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 flex h-screen items-center justify-center bg-light dark:bg-dark z-50 overflow-hidden ">
      <div className="flex flex-col items-center gap-8">
        <div className="hex-grid">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="hex" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wider text-dark dark:text-light mb-2">YOUR WEB HUB</h1>
          <p className="text-bllue tracking-widest text-sm">WHERE IDEAS BECOMES WEBSITE</p>
        </div>
      </div>
    </div>
  )
}
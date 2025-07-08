"use client"

import { Users, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export default function LiveDonorCounter() {
  const [donorCount, setDonorCount] = useState(127)

  useEffect(() => {
    const interval = setInterval(() => {
      setDonorCount((prev) => prev + Math.floor(Math.random() * 3) - 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-emerald-800 font-medium">Live Donors</span>
        </div>
        <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
          {donorCount} active in Patna
        </div>
      </div>

      <div className="mt-3 flex items-center gap-4 text-sm text-emerald-700">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>Within 10km</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>Available now</span>
        </div>
      </div>
    </div>
  )
}

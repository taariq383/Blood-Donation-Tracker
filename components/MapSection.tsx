"use client"

import { useState, useEffect } from "react"
import { Navigation, Layers, Plus, Minus } from "lucide-react"

interface MapSectionProps {
  selectedBloodType: string
}

export default function MapSection({ selectedBloodType }: MapSectionProps) {
  const [donorCount, setDonorCount] = useState(23)
  const [zoomLevel, setZoomLevel] = useState(12)

  useEffect(() => {
    // Simulate real-time donor updates
    const interval = setInterval(() => {
      setDonorCount((prev) => prev + Math.floor(Math.random() * 3) - 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const donors = [
    { id: 1, x: 30, y: 40, type: "available", eta: "8min" },
    { id: 2, x: 60, y: 25, type: "urgent", eta: "12min" },
    { id: 3, x: 45, y: 70, type: "available", eta: "15min" },
    { id: 4, x: 75, y: 55, type: "available", eta: "6min" },
    { id: 5, x: 20, y: 80, type: "urgent", eta: "20min" },
  ]

  return (
    <div className="h-64 lg:h-full bg-white">
      {/* Map Header - Desktop Only */}
      <div className="hidden lg:block p-6 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Live Donor Map</h2>
            <p className="text-sm text-slate-500">Real-time availability for {selectedBloodType}</p>
          </div>
          <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
            {donorCount} active nearby
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-full bg-gradient-to-br from-blue-50 to-slate-100">
        {/* Mock Map Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-slate-300"></div>
            ))}
          </div>
        </div>

        {/* User Location */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute w-8 h-8 bg-blue-600/20 rounded-full -top-2 -left-2 animate-ping"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
              You are here
            </div>
          </div>
        </div>

        {/* Donor Markers */}
        {donors.map((donor) => (
          <div
            key={donor.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: `${donor.x}%`, top: `${donor.y}%` }}
          >
            <div className="relative group cursor-pointer">
              <div
                className={`w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse ${
                  donor.type === "available" ? "bg-emerald-500" : "bg-red-500"
                }`}
              ></div>
              {/* ETA Badge */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {donor.eta}
              </div>
            </div>
          </div>
        ))}

        {/* Map Controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <button
            onClick={() => setZoomLevel((prev) => Math.min(prev + 1, 18))}
            className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Plus className="w-4 h-4 text-slate-600" />
          </button>
          <button
            onClick={() => setZoomLevel((prev) => Math.max(prev - 1, 8))}
            className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Minus className="w-4 h-4 text-slate-600" />
          </button>
          <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Navigation className="w-4 h-4 text-slate-600" />
          </button>
          <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Layers className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 text-xs shadow-md">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-slate-700">Available Donors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-slate-700">Urgent Requests</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-slate-700">Your Location</span>
            </div>
          </div>
        </div>

        {/* Zoom Level Indicator */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-slate-600">
          Zoom: {zoomLevel}
        </div>
      </div>
    </div>
  )
}

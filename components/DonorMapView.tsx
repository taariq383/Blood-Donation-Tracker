"use client"

import { useState } from "react"
import { ArrowLeft, Navigation, Layers, Plus, Minus, Filter, Phone, MessageCircle, Star } from "lucide-react"
import Link from "next/link"
import DonorProfileModal from "./DonorProfileModal"

const donors = [
  {
    id: 1,
    name: "Dr. Amit Kumar",
    bloodType: "B+",
    distance: "1.2 km",
    eta: "8 min",
    rating: 4.9,
    verified: true,
    lastDonation: "2 months ago",
    donationCount: 12,
    x: 35,
    y: 45,
    available: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    bloodType: "B+",
    distance: "2.1 km",
    eta: "12 min",
    rating: 4.8,
    verified: true,
    lastDonation: "3 months ago",
    donationCount: 8,
    x: 65,
    y: 30,
    available: true,
  },
  {
    id: 3,
    name: "Rajesh Singh",
    bloodType: "B+",
    distance: "3.5 km",
    eta: "18 min",
    rating: 4.7,
    verified: false,
    lastDonation: "1 month ago",
    donationCount: 5,
    x: 50,
    y: 75,
    available: false,
  },
]

export default function DonorMapView() {
  const [selectedDonor, setSelectedDonor] = useState<(typeof donors)[0] | null>(null)
  const [zoomLevel, setZoomLevel] = useState(12)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white dark:bg-slate-800 shadow-sm p-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <Link href="/emergency" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
            <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </Link>
          <div>
            <h1 className="font-bold text-slate-800 dark:text-white">Donor Map</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">B+ Blood Group</p>
          </div>
        </div>
      </header>

      {/* Desktop Layout */}
      <div className="lg:flex lg:h-screen">
        {/* Map Section - Mobile: Full width, Desktop: 70% */}
        <div className="lg:w-[70%] h-64 lg:h-full">
          {/* Desktop Map Header */}
          <div className="hidden lg:block bg-white dark:bg-slate-800 p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Live Donor Map</h1>
                <p className="text-slate-600 dark:text-slate-400">Real-time B+ donors in your area</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors">
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Filters</span>
                </button>
                <div className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm font-semibold">
                  {donors.filter((d) => d.available).length} available
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative h-full bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
            {/* Mock Map Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-16 grid-rows-16 h-full">
                {Array.from({ length: 256 }).map((_, i) => (
                  <div key={i} className="border border-slate-400"></div>
                ))}
              </div>
            </div>

            {/* User Location */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                <div className="w-5 h-5 bg-blue-600 rounded-full border-3 border-white shadow-lg"></div>
                <div className="absolute w-10 h-10 bg-blue-600/20 rounded-full -top-2.5 -left-2.5 animate-ping"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                  You
                </div>
              </div>
            </div>

            {/* Donor Markers */}
            {donors.map((donor) => (
              <div
                key={donor.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                style={{ left: `${donor.x}%`, top: `${donor.y}%` }}
              >
                <button onClick={() => setSelectedDonor(donor)} className="relative group cursor-pointer">
                  <div
                    className={`w-5 h-5 rounded-full border-3 border-white shadow-lg transition-all duration-200 hover:scale-125 ${
                      donor.available ? "bg-emerald-500 animate-pulse" : "bg-red-500"
                    }`}
                  ></div>
                  {/* ETA Badge */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {donor.eta} • {donor.name}
                  </div>
                </button>
              </div>
            ))}

            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <button
                onClick={() => setZoomLevel((prev) => Math.min(prev + 1, 18))}
                className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Plus className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
              <button
                onClick={() => setZoomLevel((prev) => Math.max(prev - 1, 8))}
                className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Minus className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
              <button className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Navigation className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
              <button className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Layers className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg p-4 text-sm shadow-md">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Available Donors</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Busy/Unavailable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700 dark:text-slate-300">Your Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donor List Panel - Mobile: Full width, Desktop: 30% */}
        <div className="lg:w-[30%] lg:h-full lg:overflow-y-auto bg-white dark:bg-slate-800 border-l border-slate-200 dark:border-slate-700">
          <div className="p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Nearby Donors</h2>
              <span className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 text-xs px-2 py-1 rounded-full">
                {donors.filter((d) => d.available).length} available
              </span>
            </div>

            <div className="space-y-3">
              {donors.map((donor) => (
                <div
                  key={donor.id}
                  className={`border rounded-lg p-4 transition-all duration-200 hover:shadow-md cursor-pointer ${
                    donor.available
                      ? "border-slate-200 dark:border-slate-600 hover:border-emerald-300 dark:hover:border-emerald-600"
                      : "border-slate-200 dark:border-slate-600 opacity-60"
                  }`}
                  onClick={() => setSelectedDonor(donor)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {donor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        {donor.available && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 dark:text-white text-sm">{donor.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          {donor.verified && (
                            <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                              ✅ Verified
                            </span>
                          )}
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-400 fill-current" />
                            <span className="text-xs text-slate-600 dark:text-slate-400">{donor.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">{donor.eta}</div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{donor.distance}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Last: {donor.lastDonation}</p>
                    <div className="flex gap-2">
                      <button
                        className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                        disabled={!donor.available}
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        disabled={!donor.available}
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Donor Profile Modal */}
      {selectedDonor && <DonorProfileModal donor={selectedDonor} onClose={() => setSelectedDonor(null)} />}
    </div>
  )
}

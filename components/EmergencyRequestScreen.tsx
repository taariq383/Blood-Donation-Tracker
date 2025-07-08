"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, AlertTriangle, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function EmergencyRequestScreen() {
  const [isPressed, setIsPressed] = useState(false)
  const [donorCount, setDonorCount] = useState(127)
  const [nearbyDonors, setNearbyDonors] = useState(23)

  useEffect(() => {
    const interval = setInterval(() => {
      setDonorCount((prev) => prev + Math.floor(Math.random() * 3) - 1)
      setNearbyDonors((prev) => Math.max(15, prev + Math.floor(Math.random() * 3) - 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSOSPress = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm p-4 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between max-w-md mx-auto lg:max-w-none">
          <div className="flex items-center gap-3">
            <Link href="/" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                B+
              </div>
              <div>
                <h1 className="font-bold text-slate-800 dark:text-white">Emergency Request</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Patna, Bihar</p>
              </div>
            </div>
          </div>
          <Link
            href="/map"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            View Map
          </Link>
        </div>
      </header>

      <div className="max-w-md mx-auto lg:max-w-none p-4 lg:p-6">
        {/* Emergency Alert */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200 mb-2">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-semibold">Critical Blood Shortage</span>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            B+ blood urgently needed in your area. Multiple hospitals reporting low inventory.
          </p>
        </div>

        {/* Main SOS Button */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 lg:p-8 shadow-sm border border-slate-200 dark:border-slate-700 mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Emergency Blood Request</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">Instantly alert verified donors in your area</p>

          <button
            onClick={handleSOSPress}
            disabled={isPressed}
            className={`w-full bg-red-600 hover:bg-red-700 text-white text-xl lg:text-2xl font-bold py-6 lg:py-8 px-8 rounded-full shadow-lg transition-all duration-200 ${
              isPressed ? "bg-red-700 scale-95" : "hover:scale-105 animate-pulse"
            } disabled:opacity-70`}
          >
            {isPressed ? (
              <div className="flex items-center justify-center gap-3">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Alerting Donors...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <AlertTriangle className="w-7 h-7" />
                Request Blood NOW
              </div>
            )}
          </button>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">
            Alerts {nearbyDonors}+ donors within 5km radius
          </p>

          {isPressed && (
            <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
              <p className="text-emerald-800 dark:text-emerald-200 font-medium">
                ✅ Emergency alert sent to {nearbyDonors} nearby donors
              </p>
              <p className="text-emerald-700 dark:text-emerald-300 text-sm mt-1">
                You should receive calls within 5-10 minutes
              </p>
            </div>
          )}
        </div>

        {/* Live Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-800 dark:text-emerald-200 font-medium text-sm">Active Donors</span>
            </div>
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{donorCount}</p>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm">in Delhi NCR</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-800 dark:text-blue-200 font-medium text-sm">Nearby</span>
            </div>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{nearbyDonors}</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">within 5km</p>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-amber-800 dark:text-amber-200 font-medium text-sm">Avg Response</span>
            </div>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">8min</p>
            <p className="text-amber-700 dark:text-amber-300 text-sm">typical time</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 lg:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="font-bold text-slate-800 dark:text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/map"
              className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">View Map</span>
            </Link>
            <button className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors">
              <Users className="w-5 h-5" />
              <span className="font-medium">Call Helpline</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

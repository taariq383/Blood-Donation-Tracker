"use client"

import { AlertTriangle } from "lucide-react"
import { useState } from "react"

export default function SOSButton() {
  const [isPressed, setIsPressed] = useState(false)

  const handleSOSPress = () => {
    setIsPressed(true)
    // Simulate SOS action
    setTimeout(() => setIsPressed(false), 2000)
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
      <h2 className="text-xl font-bold text-slate-700 mb-2">Emergency Blood Request</h2>
      <p className="text-slate-500 text-sm mb-6">Instantly alert nearby donors</p>

      <button
        onClick={handleSOSPress}
        disabled={isPressed}
        className={`w-full bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transform transition-all duration-200 ${
          isPressed ? "bg-red-700 scale-95" : ""
        } disabled:opacity-70`}
      >
        {isPressed ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Alerting Donors...
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            SOS - Need Blood Now
          </div>
        )}
      </button>

      <p className="text-slate-500 text-sm mt-3">Alerts donors within 5km radius</p>

      {isPressed && (
        <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
          <p className="text-emerald-800 font-medium text-sm">✅ Alert sent to 23 nearby donors</p>
        </div>
      )}
    </div>
  )
}

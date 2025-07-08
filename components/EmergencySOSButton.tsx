"use client"

import { useState } from "react"
import { AlertTriangle, Phone } from "lucide-react"

export default function EmergencySOSButton() {
  const [isEmergency, setIsEmergency] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const handleEmergencyPress = () => {
    setIsPressed(true)
    setIsEmergency(true)
    // Simulate emergency alert
    setTimeout(() => {
      setIsPressed(false)
    }, 3000)
  }

  return (
    <>
      {/* Emergency SOS Button - Fixed Position */}
      <button
        onClick={handleEmergencyPress}
        disabled={isPressed}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 ${
          isEmergency ? "bg-red-700 animate-pulse" : "bg-red-600 hover:bg-red-700 hover:scale-110"
        } ${isPressed ? "scale-95" : ""} disabled:opacity-70`}
      >
        {isPressed ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <AlertTriangle className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Emergency Overlay */}
      {isEmergency && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Emergency Alert Sent!</h2>
            <p className="text-slate-600 mb-4">
              We've notified 23 nearby B+ donors. You should receive calls within 5-10 minutes.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <Phone className="w-5 h-5" />
                Call Emergency Helpline
              </button>
              <button
                onClick={() => setIsEmergency(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

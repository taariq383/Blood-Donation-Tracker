"use client"

import { useState } from "react"
import { ChevronDown, AlertTriangle } from "lucide-react"

interface BloodTypeSelectorProps {
  selectedBloodType: string
  onBloodTypeChange: (bloodType: string) => void
}

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

export default function BloodTypeSelector({ selectedBloodType, onBloodTypeChange }: BloodTypeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-4">
      {/* Emergency Alert */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-center gap-2 text-amber-800">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-medium">Critical Blood Shortage Alert</span>
        </div>
        <p className="text-sm text-amber-700 mt-1">B+ blood type urgently needed in your area</p>
      </div>

      {/* Blood Type Selector */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Emergency Request for Blood Type</label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border-2 border-red-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
          >
            <span className="font-bold text-red-600 text-xl">{selectedBloodType}</span>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-30">
              <div className="grid grid-cols-4 gap-1 p-2">
                {bloodTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      onBloodTypeChange(type)
                      setIsOpen(false)
                    }}
                    className={`p-3 text-center rounded-lg font-semibold transition-colors ${
                      selectedBloodType === type
                        ? "bg-red-600 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-emerald-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-emerald-600">23</p>
          <p className="text-xs text-emerald-700">Available Now</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-blue-600">8min</p>
          <p className="text-xs text-blue-700">Avg Response</p>
        </div>
        <div className="bg-amber-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-amber-600">2.1km</p>
          <p className="text-xs text-amber-700">Nearest Donor</p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

export default function BloodGroupSelector() {
  const [selectedGroup, setSelectedGroup] = useState("O+")
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <label className="block text-sm font-medium text-slate-700 mb-2">Looking for Blood Group</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
        >
          <span className="font-semibold text-red-600 text-lg">{selectedGroup}</span>
          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
            {bloodGroups.map((group) => (
              <button
                key={group}
                onClick={() => {
                  setSelectedGroup(group)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg ${
                  selectedGroup === group ? "bg-red-50 text-red-600 font-semibold" : "text-slate-700"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

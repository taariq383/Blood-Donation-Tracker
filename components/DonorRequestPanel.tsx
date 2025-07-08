"use client"

import { useState } from "react"
import { Phone, MessageCircle, Star, Shield } from "lucide-react"

interface DonorRequestPanelProps {
  selectedBloodType: string
}

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
    badge: "Super Donor",
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
    badge: "Verified",
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
    badge: "New",
    available: false,
  },
  {
    id: 4,
    name: "Dr. Sarah Wilson",
    bloodType: "B+",
    distance: "1.8 km",
    eta: "10 min",
    rating: 4.9,
    verified: true,
    lastDonation: "1 month ago",
    donationCount: 15,
    badge: "Super Donor",
    available: true,
  },
]

export default function DonorRequestPanel({ selectedBloodType }: DonorRequestPanelProps) {
  const [selectedDonors, setSelectedDonors] = useState<number[]>([])

  const toggleDonorSelection = (donorId: number) => {
    setSelectedDonors((prev) => (prev.includes(donorId) ? prev.filter((id) => id !== donorId) : [...prev, donorId]))
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Super Donor":
        return "bg-purple-100 text-purple-800"
      case "Verified":
        return "bg-blue-100 text-blue-800"
      case "New":
        return "bg-emerald-100 text-emerald-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header with Bulk Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Available Donors</h2>
          <p className="text-sm text-slate-500">
            {selectedBloodType} blood type • {donors.length} found
          </p>
        </div>
        {selectedDonors.length > 0 && (
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Alert {selectedDonors.length} Donors
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {["All", "Available Now", "Verified Only", "Nearby"].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === "All" ? "bg-red-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Donor Cards */}
      <div className="space-y-4">
        {donors.map((donor) => (
          <div
            key={donor.id}
            className={`bg-white rounded-lg shadow-sm border-2 transition-all duration-200 hover:shadow-md ${
              selectedDonors.includes(donor.id) ? "border-red-200 bg-red-50" : "border-slate-100 hover:border-slate-200"
            } ${!donor.available ? "opacity-60" : ""}`}
          >
            <div className="p-4 lg:p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {donor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {donor.available && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-800">{donor.name}</h3>
                      {donor.verified && <Shield className="w-4 h-4 text-blue-600" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getBadgeColor(donor.badge)}`}>
                        {donor.badge}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="text-sm text-slate-600">{donor.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium mb-1">
                    {donor.eta}
                  </div>
                  <p className="text-xs text-slate-500">{donor.distance}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <p className="text-lg font-bold text-slate-800">{donor.donationCount}</p>
                  <p className="text-xs text-slate-500">Donations</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-800">{donor.bloodType}</p>
                  <p className="text-xs text-slate-500">Blood Type</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-800">{donor.lastDonation.split(" ")[0]}</p>
                  <p className="text-xs text-slate-500">Last Donated</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={() => toggleDonorSelection(donor.id)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    selectedDonors.includes(donor.id)
                      ? "bg-red-600 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white"
                  } ${!donor.available ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={!donor.available}
                >
                  {selectedDonors.includes(donor.id) ? "Selected" : "Request Blood"}
                </button>
                <button className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors">
          Load More Donors
        </button>
      </div>
    </div>
  )
}

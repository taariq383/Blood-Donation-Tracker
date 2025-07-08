"use client"

import { X, Phone, MessageCircle, Star, Shield, MapPin, Clock, Heart } from "lucide-react"

interface DonorProfileModalProps {
  donor: {
    id: number
    name: string
    bloodType: string
    distance: string
    eta: string
    rating: number
    verified: boolean
    lastDonation: string
    donationCount: number
    available: boolean
  }
  onClose: () => void
}

export default function DonorProfileModal({ donor, onClose }: DonorProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Donor Profile</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Profile Section */}
          <div className="flex items-start gap-4 mb-6">
            {/* Left: Profile Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {donor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                {donor.available && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-3 border-white rounded-full"></div>
                )}
              </div>

              {/* Verification Badges */}
              <div className="mt-3 space-y-2">
                {donor.verified && (
                  <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    <Shield className="w-4 h-4" />
                    <span>✅ Govt-ID Verified</span>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Super Donor</span>
                </div>
              </div>
            </div>

            {/* Right: Profile Info */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{donor.name}</h3>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(donor.rating) ? "text-amber-400 fill-current" : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{donor.rating}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">(127 reviews)</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">{donor.bloodType}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Blood Type</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600">{donor.donationCount}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Donations</p>
                </div>
              </div>

              {/* Last Donation */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                <strong>Last donated:</strong> {donor.lastDonation}
              </p>

              {/* Location Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>{donor.distance} away</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>{donor.eta} ETA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-800 dark:text-white">Contact Options</h4>

            <div className="grid grid-cols-2 gap-3">
              <button
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                  donor.available
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                }`}
                disabled={!donor.available}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>

              <button
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                  donor.available
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-400 cursor-not-allowed"
                }`}
                disabled={!donor.available}
              >
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </button>
            </div>

            {donor.available ? (
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-bold transition-colors">
                Send Emergency Request
              </button>
            ) : (
              <div className="w-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 py-3 px-4 rounded-lg text-center">
                Donor currently unavailable
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
            <h5 className="font-medium text-slate-800 dark:text-white mb-2">Donation History</h5>
            <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <p>• Total donations: {donor.donationCount}</p>
              <p>• Member since: January 2022</p>
              <p>• Response rate: 95%</p>
              <p>• Average response time: 12 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

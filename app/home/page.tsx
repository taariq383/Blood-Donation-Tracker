import { Bell, MapPin, Search, Users } from "lucide-react"
import BloodGroupSelector from "@/components/BloodGroupSelector"
import SOSButton from "@/components/SOSButton"
import LiveDonorCounter from "@/components/LiveDonorCounter"
import EmergencyRequests from "@/components/EmergencyRequests"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* App Bar */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              O+
            </div>
            <div>
              <p className="font-semibold text-slate-700">Akash Kumar</p>
              <p className="text-sm text-slate-500">Patna, India</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Blood Group Selector */}
        <BloodGroupSelector />

        {/* Live Donor Counter */}
        <LiveDonorCounter />

        {/* SOS Button */}
        <SOSButton />

        {/* Emergency Requests */}
        <EmergencyRequests />

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Find Donors</span>
            </button>
            <button className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors">
              <Users className="w-5 h-5" />
              <span className="font-medium">My Network</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

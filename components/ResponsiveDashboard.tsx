"use client"

import { useState } from "react"
import NavigationSidebar from "./NavigationSidebar"
import MapSection from "./MapSection"
import DonorRequestPanel from "./DonorRequestPanel"
import MobileHeader from "./MobileHeader"
import EmergencySOSButton from "./EmergencySOSButton"
import BloodTypeSelector from "./BloodTypeSelector"

export default function ResponsiveDashboard() {
  const [selectedBloodType, setSelectedBloodType] = useState("B+")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Header - Hidden on Desktop */}
      <div className="lg:hidden">
        <MobileHeader onMenuClick={() => setIsSidebarOpen(true)} />
      </div>

      <div className="flex">
        {/* Navigation Sidebar - Desktop Only */}
        <NavigationSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-280">
          {/* Desktop Split Layout */}
          <div className="lg:flex lg:h-screen">
            {/* Left Panel - Map Section (40% on Desktop) */}
            <div className="lg:w-2/5 lg:h-full">
              <MapSection selectedBloodType={selectedBloodType} />
            </div>

            {/* Right Panel - Donor List/Request Interface (60% on Desktop) */}
            <div className="lg:w-3/5 lg:h-full lg:overflow-y-auto">
              {/* Emergency Request Panel - Sticky Header */}
              <div className="sticky top-0 z-10 bg-white border-b border-slate-200 p-4 lg:p-6">
                <BloodTypeSelector selectedBloodType={selectedBloodType} onBloodTypeChange={setSelectedBloodType} />
              </div>

              {/* Donor Request Panel */}
              <DonorRequestPanel selectedBloodType={selectedBloodType} />
            </div>
          </div>
        </main>
      </div>

      {/* Emergency SOS Button - Fixed Position */}
      <EmergencySOSButton />
    </div>
  )
}

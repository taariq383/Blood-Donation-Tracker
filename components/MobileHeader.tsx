"use client"

import { Menu, Bell, Search } from "lucide-react"

interface MobileHeaderProps {
  onMenuClick: () => void
}

export default function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 border-b border-slate-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="p-2 hover:bg-slate-100 rounded-lg">
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-slate-800">Find Donors</h1>
            <p className="text-sm text-slate-500">Patna, India</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></span>
          </button>
          <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

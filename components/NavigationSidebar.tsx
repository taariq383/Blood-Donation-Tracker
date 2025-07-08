"use client"

import { X, Heart, User, MapPin, Clock, Settings, HelpCircle, LogOut } from "lucide-react"

interface NavigationSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function NavigationSidebar({ isOpen, onClose }: NavigationSidebarProps) {
  const menuItems = [
    { icon: MapPin, label: "Find Donors", active: true },
    { icon: Clock, label: "My Requests", badge: "3" },
    { icon: User, label: "My Profile" },
    { icon: Heart, label: "Donation History" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help & Support" },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-280 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">BloodConnect</h1>
                <p className="text-sm text-slate-500">Save Lives Together</p>
              </div>
            </div>
            <button onClick={onClose} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg">
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              RS
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Rahul Sharma</h3>
              <div className="flex items-center gap-2">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">B+</span>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">✅ Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    item.active ? "bg-red-50 text-red-700 border border-red-200" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-red-600 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}

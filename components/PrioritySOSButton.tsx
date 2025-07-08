"use client"

import { useState } from "react"
import { AlertTriangle } from "lucide-react"

export default function PrioritySOSButton() {
  const [isPressed, setIsPressed] = useState(false)

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 3000)
  }

  return (
    <button
      onClick={handlePress}
      disabled={isPressed}
      className={`fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-200 ${
        isPressed ? "scale-95 bg-red-700" : "hover:scale-110 animate-pulse"
      } disabled:opacity-70`}
    >
      {isPressed ? (
        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <AlertTriangle className="w-7 h-7" />
      )}
    </button>
  )
}

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import DonorMapView from "@/components/DonorMapView"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="flex items-center gap-3 max-w-md mx-auto">
          <Link href="/home" className="p-2 hover:bg-slate-100 rounded-lg">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="font-bold text-slate-700">Nearby Donors</h1>
            <p className="text-sm text-slate-500">B+ Blood Group</p>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto">
        {/* Map Container */}
        <DonorMapView />
      </div>
    </div>
  )
}

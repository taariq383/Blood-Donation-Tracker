import Link from "next/link"
import { ArrowRight, Heart, MapPin, Clock, Shield, Users } from "lucide-react"

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-8 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="text-center text-white max-w-sm mx-auto z-10">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-sans mb-3 tracking-tight">BloodConnect</h1>
          <p className="text-xl md:text-2xl opacity-90 font-medium">Find donors in 60 seconds</p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <MapPin className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs opacity-80 font-medium">Real-time</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <Shield className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs opacity-80 font-medium">Verified</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <Clock className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xs opacity-80 font-medium">24/7 Ready</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-4 mb-8">
          <Link
            href="/emergency"
            className="block bg-white text-red-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Find Donors Now
            <ArrowRight className="inline w-5 h-5 ml-2" />
          </Link>

          <Link
            href="/donor-signup"
            className="block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-800 transition-all duration-200"
          >
            I'm a Donor
          </Link>
        </div>

        {/* Live Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <p className="text-sm opacity-80">Live Network</p>
          </div>
          <p className="text-2xl font-bold">12,847</p>
          <p className="text-sm opacity-80">Active Donors Nationwide</p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 text-center text-white/70 text-sm">
        <div className="flex items-center justify-center gap-2">
          <Users className="w-4 h-4" />
          <span>Trusted by 50,000+ users across India</span>
        </div>
      </div>
    </div>
  )
}

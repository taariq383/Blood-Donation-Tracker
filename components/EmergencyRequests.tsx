import { Clock, MapPin, Phone } from "lucide-react"

const emergencyRequests = [
  {
    id: 1,
    bloodGroup: "B+",
    location: "AIIMS Hospital, Delhi",
    time: "5 min ago",
    urgency: "Critical",
    distance: "2.3 km",
  },
  {
    id: 2,
    bloodGroup: "O-",
    location: "Max Hospital, Saket",
    time: "12 min ago",
    urgency: "Urgent",
    distance: "4.7 km",
  },
]

export default function EmergencyRequests() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-700">Emergency Requests</h3>
        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">2 active</span>
      </div>

      <div className="space-y-3">
        {emergencyRequests.map((request) => (
          <div key={request.id} className="border border-slate-200 rounded-lg p-3 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {request.bloodGroup}
                </div>
                <div>
                  <p className="font-medium text-slate-700 text-sm">{request.location}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {request.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {request.distance}
                    </span>
                  </div>
                </div>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  request.urgency === "Critical" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"
                }`}
              >
                {request.urgency}
              </span>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
              <Phone className="w-4 h-4" />
              Respond to Request
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

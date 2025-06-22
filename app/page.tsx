import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Clock,
  Star,
  Phone,
  MessageCircle,
  Calendar,
  Shield,
  Users,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Baby,
  Activity,
  CheckCircle,
  ArrowRight,
  Filter,
} from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    id: 1,
    name: "Dr. Adebayo Ogundimu",
    specialty: "Cardiology",
    location: "Victoria Island, Lagos",
    rating: 4.8,
    reviews: 124,
    fee: "₦15,000",
    image: "/placeholder.svg?height=100&width=100",
    verified: true,
    hmo: ["NHIS", "AXA", "Hygeia"],
    availability: "Available Today",
    consultationType: ["In-person", "Virtual"],
  },
  {
    id: 2,
    name: "Dr. Fatima Abdullahi",
    specialty: "Pediatrics",
    location: "Garki, Abuja",
    rating: 4.9,
    reviews: 89,
    fee: "₦12,000",
    image: "/placeholder.svg?height=100&width=100",
    verified: true,
    hmo: ["NHIS", "Avon", "Reliance"],
    availability: "Available Tomorrow",
    consultationType: ["In-person", "Virtual"],
  },
  {
    id: 3,
    name: "Dr. Chukwuma Okafor",
    specialty: "Neurology",
    location: "Ikeja, Lagos",
    rating: 4.7,
    reviews: 156,
    fee: "₦18,000",
    image: "/placeholder.svg?height=100&width=100",
    verified: true,
    hmo: ["AXA", "Hygeia"],
    availability: "Available Today",
    consultationType: ["In-person"],
  },
]

const specialties = [
  { name: "Cardiology", icon: Heart, count: 45 },
  { name: "Neurology", icon: Brain, count: 32 },
  { name: "Ophthalmology", icon: Eye, count: 28 },
  { name: "Pediatrics", icon: Baby, count: 67 },
  { name: "General Practice", icon: Stethoscope, count: 89 },
  { name: "Emergency Medicine", icon: Activity, count: 23 },
]

const hmoProviders = ["NHIS", "AXA", "Avon", "Hygeia", "Reliance"]

export default function MedConnectApp() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-600">MedConnect</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Find Doctors
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Book Appointment
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              For Doctors
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Book a doctor.
            <br />
            <span className="text-blue-600">Anywhere. Anytime.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Simplifying doctor discovery, appointment booking, and insurance matching across Nigeria.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search doctors, specialties..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lagos">Lagos</SelectItem>
                  <SelectItem value="abuja">Abuja</SelectItem>
                  <SelectItem value="oyo">Oyo (Ibadan)</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="HMO Provider" />
                </SelectTrigger>
                <SelectContent>
                  {hmoProviders.map((hmo) => (
                    <SelectItem key={hmo} value={hmo.toLowerCase()}>
                      {hmo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="w-full">
                <Search className="w-4 h-4 mr-2" />
                Search Doctors
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Find Doctors by Specialty</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((specialty) => (
              <Card key={specialty.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <specialty.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{specialty.name}</h3>
                  <p className="text-sm text-gray-600">{specialty.count} doctors</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Doctors</h2>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter Results
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                      <AvatarFallback>
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        {doctor.verified && <CheckCircle className="w-5 h-5 text-green-500" />}
                      </div>
                      <CardDescription>{doctor.specialty}</CardDescription>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{doctor.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{doctor.rating}</span>
                        <span className="text-sm text-gray-600">({doctor.reviews} reviews)</span>
                      </div>
                      <Badge variant="secondary">{doctor.availability}</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-600">{doctor.fee}</span>
                      <div className="flex space-x-1">
                        {doctor.consultationType.map((type) => (
                          <Badge key={type} variant="outline" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {doctor.hmo.map((hmo) => (
                        <Badge key={hmo} variant="secondary" className="text-xs">
                          {hmo}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                      <Button variant="outline" size="icon">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MedConnect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">MDCN Verified</h3>
              <p className="text-gray-600">All doctors are verified by the Medical and Dental Council of Nigeria</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
              <p className="text-gray-600">Real-time calendar and time slot reservation system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">HMO Integration</h3>
              <p className="text-gray-600">Filter doctors by your HMO provider for seamless coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Booking Options</h3>
              <p className="text-gray-600">Book via app, WhatsApp, or direct call for convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* HMO Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted HMO Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {hmoProviders.map((hmo) => (
              <div key={hmo} className="bg-white rounded-lg p-6 shadow-sm">
                <span className="text-xl font-semibold text-gray-700">{hmo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Nigerians who trust MedConnect for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Download App
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              For Healthcare Providers
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MedConnect</span>
              </div>
              <p className="text-gray-400">
                Simplifying healthcare access across Nigeria with verified doctors and seamless booking.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Patients</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Find Doctors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    HMO Search
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Telemedicine
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Doctors</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Join MedConnect
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Manage Practice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MedConnect. All rights reserved. NDPA Compliant.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { ArrowRight, CheckCircle2, Mail, Clock } from 'lucide-react';
import Link from 'next/link';


export default function ConfirmationPage() {
  
  return (
    <div className="min-h-screen flex items-center justify-center px-bg-white 4 py-16">
      <div className="bg-white p-8 sm:p-12 max-w-2xl w-full  relative overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-100 rounded-full filter blur-3xl opacity-20 translate-y-24 -translate-x-24"></div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center">
          
          {/* Success Icon with Animation */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-green-100 rounded-full filter blur-xl opacity-60 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-6 shadow-lg">
              <CheckCircle2 size={64} className="text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Message Sent Successfully!
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
            Thank you for reaching out. We've received your message and our team will get back to you shortly.
          </p>

          
          {/* Call-to-action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Back to Home
              <ArrowRight size={20} />
            </Link>
            
            <Link
              href="/services/website"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
          </div>

          {/* Additional Info */}
          <p className="text-xs text-gray-500 mt-8">
            Need immediate assistance? Call us at <span className="font-semibold text-gray-700">(+92) 327-9008806</span>
          </p>
        </div>
      </div>
    </div>
  );
}
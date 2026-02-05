import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export function Enquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-md w-full text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Received!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for contacting us. Our team will review your request and get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-200"
            >
              Submit Another Enquiry
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

        {/* Info Side (Desktop only) */}
        <div className="hidden lg:flex lg:col-span-2 bg-blue-700 p-10 flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
            <p className="text-blue-100 mb-8">
              Fill out the form and our experts will guide you through the certification maze.
            </p>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-start gap-4 text-blue-100">
              <div className="w-1 h-12 bg-white/30 rounded-full"></div>
              <p className="text-sm">"Fastest way to get your ISI mark. Highly recommended!"</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:col-span-3 p-8 sm:p-10 bg-white">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Start Your Journey</h1>
            <p className="mt-1 text-gray-500 text-sm">
              We usually respond within a few hours.
            </p>
          </div>

          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@company.com"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                Service Required
              </label>
              <input
                id="service"
                name="service"
                type="text"
                required
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="e.g., ISI Mark Certification, FMCS, etc."
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Describe your product..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-200 text-base font-bold text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5" />
                ) : (
                  <>
                    Send Enquiry <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

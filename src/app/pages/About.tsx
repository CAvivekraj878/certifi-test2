import React from 'react';
import { motion } from 'motion/react';
import { Quote, Linkedin, Mail, BadgeCheck } from 'lucide-react';

import img1 from './img1.png';

export function About() {
  return (
    <div className="min-h-screen pt-10 pb-20 bg-gray-50">
      {/* Header */}
      <div className="relative py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            The visionaries ensuring your compliance and quality standards.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">

          {/* Image Column */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-24"
            >
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] w-full border border-gray-200">
                  <img
                    src={img1}
                    alt="Mr. Akshay Kumar Sharma"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-90"></div>

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <BadgeCheck className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-200 text-sm font-semibold tracking-wider uppercase">Certified Expert</span>
                    </div>
                    <h2 className="text-white text-2xl font-bold">Mr. Akshay Kumar Sharma</h2>
                    <p className="text-blue-100 font-medium">Founder & CEO</p>
                    <p className="text-blue-100 font-medium">Ex. Asst. Director ( BIS)</p>


                    <div className="flex gap-4 mt-4 pt-4 border-t border-blue-700/50">
                      <button className="text-white hover:text-blue-300 transition-colors"><Linkedin className="w-5 h-5" /></button>
                      <button className="text-white hover:text-blue-300 transition-colors"><Mail className="w-5 h-5" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg"
            >
              <Quote className="w-12 h-12 text-blue-200 mb-6" />

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                "Compliance isn't just about rules. It's about building trust."
              </h3>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  With over 15 years of deep-dive experience in Indian regulatory frameworks, Mr. Akshay Kumar Sharma has become a cornerstone for businesses aiming to enter the Indian market. His journey began as a Quality Control Engineer, where he witnessed firsthand the struggles manufacturers faced with obscure regulations.
                </p>
                <p>
                  He established Certifi.in Advisers with a radical approach: <strong>Demystify the process</strong>. He believes that every business, regardless of size, deserves a clear path to market access.
                </p>
                <p>
                  Under his stewardship, our firm has maintained a <strong>99% success rate</strong> in obtaining ISI marking and CRS registrations. His personal involvement in complex cases ensures that no stone is left unturned.
                </p>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2 inline-block">Core Competencies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'BIS Act & Regulations',
                    'Factory Audit Preparation',
                    'Lab Testing Coordination',
                    'Customs Clearance Support',
                    'Surveillance Management',
                    'Standardization Strategy'
                  ].map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-center p-3 rounded-lg bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

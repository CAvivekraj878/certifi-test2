import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Award, Globe, ArrowRight, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'ISI Mark Certification',
    description: 'Complete guidance for ISI Mark Licensing for domestic manufacturers including documentation and testing.',
    icon: Award,
  },
  {
    title: 'FMCS Certification',
    description: 'Foreign Manufacturers Certification Scheme (FMCS) consulting for international clients exporting to India.',
    icon: Globe,
  },
  {
    title: 'NABL Approved And BIS Laboratory Testing',
    description: 'Arranging product testing in BIS recognized laboratories across the country with expedited results.',
    icon: CheckCircle,
  },
   {
    title: 'ISO Managment System Certification',
    description: 'globally recognized standard that validates an organization’s commitment to quality, efficiency, and continual improvement in its processes.',
    icon: CheckCircle,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          {/* Soft Blue Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/30 -skew-x-12 translate-x-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4 mr-2 text-blue-600 fill-blue-600" />
            Fast-Track Your Certification Process
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-gray-900"
          >
            Precision guidance <br />
            <span className="text-blue-700">
              for BIS compliance and certification outcomes.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Certifi.in Advisers Private Limited supports manufacturers with structured documentation, audit readiness, and certification pathways that align with Indian standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/enquiry"
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-white rounded-full bg-blue-700 hover:bg-blue-800 shadow-lg shadow-blue-700/30 transition-all hover:scale-105"
            >
              Get Certified Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-blue-700 bg-white border border-blue-200 rounded-full hover:bg-blue-50 transition-all hover:scale-105 shadow-sm"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Comprehensive Compliance Solutions
            </h3>
            <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="h-full"
              >
                <Link
                  to="/services"
                  className="block group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center bg-blue-900"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Launch Your Product?</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Don't let compliance hold you back. Contact us today for a free consultation and roadmap for your BIS certification.
              </p>
              <Link
                to="/enquiry"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-200"
              >
                Start Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

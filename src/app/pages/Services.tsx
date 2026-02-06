import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, FileText, FlaskConical } from 'lucide-react';

export function Services() {
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Comprehensive certification and compliance solutions tailored for your business needs.
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                {/* Section 1: LICENCE & CERTIFICATION */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <ShieldCheck className="w-8 h-8 text-blue-700" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Licence & Certification</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "BIS (ISI MARK) FOR FOREIGN MANUFACTURERS",
                            "DOMESTIC PRODUCT CERTIFICATION (ISI MARK)",
                            "BIS SCHEME X CERTIFICATION",
                            "BIS CERTIFICATE OF CONFORMITY (CoC)",
                            "BIS HALLMARKING"
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                    <h3 className="font-semibold text-gray-800">{service}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 2: BIS (CRS) REGISTRATION */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-indigo-100 rounded-lg">
                            <FileText className="w-8 h-8 text-indigo-700" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">BIS (CRS) Registration</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Electronic Product Registration</h3>
                        <p className="text-gray-700">
                            Comprehensive support for <strong>BIS (CRS) REGISTRATION FOR ELECTRONIC PRODUCT</strong>. We guide you through testing, documentation, and final registration to ensure your electronic goods meet Indian safety standards.
                        </p>
                    </motion.div>
                </section>
                
                {/* Section 3: ISO Managment System Certification */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-indigo-100 rounded-lg">
                            <FileText className="w-8 h-8 text-indigo-700" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">ISO Managment System Certification</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Electronic Product Registration</h3>
                        <p className="text-gray-700">
                            We help organizations achieve ISO Management System Certification</strong>. through guidance, gap analysis, documentation, training, and audit support.
                        </p>
                    </motion.div>
                </section>

                {/* Section 4: New Indian Standards & Amendments */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-teal-100 rounded-lg">
                            <FlaskConical className="w-8 h-8 text-teal-700" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">New Indian Standards & Amendments</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-6 bg-gray-50 border-b border-gray-200">
                            <h3 className="font-bold text-lg text-gray-800">Standardization (Scientific) Division</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-600 font-medium uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4">IS Number / Product Name</th>
                                        <th className="px-6 py-4">Type of Proposal</th>
                                        <th className="px-6 py-4">Submission Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        {
                                            name: "IS 4105:2020\nSTYRENE MONOMER",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2020"
                                        },
                                        {
                                            name: "IS 15030:2013\nTEREPHTHALIC ACID",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2020"
                                        },
                                        {
                                            name: "IS 170:2020\nACETONE",
                                            proposal: "UNDER PREPERATION\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 538:2020\nPHENOL",
                                            proposal: "UNDER PREPERATION\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 15030:2013\nTEREPHTHALIC ACID",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 4105:2020\nSTYRENE MONOMER",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 5295:2021\nETHYLENE GLYCOL",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 7129:2021\nPOTASSIUM CARBONATE",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 4105:2020\nSTYRENE MONOMER",
                                            proposal: "UNDER PREPERATION\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 6831:1992\nCAUSTIC POTASH",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR INCLUSION OF MODERN TESTING METHODS AND TECHNIQUES]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 17264\nTEXTILE - POLYESTER INDUSTRIAL YARN",
                                            proposal: "UNDER PREPERATION\n[FOR INCLUDE SOME MORE POLYESTER YARN CRITERIA AND REQUIREMENT WITH WIDE RANGE]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 717\nCARBON DISULPHIDE COMPULSORY CERTIFICATION",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[BRING STANDARD UNDER COMPULSORY CERTIFICATION]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 717\nCARBON DISULPHIDE - ECO MARK INCLUSION",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[INCORPORATE ECO - MARK REQUIREMENT]",
                                            date: "2021"
                                        },
                                        {
                                            name: "REDISPERSIBLE POLYMER POWDER",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR NEW STANDARD FORMULATION]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 1786 : 2008\nHIGH STRENGTH DEFORMED BARS AND WIRES. FOR CONCRETE REINFORCEMENT",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[FOR GRADE INCLUSIONS]",
                                            date: "2021"
                                        },
                                        {
                                            name: "Higher - Strength Stainless Steel Plate, Sheet And Strip For Bridge And Other Structural Applications- Specification",
                                            proposal: "PROPOSAL SUBMITTED TO BIS\n[New Standard Formulation]",
                                            date: "2021"
                                        },
                                        {
                                            name: "IS 4824:2006\nBead Wire For Tyres",
                                            proposal: "UNDER PREPERATION\n[Inclusions of new sizes in the existing standard]",
                                            date: "2021"
                                        }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-semibold text-gray-900 whitespace-pre-line">{row.name}</td>
                                            <td className="px-6 py-4 text-gray-600 whitespace-pre-line">{row.proposal}</td>
                                            <td className="px-6 py-4 text-gray-500">{row.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}



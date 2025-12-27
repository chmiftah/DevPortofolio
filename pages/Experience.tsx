import React from 'react';
import { Calendar, Briefcase, GraduationCap, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
   const fadeInUp = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
   };

   const staggerContainer = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2
         }
      }
   };

   return (
      <div className="flex flex-col items-center w-full min-h-screen bg-slate-50 py-16 px-4">
         <div className="w-full max-w-4xl flex flex-col gap-12">

            {/* Header */}
            <motion.section
               initial="hidden"
               animate="visible"
               variants={staggerContainer}
               className="flex flex-col gap-4"
            >
               <motion.div variants={fadeInUp} className="flex items-center gap-2 text-primary font-mono text-sm font-medium">
                  <span className="opacity-50">01.</span>
                  <span>// Professional History</span>
               </motion.div>
               <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">
                  Career Journey
               </motion.h1>
               <motion.p variants={fadeInUp} className="font-mono text-slate-500 text-lg">
                  <span className="text-purple-600">const</span> <span className="text-blue-600">experience</span> = [];
               </motion.p>
               <motion.p variants={fadeInUp} className="text-slate-600 text-lg max-w-2xl leading-relaxed mt-2">
                  Building the web, one component at a time. I've spent the last 5+ years navigating the ever-evolving landscape of frontend development.
               </motion.p>
            </motion.section>

            {/* Stats */}
            <motion.section
               initial="hidden"
               animate="visible"
               variants={staggerContainer}
               className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
               {[
                  { label: 'Years of Experience', val: '5+', icon: <Calendar className="text-slate-300" /> },
                  { label: 'Projects Shipped', val: '25+', icon: <Briefcase className="text-slate-300" /> },
                  { label: 'Total Commits', val: '3,400+', icon: <Code className="text-slate-300" /> },
               ].map((stat, idx) => (
                  <motion.div
                     key={idx}
                     variants={fadeInUp}
                     whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                     className="group relative flex flex-col gap-2 rounded-xl p-6 bg-white border border-slate-200 transition-all shadow-sm hover:shadow-lg"
                  >
                     <div className="absolute top-4 right-4 group-hover:text-primary transition-colors duration-300">{stat.icon}</div>
                     <p className="text-slate-500 text-sm font-medium font-mono">{stat.label}</p>
                     <p className="text-slate-900 text-3xl font-bold tracking-tight">{stat.val}</p>
                  </motion.div>
               ))}
            </motion.section>

            {/* Timeline */}
            <section className="relative mt-8">
               {/* Vertical Line */}
               <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute left-[28px] top-4 bottom-4 w-px bg-gradient-to-b from-slate-200 via-primary/20 to-transparent md:left-1/2 md:-ml-px"
               ></motion.div>

               {/* Item 1 */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col md:flex-row items-start mb-12 group"
               >
                  <div className="absolute left-0 top-0 md:left-1/2 md:-ml-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-lg z-10 transition-transform group-hover:scale-110">
                     <Briefcase size={24} />
                  </div>
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-16 md:pb-12 md:translate-y-2 md:order-2">
                     <div className="relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default">
                        <div className="flex flex-col gap-2 mb-4">
                           <h3 className="text-xl font-bold text-slate-900">Senior Frontend Engineer</h3>
                           <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                              <span className="font-semibold text-primary">@ TechCorp</span>
                              <span className="text-slate-500">San Francisco</span>
                           </div>
                        </div>
                        <ul className="flex flex-col gap-2 mb-5 list-none text-slate-600 text-sm">
                           <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>Spearheaded dashboard migration to React.</li>
                           <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>Mentored 3 junior developers.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                           {['React', 'TypeScript', 'GraphQL'].map(tag => (
                              <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium hover:bg-blue-50 hover:text-primary transition-colors">{tag}</span>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 md:text-right md:order-1 mt-1 md:mt-4 mb-2 md:mb-0">
                     <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-mono font-bold border border-blue-100">2022 — Present</span>
                  </div>
               </motion.div>

               {/* Item 2 */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col md:flex-row items-start mb-12 group"
               >
                  <div className="absolute left-0 top-0 md:left-1/2 md:-ml-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-white text-slate-400 shadow-md z-10 group-hover:text-primary group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                     <Code size={24} />
                  </div>
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 md:pb-12 md:translate-y-2 md:order-1">
                     <div className="relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default">
                        <div className="flex flex-col gap-2 mb-4">
                           <h3 className="text-xl font-bold text-slate-900">Frontend Developer</h3>
                           <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                              <span className="font-semibold text-primary">@ StartupX</span>
                              <span className="text-slate-500">Remote</span>
                           </div>
                        </div>
                        <ul className="flex flex-col gap-2 mb-5 list-none text-slate-600 text-sm">
                           <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>Implemented new design system.</li>
                           <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>Optimized CI/CD pipelines.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                           {['Vue.js', 'Tailwind', 'Jest'].map(tag => (
                              <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium hover:bg-blue-50 hover:text-primary transition-colors">{tag}</span>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-16 md:order-2 mt-1 md:mt-4 mb-2 md:mb-0">
                     <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-bold border border-slate-200">2020 — 2022</span>
                  </div>
               </motion.div>

               {/* Item 3 */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative flex flex-col md:flex-row items-start mb-8 group"
               >
                  <div className="absolute left-0 top-0 md:left-1/2 md:-ml-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-white text-slate-400 shadow-md z-10 group-hover:text-primary group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                     <GraduationCap size={24} />
                  </div>
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pl-16 md:pb-12 md:translate-y-2 md:order-2">
                     <div className="relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default">
                        <div className="flex flex-col gap-2 mb-4">
                           <h3 className="text-xl font-bold text-slate-900">Web Intern</h3>
                           <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                              <span className="font-semibold text-primary">@ AgencyY</span>
                              <span className="text-slate-500">New York</span>
                           </div>
                        </div>
                        <ul className="flex flex-col gap-2 mb-5 list-none text-slate-600 text-sm">
                           <li className="flex items-start gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>Assisted in development of landing pages.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2">
                           {['HTML/CSS', 'JavaScript', 'Figma'].map(tag => (
                              <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono font-medium hover:bg-blue-50 hover:text-primary transition-colors">{tag}</span>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 md:text-right md:order-1 mt-1 md:mt-4 mb-2 md:mb-0">
                     <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-bold border border-slate-200">2019</span>
                  </div>
               </motion.div>

            </section>
         </div>
      </div>
   );
};

export default Experience;
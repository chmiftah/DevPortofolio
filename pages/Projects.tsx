import React from 'react';
import { ExternalLink, Github, Code, LayoutGrid, Database, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.4]"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-blue-700">Open to work</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">digital experiences</span> with code.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                I'm a Frontend Engineer specializing in building exceptional digital experiences. Currently focused on accessible, human-centered products using React and Tailwind.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-12 px-6 rounded-lg bg-slate-900 text-white font-bold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  View GitHub <Github size={18} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-xl relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2670&auto=format&fit=crop"
                alt="Coding Workspace"
                className="relative rounded-2xl shadow-2xl border border-white/20 w-full object-cover aspect-[4/3] transform hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2"
          >
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium whitespace-nowrap">
              <LayoutGrid size={16} /> All Works
            </button>
            {['React Ecosystem', 'Design Systems', 'SaaS'].map((filter) => (
              <button key={filter} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary/30 text-sm font-medium transition-all whitespace-nowrap">
                {filter === 'React Ecosystem' && <Code size={16} />}
                {filter === 'SaaS' && <Database size={16} />}
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-8"
          >
            <Star className="text-yellow-400 fill-yellow-400" /> Featured Project
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl transition-all duration-300"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative h-64 lg:h-auto overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                  alt="Finance Dashboard"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="lg:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 rounded text-xs font-mono font-medium bg-blue-100 text-blue-700">v2.0.0</span>
                    <span className="px-2 py-1 rounded text-xs font-mono font-medium bg-purple-100 text-purple-700">Case Study</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">FinanceFlow SaaS</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    A comprehensive financial management dashboard built for enterprise scale. Features real-time data visualization via D3.js, secure authentication flows, and a dark-mode first design system.
                  </p>
                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Node.js'].map(tech => (
                        <div key={tech} className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-sm font-medium text-slate-700">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 border-t border-slate-100 pt-6">
                  <button className="flex-1 h-10 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                    Live Demo
                  </button>
                  <button className="flex-1 h-10 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Selected Works</h2>
            <a href="#" className="text-sm font-medium text-primary hover:text-blue-700 flex items-center gap-1">
              View Archive <ArrowRight size={16} />
            </a>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'E-com Analytics',
                desc: 'Real-time analytics dashboard for online retailers.',
                tags: ['Next.js', 'Tailwind'],
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
              },
              {
                title: 'HealthTrack Pro',
                desc: 'Mobile-first health monitoring application.',
                tags: ['React Native', 'Firebase'],
                img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop'
              },
              {
                title: 'DeFi Wallet',
                desc: 'Secure Web3 wallet interface allowing users to swap tokens.',
                tags: ['Web3.js', 'Solidity'],
                img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop'
              },
              {
                title: 'Component Lib',
                desc: 'Internal design system documentation.',
                tags: ['Storybook', 'Rollup'],
                img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop'
              },
              {
                title: 'Portfolio V1',
                desc: 'Experimental CSS layouts and animations.',
                tags: ['HTML/SCSS', 'GSAP'],
                img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop'
              },
              {
                title: 'TaskMaster',
                desc: 'Collaborative task management tool.',
                tags: ['Vue 3', 'Pinia'],
                img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop'
              },
            ].map((project, idx) => (
              <motion.article
                key={idx}
                variants={item}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">Details</button>
                  </div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{project.title}</h3>
                    <ExternalLink size={18} className="text-slate-400 hover:text-primary" />
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-4">{project.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-slate-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
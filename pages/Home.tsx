import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Code2, Box, Layers, GitBranch, Figma, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
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
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 md:py-20 lg:px-8">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-1 flex-col gap-6"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 rounded bg-blue-50 px-3 py-1 text-sm font-mono font-medium text-primary w-fit border border-blue-100">
                <Code2 size={16} />
                <span>Frontend Engineer</span>
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Hello, World! <br />
                I'm <span className="text-primary underline decoration-4 decoration-blue-200 underline-offset-4">Alex Chen</span>.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                I craft pixel-perfect, accessible, and performant user experiences. Bridging the gap between design and engineering with <span className="font-mono text-primary bg-blue-50 px-1 rounded">clean code</span>.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">
                <Download size={18} />
                Download Resume
              </button>
              <button className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 text-sm font-bold text-slate-700 transition-all hover:border-primary/50 hover:text-primary">
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image / Terminal */}
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-lg"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.02, rotate: 1, transition: { duration: 0.2 } }}
                className="relative rounded-xl bg-[#1e1e1e] p-6 shadow-2xl font-mono text-sm leading-relaxed text-gray-300 border border-[#333] w-full max-w-md"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-gray-500">about-me.tsx</span>
                </div>
                <div>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">passion</span> = <span className="text-green-400">"Designing with Code"</span>;</p>
                  <br />
                  <p className="text-gray-400">// My Mission</p>
                  <p>I started my career in graphic design but quickly realized I wanted to build the things I was designing.</p>
                  <br />
                  <p>
                    <span className="text-purple-400">const</span> <span className="text-yellow-400">stack</span> = [<br />
                    &nbsp;&nbsp;<span className="text-green-400">'React'</span>,<br />
                    &nbsp;&nbsp;<span className="text-green-400">'TypeScript'</span>,<br />
                    &nbsp;&nbsp;<span className="text-green-400">'Tailwind'</span><br />
                    ];
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col gap-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary w-fit">
              <Code2 size={14} />
              <span>developer_skills.json</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              &lt;Technical Skills /&gt;
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              A breakdown of the tools, languages, and technologies I use to build scalable, high-performance web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Core Competencies (Progress Bars) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h3 className="text-xl font-bold border-b border-slate-100 pb-4 flex items-center gap-2">
                <Terminal size={20} className="text-primary" /> Core Competencies
              </h3>

              <div className="flex flex-col gap-6">
                {[
                  { name: 'JavaScript (ES6+)', val: 95, sub: 'Closures, Async/Await' },
                  { name: 'HTML5 & CSS3/SCSS', val: 90, sub: 'Semantic Markup, Flexbox' },
                  { name: 'TypeScript', val: 85, sub: 'Interfaces, Generics' },
                  { name: 'REST & GraphQL', val: 80, sub: 'Apollo Client, Axios' }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-end">
                      <p className="font-semibold text-slate-800">{skill.name}</p>
                      <span className="text-sm font-mono text-primary font-bold">{skill.val}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-primary rounded-full"
                      ></motion.div>
                    </div>
                    <p className="text-xs text-slate-500">{skill.sub}</p>
                  </motion.div>
                ))}
              </div>

              {/* Workflow Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-100"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Workflow Philosophy</h3>
                <div className="flex flex-wrap gap-2">
                  {['Mobile First', 'A11y Focused', 'Clean Code', 'Pixel Perfect'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Frameworks Grid */}
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold border-b border-slate-100 pb-4 flex items-center gap-2 mb-8">
                <Layers size={20} className="text-primary" /> Frameworks & Ecosystem
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <Code2 size={32} className="text-blue-500" />, name: 'React.js', sub: 'Ecosystem', bg: 'bg-blue-50' },
                  { icon: <Box size={32} className="text-green-500" />, name: 'Vue.js', sub: 'Framework', bg: 'bg-green-50' },
                  { icon: <Layers size={32} className="text-cyan-500" />, name: 'Tailwind', sub: 'Styling', bg: 'bg-cyan-50' },
                  { icon: <Terminal size={32} className="text-slate-800" />, name: 'Next.js', sub: 'SSR/SSG', bg: 'bg-slate-100' },
                  { icon: <GitBranch size={32} className="text-orange-500" />, name: 'Git & CI/CD', sub: 'Version Control', bg: 'bg-orange-50' },
                  { icon: <Figma size={32} className="text-purple-500" />, name: 'Figma', sub: 'Design Handoff', bg: 'bg-purple-50' },
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group flex flex-col items-center p-5 rounded-xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className={`size-12 rounded-full ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-sm">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Learning Footer */}
      <section className="w-full bg-slate-50 border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-lg flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Currently Learning
            </p>
            <p className="text-sm text-slate-500">Exploring 3D Web Experiences with Three.js and WebGL.</p>
          </div>
          <Link to="/projects" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-bold text-primary">
            View Projects <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
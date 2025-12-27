import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, FileText, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-20 lg:py-20">
        
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Opportunities
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl mb-6">
              Let's build something <br />
              <span className="text-primary">amazing</span> together_
            </h1>
            <p className="max-w-md text-lg text-slate-600">
              Have a project in mind? Looking to hire a frontend specialist? Fill out the terminal below or reach out directly.
            </p>
          </div>
          
          {/* Decorative Code Block */}
          <div className="hidden lg:block relative group">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
            <div className="relative rounded-xl bg-[#1e1e1e] p-6 shadow-2xl font-mono text-sm leading-relaxed text-gray-300 border border-[#333]">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-500">contact.ts</span>
              </div>
              <div>
                <span className="text-purple-400">const</span> <span className="text-yellow-200">developer</span> = {'{'}<br />
                &nbsp;&nbsp;name: <span className="text-green-400">'Alex Dev'</span>,<br />
                &nbsp;&nbsp;email: <span className="text-green-400">'hello@alexdev.com'</span>,<br />
                &nbsp;&nbsp;status: <span className="text-green-400">'Available for hire'</span>,<br />
                {'}'};
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Contact Form */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate-900">Send a Message</h3>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">Name</span>
                    <input className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 font-medium transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="John Doe" type="text" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">Email</span>
                    <input className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 font-medium transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="john@example.com" type="email" />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-500">Project Type</span>
                  <select className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 font-medium transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-slate-700">
                    <option>Web Application Development</option>
                    <option>UI/UX Design Implementation</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-500">Message</span>
                  <div className="relative">
                    <textarea className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 py-3 px-4 font-mono text-sm leading-relaxed transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="// Tell me about your project requirements..." rows={5}></textarea>
                  </div>
                </label>
                <button className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-base font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98]" type="button">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-6">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold mb-4 text-slate-900">Contact Details</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@alexdev.com" className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-slate-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500">Email</span>
                    <span className="font-semibold text-slate-900">hello@alexdev.com</span>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-lg p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-slate-500">Location</span>
                    <span className="font-semibold text-slate-900">San Francisco, CA (Remote)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'GitHub', sub: '@frontend_dev', icon: <Github size={24} />, href: '#' },
                 { label: 'LinkedIn', sub: 'in/developer', icon: <Linkedin size={24} />, href: '#' },
                 { label: 'X (Twitter)', sub: '@dev_tweets', icon: <Twitter size={24} />, href: '#' },
                 { label: 'Resume', sub: 'View PDF', icon: <FileText size={24} />, href: '#' },
               ].map((social) => (
                 <a key={social.label} href={social.href} className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center transition-all hover:border-primary/50 hover:shadow-md">
                   <div className="text-slate-900 group-hover:text-primary transition-colors group-hover:scale-110 transform duration-300">
                     {social.icon}
                   </div>
                   <div>
                     <span className="block font-bold text-sm text-slate-900">{social.label}</span>
                     <span className="text-xs text-slate-500">{social.sub}</span>
                   </div>
                 </a>
               ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1549421263-6064833b071b?q=80&w=2565&auto=format&fit=crop" 
                alt="Map" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-4 left-4">
                 <span className="inline-flex items-center rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur-sm">
                     San Francisco, CA
                 </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
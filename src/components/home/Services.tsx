import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Layout, Globe, Monitor, Code, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'IT Support & Security',
    desc: 'Expert hardware and networking troubleshooting with high-level security implementation.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: BookOpen,
    title: 'Tech Tutorials',
    desc: 'Simplified video guides for software, hardware repairs, and productivity tools.',
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    icon: Monitor,
    title: 'Office Training',
    desc: 'Professional training in Microsoft Office 365, Google Workspace, and Access.',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    icon: Layout,
    title: 'Canva Design',
    desc: 'Creating stunning visual content and teaching the art of simple digital design.',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Building modern, responsive websites for small businesses and personal brands.',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: Globe,
    title: 'Digital Literacy',
    desc: 'Comprehensive training for beginners to master the internet and modern tools.',
    color: 'bg-orange-100 text-orange-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Comprehensive Tech Solutions
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            From professional IT consultations to creative design and masterclass trainings, we provide the tools you need to succeed in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all shadow-sm"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">Need a custom training program?</h4>
            <p className="opacity-90">We offer tailored sessions for corporate teams and schools.</p>
          </div>
          <button className="whitespace-nowrap px-8 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-slate-100 transition-colors">
            Contact for Training
          </button>
        </div>
      </div>
    </section>
  );
}
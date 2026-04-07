import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, MessageCircle, Youtube } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d4bc4a44-4f87-4cb8-8f3d-42a989dd7b9d/hero-background-tech-workspace-d51acdc7-1771225837324.webp" 
          alt="Workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">
              Expert IT Professional & Content Creator
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Master the Digital World with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Bekur Tech
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Demystifying technology through professional IT guidance, hands-on tutorials, and modern solutions. Join our community of learners and tech enthusiasts today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30 transform hover:-translate-y-1">
                <Youtube size={20} />
                Watch on YouTube
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1">
                <MessageCircle size={20} />
                Follow on TikTok
              </button>
            </div>
          </motion.div>
          
          {/* Stats/Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { label: 'Subscribers', value: '50K+' },
              { label: 'Tutorials', value: '500+' },
              { label: 'Students', value: '10K+' },
              { label: 'IT Solutions', value: '100+' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
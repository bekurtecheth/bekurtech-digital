import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d4bc4a44-4f87-4cb8-8f3d-42a989dd7b9d/about-bekur-tech-it-professional-d8bdad76-1771225837703.webp" 
                alt="Bekur Tech Professional" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Certification Badges */}
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/10 p-3 rounded-full">
                  <Award className="text-blue-600" size={32} />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Certified Expert</p>
                  <p className="text-slate-900 dark:text-white font-bold">CompTIA A+ & CCNA</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Who is Bekur Tech?</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
              Empowering the Next Generation of Tech Professionals
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
              With over a decade of experience in IT hardware, networking, and digital training, Bekur Tech was born from a passion for making complex technology accessible to everyone.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Our journey started in the server rooms and repair labs, evolving into a digital educational hub that reaches thousands of learners through YouTube and dedicated training programs.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Expert Technical Guidance for IT Professionals',
                'Practical Tutorials for Daily Productivity Tools',
                'Professional Hardware & Network Consulting',
                'Comprehensive MS Office & Workspace Trainings'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors shadow-lg">
              Learn More About My Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
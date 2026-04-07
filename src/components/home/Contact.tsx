import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info Sidebar */}
            <div className="lg:w-2/5 bg-blue-600 p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
              <p className="text-blue-100 mb-12 text-lg">
                Have a project in mind or need tech advice? I'd love to hear from you. Reach out and let's build something great.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Email me at</p>
                    <p className="font-bold">hello@bekurtech.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Call me at</p>
                    <p className="font-bold">+251 900 000 000</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Location</p>
                    <p className="font-bold">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <p className="text-blue-200 text-sm mb-6">Connect on WhatsApp</p>
                <button className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-colors w-full justify-center">
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none dark:text-white appearance-none">
                    <option>General Inquiry</option>
                    <option>IT Support Request</option>
                    <option>Training Program</option>
                    <option>Business Collaboration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="How can I help you today?" 
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-blue-500 transition-all outline-none dark:text-white resize-none"
                  ></textarea>
                </div>
                <button className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
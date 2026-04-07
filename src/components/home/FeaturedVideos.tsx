import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    title: 'How to Setup a Professional Home Network',
    thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop',
    duration: '15:24',
    views: '12K views',
    link: '#'
  },
  {
    title: 'Advanced Excel Formulas for Data Analysis',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    duration: '22:10',
    views: '8.5K views',
    link: '#'
  },
  {
    title: 'CCNA 2023: Full Routing Basics Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?q=80&w=2000&auto=format&fit=crop',
    duration: '45:00',
    views: '25K views',
    link: '#'
  }
];

export default function FeaturedVideos() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Tutorials</h2>
            <p className="text-slate-600 dark:text-slate-400">Join 50K+ subscribers on our learning journey.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-red-600 font-bold">
            <Youtube /> Subscribe
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white">
                    <Play fill="currentColor" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {video.title}
              </h3>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Youtube size={16} /> YouTube
                </span>
                <span>•</span>
                <span>{video.views}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
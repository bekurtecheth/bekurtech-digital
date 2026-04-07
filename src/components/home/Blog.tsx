import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Top 10 Productivity Hacks for Google Workspace',
    category: 'Tutorials',
    date: 'Oct 24, 2023',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d4bc4a44-4f87-4cb8-8f3d-42a989dd7b9d/blog-thumbnail-tech-review-ac27ecd2-1771225837727.webp',
    excerpt: 'Master your workflow with these hidden features in Docs, Sheets, and Gmail.'
  },
  {
    title: 'Networking Basics: Getting Started with CCNA',
    category: 'IT Tips',
    date: 'Nov 12, 2023',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop',
    excerpt: 'A beginner-friendly guide to understanding routing and switching.'
  },
  {
    title: 'How to Choose the Right Laptop for Content Creation',
    category: 'Reviews',
    date: 'Dec 05, 2023',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2000&auto=format&fit=crop',
    excerpt: 'Specs that matter for video editing, design, and multi-tasking.'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Latest Insights</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Tech Tips & Tutorials
            </h3>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
            View All Posts <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800/40 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-600/10 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                  Read Article <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How SaaS Solutions Are Transforming Business Operations',
    excerpt: 'Discover how modern SaaS platforms are revolutionizing the way businesses operate and driving efficiency across industries.',
    category: 'Industry Insights',
    date: 'May 15, 2023',
    author: 'Alex Morgan',
    authorRole: 'CEO & Founder',
    authorImage: '/team/team-1.jpg',
    image: '/blog/blog-1.jpg',
    slug: 'how-saas-solutions-are-transforming-business-operations'
  },
  {
    id: 2,
    title: 'The Future of Cloud Computing: Trends to Watch',
    excerpt: 'Explore the emerging trends in cloud computing that are set to shape the future of technology and business infrastructure.',
    category: 'Technology',
    date: 'April 28, 2023',
    author: 'Samantha Lee',
    authorRole: 'CTO',
    authorImage: '/team/team-2.jpg',
    image: '/blog/blog-2.jpg',
    slug: 'the-future-of-cloud-computing-trends-to-watch'
  },
  {
    id: 3,
    title: 'Maximizing ROI with Data-Driven Decision Making',
    excerpt: 'Learn how leveraging data analytics can help your business make better decisions and achieve a higher return on investment.',
    category: 'Business Strategy',
    date: 'April 10, 2023',
    author: 'Marcus Johnson',
    authorRole: 'Head of Product',
    authorImage: '/team/team-3.jpg',
    image: '/blog/blog-3.jpg',
    slug: 'maximizing-roi-with-data-driven-decision-making'
  },
  {
    id: 4,
    title: 'The Importance of User Experience in SaaS Design',
    excerpt: 'Understand why user experience is critical to the success of SaaS products and how to design with the user in mind.',
    category: 'Design',
    date: 'March 22, 2023',
    author: 'Priya Patel',
    authorRole: 'Lead Designer',
    authorImage: '/team/team-4.jpg',
    image: '/blog/blog-4.jpg',
    slug: 'the-importance-of-user-experience-in-saas-design'
  },
  {
    id: 5,
    title: 'Building a Successful SaaS Marketing Strategy',
    excerpt: 'Discover effective marketing strategies specifically tailored for SaaS companies looking to grow their customer base.',
    category: 'Marketing',
    date: 'March 5, 2023',
    author: 'David Kim',
    authorRole: 'Marketing Director',
    authorImage: '/team/team-5.jpg',
    image: '/blog/blog-5.jpg',
    slug: 'building-a-successful-saas-marketing-strategy'
  },
  {
    id: 6,
    title: 'Customer Success: The Key to SaaS Retention',
    excerpt: 'Learn why customer success is crucial for SaaS businesses and strategies to improve customer retention rates.',
    category: 'Customer Success',
    date: 'February 18, 2023',
    author: 'Elena Rodriguez',
    authorRole: 'Customer Success Manager',
    authorImage: '/team/team-6.jpg',
    image: '/blog/blog-6.jpg',
    slug: 'customer-success-the-key-to-saas-retention'
  }
];

const categories = [
  'All',
  'Industry Insights',
  'Technology',
  'Business Strategy',
  'Design',
  'Marketing',
  'Customer Success'
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and industry trends from the Kytzo team.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 relative">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No blog posts found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 
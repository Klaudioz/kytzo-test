'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Smartphone 
} from 'lucide-react';

const features = [
  {
    icon: <BarChart3 size={24} className="text-indigo-600" />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with our powerful analytics tools that help you make data-driven decisions.'
  },
  {
    icon: <Zap size={24} className="text-indigo-600" />,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized platform built for speed and efficiency.'
  },
  {
    icon: <Shield size={24} className="text-indigo-600" />,
    title: 'Enterprise Security',
    description: 'Rest easy knowing your data is protected with our enterprise-grade security measures.'
  },
  {
    icon: <Users size={24} className="text-indigo-600" />,
    title: 'Team Collaboration',
    description: 'Enhance teamwork with collaborative tools designed to boost productivity and communication.'
  },
  {
    icon: <Globe size={24} className="text-indigo-600" />,
    title: 'Global Reach',
    description: 'Connect with customers worldwide through our globally distributed infrastructure.'
  },
  {
    icon: <Smartphone size={24} className="text-indigo-600" />,
    title: 'Mobile Friendly',
    description: 'Access your dashboard and tools from any device with our responsive mobile-first design.'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform offers everything you need to grow your business and streamline your operations.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 
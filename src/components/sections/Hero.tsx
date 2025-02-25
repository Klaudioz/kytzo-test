'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-100 opacity-50"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-indigo-100 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Innovative SaaS Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empower your business with our cutting-edge SaaS platform designed to streamline operations, boost productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src="/hero-illustration.svg"
                alt="Kytzo SaaS Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
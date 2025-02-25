'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Kytzo's platform has completely transformed how we manage our business operations. The analytics tools are incredibly powerful and have helped us make better decisions.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "/avatars/avatar-1.jpg"
  },
  {
    id: 2,
    content: "We've tried several SaaS solutions before, but none have been as comprehensive and user-friendly as Kytzo. The customer support is also exceptional.",
    author: "Michael Chen",
    position: "CTO, Innovate Labs",
    avatar: "/avatars/avatar-2.jpg"
  },
  {
    id: 3,
    content: "The ROI we've seen since implementing Kytzo's solution has been remarkable. Our team productivity has increased by 35% and our customer satisfaction scores are at an all-time high.",
    author: "Jessica Williams",
    position: "Operations Director, Global Solutions",
    avatar: "/avatars/avatar-3.jpg"
  },
  {
    id: 4,
    content: "What impressed me most about Kytzo is how they were able to tailor their solution to our specific needs. It feels like it was built just for us.",
    author: "David Rodriguez",
    position: "Founder, Startup Ventures",
    avatar: "/avatars/avatar-4.jpg"
  },
  {
    id: 5,
    content: "The security features of Kytzo's platform gave us the confidence to move our entire operation to the cloud. It's been a game-changer for our business.",
    author: "Emma Thompson",
    position: "Security Officer, SecureTech",
    avatar: "/avatars/avatar-5.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    // Auto-advance the carousel
    intervalRef.current = setInterval(nextTestimonial, 6000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextTestimonial]);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextTestimonial, 6000);
    }
  };

  const handlePrev = () => {
    prevTestimonial();
    resetInterval();
  };

  const handleNext = () => {
    nextTestimonial();
    resetInterval();
  };

  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 text-indigo-200">
            <Quote size={80} />
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 relative z-10">
            <div className="min-h-[200px]">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 relative">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetInterval();
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 md:-left-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-indigo-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 md:-right-6">
            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-indigo-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
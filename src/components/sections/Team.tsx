'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const teamMembers = [
  {
    id: 1,
    name: 'Alex Morgan',
    position: 'CEO & Founder',
    bio: 'Alex has over 15 years of experience in the tech industry and founded Kytzo with a vision to revolutionize SaaS solutions.',
    image: '/team/team-1.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 2,
    name: 'Samantha Lee',
    position: 'CTO',
    bio: 'Samantha leads our technical team with her expertise in cloud architecture and software development.',
    image: '/team/team-2.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    position: 'Head of Product',
    bio: 'Marcus ensures our products meet the highest standards of quality and user experience.',
    image: '/team/team-3.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 4,
    name: 'Priya Patel',
    position: 'Lead Designer',
    bio: 'Priya brings our products to life with her innovative designs and attention to detail.',
    image: '/team/team-4.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 5,
    name: 'David Kim',
    position: 'Marketing Director',
    bio: 'David drives our marketing strategies to connect our solutions with businesses worldwide.',
    image: '/team/team-5.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 6,
    name: 'Elena Rodriguez',
    position: 'Customer Success Manager',
    bio: 'Elena ensures our clients get the most value from our platform and provides exceptional support.',
    image: '/team/team-6.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  }
];

const Team = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The talented people behind Kytzo who work tirelessly to provide you with the best SaaS solutions.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <motion.div 
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-3">
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                      <a 
                        href={member.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <FaTwitter size={16} />
                      </a>
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <FaGithub size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-indigo-600 transition-colors border border-gray-200"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-indigo-600 transition-colors border border-gray-200"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 
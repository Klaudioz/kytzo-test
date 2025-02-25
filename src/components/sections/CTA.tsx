'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const CTA = () => {
  return (
    <section className="py-20 bg-indigo-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-indigo-500 opacity-50"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-indigo-500 opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust Kytzo to power their growth. Get started today and see the difference our platform can make.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                href="/contact" 
                size="lg" 
                variant="secondary"
                className="font-semibold"
              >
                Work with us
              </Button>
              <Button 
                href="/about" 
                size="lg" 
                variant="outline"
                className="text-white border-white hover:bg-indigo-700 hover:border-indigo-700"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 
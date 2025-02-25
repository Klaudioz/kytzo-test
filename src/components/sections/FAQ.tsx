'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is Kytzo and how can it help my business?',
    answer: 'Kytzo is a comprehensive SaaS platform designed to help businesses streamline operations, improve productivity, and drive growth. Our solution offers advanced analytics, team collaboration tools, and enterprise-grade security to help your business succeed in the digital landscape.'
  },
  {
    question: 'How much does Kytzo cost?',
    answer: 'Kytzo offers flexible pricing plans to suit businesses of all sizes. We have a free tier for small teams, and paid plans starting at $29/month. Enterprise plans with custom features and dedicated support are also available. Contact our sales team for a personalized quote.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial on all our paid plans. No credit card is required to start your trial, and you can cancel at any time. This gives you full access to all features so you can evaluate if Kytzo is the right fit for your business.'
  },
  {
    question: 'How secure is my data with Kytzo?',
    answer: 'Security is our top priority. Kytzo employs enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with industry standards like GDPR and SOC 2. Your data is stored in secure, redundant data centers with 99.9% uptime.'
  },
  {
    question: 'Can I integrate Kytzo with my existing tools?',
    answer: 'Absolutely! Kytzo offers seamless integration with popular business tools including Slack, Microsoft 365, Google Workspace, Salesforce, and many more. We also provide a robust API for custom integrations with your proprietary systems.'
  },
  {
    question: 'What kind of support does Kytzo offer?',
    answer: 'We provide comprehensive support across all plans. This includes detailed documentation, video tutorials, and a knowledge base. Paid plans include email support with 24-hour response times, while higher-tier plans offer live chat and dedicated account managers.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We&apos;re here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
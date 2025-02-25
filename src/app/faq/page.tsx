import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function FAQPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about Kytzo and our services.
          </p>
        </div>
      </div>
      
      <FAQ />
      <CTA />
    </div>
  );
} 
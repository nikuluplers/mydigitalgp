import React from 'react';
import Button from './Button';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Register online",
      image: "https://picsum.photos/id/64/400/300"
    },
    {
      number: "02",
      title: "Submit an online consultation",
      image: "https://picsum.photos/id/101/400/300"
    },
    {
      number: "03",
      title: "Speak to an NHS GP",
      image: "https://picsum.photos/id/342/400/300"
    }
  ];

  return (
    <section className="py-20 bg-blue-50/50">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-700 uppercase mb-2 block">How It Works</span>
          <h2 className="text-4xl font-bold text-[#002f5c] mb-6">Getting started is simple</h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            Book an NHS GP appointment in minutes and leave waiting rooms behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-purple-700 mr-4">{step.number}</span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block h-[2px] bg-gray-200 flex-grow ml-4"></div>
                )}
              </div>
              <h3 className="text-2xl font-normal text-[#002f5c] mb-6">{step.title}</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square md:aspect-auto md:h-64">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
            <Button variant="primary">Register Now</Button>
            <Button variant="secondary">Login</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
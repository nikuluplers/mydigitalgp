import React from 'react';
import Button from './Button';

const About: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Buttons above card */}
        <div className="flex gap-4 mb-12">
           <Button variant="primary" className="shadow-none">Register Now</Button>
           <Button variant="secondary">Login</Button>
        </div>

        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col lg:flex-row relative">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-5/12 p-8 md:p-16 flex flex-col justify-center bg-white z-10">
            <span className="text-xs font-bold tracking-widest text-purple-700 uppercase mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002f5c] mb-6">Why we're here</h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We created MyDigitalGP to make NHS care simple, fast, and accessible. No waiting rooms or fuss - just trusted care at your fingertips.
            </p>
            
            <div>
              <Button variant="primary" className="px-8">About Us</Button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-7/12 relative min-h-[400px]">
            {/* Background design elements */}
            <div className="absolute inset-0 bg-gray-100">
               <img 
                  src="https://picsum.photos/id/338/1000/800" 
                  alt="Woman using phone"
                  className="w-full h-full object-cover object-top"
                />
            </div>
            
             {/* Gradient Overlay for style */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
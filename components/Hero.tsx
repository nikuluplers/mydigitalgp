import React from 'react';
import Button from './Button';
import { NHSLogo, BrandLogo } from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#eef2f6]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[10%] w-[40%] h-[60%] rounded-full bg-blue-200/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <BrandLogo />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002f5c] leading-[1.1]">
              Your NHS GP,<br />
              at your fingertips
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-md">
              Trusted care, wherever you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-8">
                Register Now
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto text-lg px-8">
                Login
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
             {/* NHS Tag */}
            <div className="absolute top-4 right-4 z-20 flex flex-col items-end">
                 <NHSLogo className="text-3xl px-3 py-1" />
                 <span className="text-white font-medium text-sm mt-1 drop-shadow-md">Providing NHS services</span>
            </div>

            <div className="relative rounded-bl-[100px] overflow-hidden shadow-2xl">
                {/* Main Image */}
                <img 
                  src="https://picsum.photos/id/1053/800/800" 
                  alt="Smiling man on phone" 
                  className="w-full h-[500px] lg:h-[600px] object-cover object-center"
                />
                
                {/* Decorative overlay lines/gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002f5c]/40 to-transparent mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
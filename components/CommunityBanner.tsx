import React from 'react';
import Button from './Button';

const CommunityBanner: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/158/1600/900" 
          alt="Community background" 
          className="w-full h-full object-cover"
        />
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-between">
        
        {/* Text Content */}
        <div className="max-w-2xl text-white mb-20">
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            We're proud to make a real difference in communities across England. From delivering essential services to innovating for better outcomes, our work touches thousands of lives every day.
          </p>
        </div>

        {/* Floating Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl mt-8">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#8c4d9f] mb-1">Have any questions?</h3>
                <p className="text-xl text-[#002f5c]">Get in touch with our team</p>
            </div>
            <Button variant="primary" className="!px-10">About Us</Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityBanner;
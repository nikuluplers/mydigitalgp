import React from 'react';
import { Smartphone, FileText, Shield, MapPin } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-[#002f5c]" />,
      title: "Book NHS GP appointments online",
      description: "Need help from your NHS GP? Submit an online consultation in just a few clicks, at a time that suits you."
    },
    {
      icon: <FileText className="w-8 h-8 text-[#002f5c]" />,
      title: "Manage Prescriptions",
      description: "Order and track your prescriptions easily, all in one secure place."
    },
    {
      icon: <Shield className="w-8 h-8 text-[#002f5c]" />,
      title: "Access secure medical advice",
      description: "Get trusted NHS guidance and support through a safe, confidential platform."
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#002f5c]" />,
      title: "Your NHS care, made convenient",
      description: "Get support from an NHS GP whether you're at home, at work, or on the go."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-purple-700 uppercase mb-2 block">At Your Fingertips</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002f5c]">What MyDigitalGP does differently</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="shrink-0 p-3 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-normal text-[#002f5c]">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { Camera, Film, Users, Video, Palette, Megaphone } from 'lucide-react';

const services = [
  {
    icon: <Camera className="w-10 h-10 text-red-500" />,
    title: "Corporate Films",
    description: "Compelling corporate videos that effectively communicate your brand's story and values to stakeholders."
  },
  {
    icon: <Film className="w-10 h-10 text-red-500" />,
    title: "TV Commercials",
    description: "Creative and impactful TV commercials that capture attention and drive results for your brand."
  },
  {
    icon: <Video className="w-10 h-10 text-red-500" />,
    title: "Product Videos",
    description: "High-quality product videos that showcase your offerings in the best possible light."
  },
  {
    icon: <Palette className="w-10 h-10 text-red-500" />,
    title: "Creative Content",
    description: "Engaging digital content that resonates with your target audience across all platforms."
  },
  {
    icon: <Megaphone className="w-10 h-10 text-red-500" />,
    title: "Brand Films",
    description: "Strategic brand films that tell your story and connect with your audience emotionally."
  },
  {
    icon: <Users className="w-10 h-10 text-red-500" />,
    title: "Event Coverage",
    description: "Professional event documentation that captures the essence and energy of your occasions."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-gradient">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-black/50 p-8 rounded-2xl hover:bg-black/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
            >
              <div className="animate-float">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2 group-hover:text-red-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
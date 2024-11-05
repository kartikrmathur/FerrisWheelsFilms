import React, { useState } from 'react';

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80",
    title: "Barbeque Nation",
    category: "Commercial",
    description: "A mouth-watering campaign that brought the sizzle to the screen"
  },
  {
    image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&q=80",
    title: "Hyatt Place",
    category: "Brand Film",
    description: "Capturing luxury and comfort in every frame"
  },
  {
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80",
    title: "Prestige Group",
    category: "Corporate Film",
    description: "Elevating real estate through cinematic storytelling"
  },
  {
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80",
    title: "Marriott Hotels",
    category: "Commercial",
    description: "Where luxury meets unforgettable experiences"
  },
  {
    image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&q=80",
    title: "Brigade Group",
    category: "Brand Film",
    description: "Building tomorrow's landmarks, today"
  },
  {
    image: "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?auto=format&fit=crop&q=80",
    title: "Phoenix Marketcity",
    category: "Commercial",
    description: "Retail therapy never looked this good"
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Featured Work</h2>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                ? 'bg-red-500 text-white animate-pulse-glow'
                : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer transform transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                  transition-all duration-300 flex flex-col justify-end p-6
                  ${hoveredItem === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <h3 className="text-2xl font-bold mb-2 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  {item.title}
                </h3>
                <p className="text-red-500 font-semibold mb-2 transform translate-y-2 transition-transform duration-300 delay-75 group-hover:translate-y-0">
                  {item.category}
                </p>
                <p className="text-gray-300 transform translate-y-2 transition-transform duration-300 delay-100 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
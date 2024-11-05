import React from 'react';

const clients = [
  {
    name: "Microsoft",
    logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80",
  },
  {
    name: "Google",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
  },
  {
    name: "Amazon",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80",
  },
  {
    name: "Apple",
    logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80",
  },
  {
    name: "Netflix",
    logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80",
  },
  {
    name: "Meta",
    logo: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?auto=format&fit=crop&q=80",
  }
];

export default function Clients() {
  return (
    <section id="Our Client" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-12 text-center">Our Clients</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          We've had the privilege of working with some of the world's most innovative companies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
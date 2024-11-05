import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 hero-clip bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-7xl font-bold leading-tight animate-slide-up">
              TELL YOUR
              <br />
              <span className="text-stroke">STORY</span>
              <br />
              THROUGH FILM
            </h1>
            <p
              className="text-xl text-gray-600 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Full service advertising agency dedicated to implementing
              traditional and non-traditional advertising solutions to expand
              your brand across a vast range of media.
            </p>
            <button
              className="group flex items-center space-x-2 text-lg font-semibold animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <span>View Latest Work</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&q=80"
              alt="Hero"
              className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <p className="text-sm font-semibold text-gray-500">
                Latest Project
              </p>
              <h3 className="text-xl font-bold mt-1">Hyatt Place Campaign</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

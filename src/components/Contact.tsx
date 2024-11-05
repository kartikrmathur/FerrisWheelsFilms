import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-6xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to bring your story to life? We'd love to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Call Us</p>
                  <p className="font-bold">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email Us</p>
                  <p className="font-bold">hello@ferriswheelsfilms.in</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-red-50 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Visit Us</p>
                  <p className="font-bold">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
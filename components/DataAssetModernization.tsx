import React from 'react';
import { Cloud, Server, Database, Shield, ArrowRight, BarChart3, Zap } from 'lucide-react';
import PageCarrerSection from './PageCarrerSection';
import Footer from './Footer';
import Link from 'next/link';

const DataAssestModernization = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-18">

      <section className="bg-[#753a88] text-white py-40">
        <div className="max-w-8xl w-[95%] mx-auto px-4 sm:px-6 lg:px-8  p-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center p-4">
            <div className=' col-span-2'>
              <h1 className="text-4xl lg:text-5xl font-medium mb-6">
                Data Asset Modernization
              </h1>
              <p className="text-base text-purple-100 leading-relaxed">
                We visualize building a next-gen powerful data asset to offer a robust and faster tomorrow for the stakeholders!
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="relative  col-span-1">

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform rotate-12">
                  <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs">Cloud Platform</div>
                  </div>
                  <div className="w-36 h-2 bg-white/20 rounded-full mx-auto mt-2"></div>
                </div>
                

                <div className="absolute -left-16 top-8 bg-white/10 backdrop-blur-sm p-3 rounded-lg transform -rotate-12">
                  <div className="w-12 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-md flex flex-col justify-between p-2">
                    <div className="w-full h-1 bg-white/30 rounded"></div>
                    <div className="space-y-1">
                      <div className="w-full h-1 bg-white/50 rounded"></div>
                      <div className="w-3/4 h-1 bg-white/50 rounded"></div>
                      <div className="w-1/2 h-1 bg-white/50 rounded"></div>
                    </div>
                    <div className="w-6 h-1 bg-white/30 rounded mx-auto"></div>
                  </div>
                </div>


                <div className="absolute -top-8 -right-8">
                  <Cloud className="h-16 w-16 text-white/30" />
                </div>
                <div className="absolute -bottom-4 -left-8">
                  <Cloud className="h-12 w-12 text-white/20" />
                </div>

                <div className="absolute top-12 -right-12">
                  <div className="flex items-center space-x-2 text-white/60">
                    <div className="w-8 h-0.5 bg-white/60"></div>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 relative bottom-20">
        <div className="max-w-8xl w-full md:w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-5 px-7 md:p-10 md:px-15 lg:p-18 lg:px-20">
            <div className="prose max-w-none">
              <p className="text-[#343a40] text-base leading-relaxed mb-4">
               In today’s era, data is really the new oil! Infinite amount of data is generated every minute in countless formats.
              With so much data scattered all over, many companies are unable to utilize the data in a proper manner.
              Modernizing data is all about extending, retaining, and reusing the information under these layers.
              It involves creating a scalable and flexible data stack without much complexities and restrictions.
              </p>
              
              <p className="text-[#343a40] text-base leading-relaxed mb-4 font-semibold">
                Why should you modernize your data? 
              </p>
              
              <p className="text-[#343a40] text-base leading-relaxed mb-4">
                Data asset modernization is the key to enable enhanced compliance. 
                In addition, it also assures cost-efficiency and the potential to enlighten the stakeholders with extensive business insights and revolutionary analytics capabilities.
              </p>
              
              <h3 className="text-base  text-[#343a40] mb-3">
                With the latest data readily available with the help of data asset modernization, many companies can quickly adapt to the rapidly changing market and outsmart their rivals with ease.
              </h3>
              
              <p className="text-[#343a40] text-base leading-relaxed mb-5">
                Many companies are revamping their data environment in response to the wide changes in the data landscape. Making the most of the available data is also a critical component to success.
              </p>
              
              <Link href='/contact'>
              <button className="bg-[#753a88] text-white px-6 py-3 rounded-lg text-lg transition-colors">
                Have a question?
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Modernization Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your data infrastructure for better insights and competitive advantage
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Centralized Data</h3>
            <p className="text-gray-600 text-sm">Unified data repository for better accessibility and management</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
            <p className="text-gray-600 text-sm">Real-time insights and predictive analytics capabilities</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Security</h3>
            <p className="text-gray-600 text-sm">Enhanced data protection and compliance standards</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Processing</h3>
            <p className="text-gray-600 text-sm">Improved data processing speed and performance</p>
          </div>
        </div>
      </div>
    </section>
        <PageCarrerSection/>
        <Footer/>
    </div>
  );
};

export default DataAssestModernization;
import React from 'react';
import { Cloud, Server, Database, Shield, ArrowRight, BarChart3, Zap } from 'lucide-react';
import PageCarrerSection from './PageCarrerSection';
import Footer from './Footer';
import Link from 'next/link';
import FilterJobs from './FilterJobs';

const Careers = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-18">

      <section className="bg-[#753a88] text-white py-40">
        <div className="max-w-8xl w-[95%] mx-auto px-4 sm:px-6 lg:px-8  p-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center p-4">
            <div className=' col-span-2'>
              <h1 className="text-4xl lg:text-[55px] tracking-normal font-medium mb-6">
                Associate. Empower. Nurture. Grow.
              </h1>
              <p className="text-base text-purple-100 leading-relaxed">
                Our strong workforce is our biggest strength! Join us and help in building a tech-empowered community for the world.
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
                    <FilterJobs/>
            </div>
          </div>
        </div>
      </section>

        <Footer/>
    </div>
  );
};

export default Careers;
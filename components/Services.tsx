import React from 'react';
import { Cloud, Database, Laptop, Users, ChevronDown } from 'lucide-react';
import Footer from './Footer';
import Image from 'next/image';
import PageCarrerSection from './PageCarrerSection';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-18">

      <section className="bg-[#154fa1] text-white py-30">
        <div className="max-w-8xl w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl tracking-wide mb-6">
                Qualified Development<br />
                Resources. At a Click!
              </h1>
              <p className="text-base mb-8 ">
                Developing innovative and revolutionary business solutions is our passion! From data modernization to IT staffing, you can depend on Strong Point for the most valued solutions.
              </p>
              <Link
               href='/contact'>
                <button className="bg-white text-[#154fa1] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get in touch
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500/30 p-4 rounded-lg">
                    <Database className="h-8 w-8 mb-2" />
                    <div className="text-sm">Data Solutions</div>
                  </div>
                  <div className="bg-purple-500/30 p-4 rounded-lg">
                    <Cloud className="h-8 w-8 mb-2" />
                    <div className="text-sm">Cloud Services</div>
                  </div>
                  <div className="bg-green-500/30 p-4 rounded-lg">
                    <Laptop className="h-8 w-8 mb-2" />
                    <div className="text-sm">Development</div>
                  </div>
                  <div className="bg-orange-500/30 p-4 rounded-lg">
                    <Users className="h-8 w-8 mb-2" />
                    <div className="text-sm">Consulting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-0 mb-0 space-y-15 relative bottom-32 ">
        

        <section className="bg-white rounded-2xl shadow-2xl p-8 py-20 lg:p-12 lg:py-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-medium text-[#343a40] mb-6">Data Asset Modernization</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We help organizations modernize their data infrastructure and analytics capabilities. 
                Our expert consultants implement secure, scalable, and effectively managed data assets 
                while ensuring accessibility to stakeholders. We ensure democratization of data to create 
                a trusted, secure, and effectively managed data asset while potentially available to the right 
                people at the right time.
              </p>
            <Link
            href='/data-asset-modernization'>
              <button className="bg-[#154fa1] text-white px-3 py-1 md:px-6 md:py-3 rounded-lg font-light md:font-medium text-lg md:text-xl md:tracking-wide transition-colors">
                Learn more
              </button>
            </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Database className="h-12 w-12 text-blue-600 mb-2" />
                    <div className="text-sm font-medium">Data Lakes</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-12 bg-orange-500 rounded mb-2"></div>
                    <div className="text-sm font-medium">Analytics</div>
                  </div>
                </div>
                <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="h-8 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-white rounded-2xl shadow-2xl p-8 py-20 lg:p-12 lg:py-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl md:text-6xl font-medium text-[#343a40] mb-6">Cloud Migration</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Migration to the cloud has become a key enabler for companies looking to achieve digital 
                transformations. We collaborate with you, understand your requirements, and create the 
                perfect cloud strategy by leveraging our rich experience with latest technologies.
              </p>
            <Link
            href='/cloud-migration'>
              <button className="bg-[#154fa1] text-white px-3 py-1 md:px-6 md:py-3 rounded-lg font-light md:font-medium text-lg md:text-xl md:tracking-wide transition-colors">
                Learn more
              </button>
            </Link>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-purple-50 to-blue-100 p-8 rounded-2xl">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform rotate-12">
                      <Cloud className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <Laptop className="h-8 w-8 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-2xl p-8 py-20 lg:p-12 lg:py-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-medium text-[#343a40] mb-6">Application Modernization</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Migrate your applications to a cloud and standards-based infrastructure with minimal 
                disruption and conflict as our team will assist you in reducing capital spends 
                for cloud strategic and manage governance advanced through enhanced modernization 
                technology.
              </p>
            <Link
            href='/application-modernization'>
             <button className="bg-[#154fa1] text-white px-3 py-1 md:px-6 md:py-3 rounded-lg font-light md:font-medium text-lg md:text-xl md:tracking-wide transition-colors">
              Learn more
              </button>
            </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-100 p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
                      <Laptop className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-8 bg-green-200 rounded"></div>
                      <div className="h-8 bg-blue-200 rounded"></div>
                      <div className="h-8 bg-purple-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-white rounded-2xl shadow-2xl p-8 py-20 lg:p-12 lg:py-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl md:text-6xl font-medium text-[#343a40] mb-6">Professional Services</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Standing out from talent can be like finding a gem in the desert! If you think about 
                developing new or consulting us on how to help you with our development and consulting services 
                also that, we are more than capable of providing complete and comprehensive services to let.
              </p>
            <Link
            href='/professional-services'>
             <button className="bg-[#154fa1] text-white px-3 py-1 md:px-6 md:py-3 rounded-lg font-light md:font-medium text-lg md:text-xl md:tracking-wide transition-colors">
                Learn more
              </button>
            </Link>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Users className="h-12 w-12 text-blue-600 mb-2" />
                    <div className="text-sm font-medium">Expert Consultants</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="h-8 w-8 bg-green-500 rounded mb-2"></div>
                      <div className="text-xs">Development</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="h-8 w-8 bg-purple-500 rounded mb-2"></div>
                      <div className="text-xs">Consulting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

        <PageCarrerSection/>
        <Footer/>
    </div>
  );
};

export default Services;
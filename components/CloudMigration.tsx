import React from 'react';
import { Cloud, Server, Database, Shield, ArrowRight } from 'lucide-react';
import PageCarrerSection from './PageCarrerSection';
import Footer from './Footer';

const CloudMigration = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-18">

      <section className="bg-[#753a88] text-white py-40">
        <div className="max-w-8xl w-[95%] mx-auto px-4 sm:px-6 lg:px-8  p-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center p-4">
            <div className=' col-span-2'>
              <h1 className="text-4xl lg:text-5xl font-medium mb-6">
                Cloud Migration
              </h1>
              <p className="text-base text-purple-100 leading-relaxed">
                We understand your requirements and create the perfect cloud strategy by blending our rich 
                experience with the latest technology!
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
                
                {/* Mobile Device */}
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

                {/* Cloud Elements */}
                <div className="absolute -top-8 -right-8">
                  <Cloud className="h-16 w-16 text-white/30" />
                </div>
                <div className="absolute -bottom-4 -left-8">
                  <Cloud className="h-12 w-12 text-white/20" />
                </div>

                {/* Data Flow Arrows */}
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
        <div className="max-w-8xl w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 px-18 lg:p-18 lg:px-20">
            <div className="prose max-w-none">
              <p className="text-[#343a40] text-base leading-relaxed mb-4">
                Cloud migration is a process through which a company's digital resources, services, and assets are 
                deployed in the cloud. With excellent features and an array of benefits for a business, the cloud 
                computing trend has seen exponential growth in the recent years.
              </p>
              
              <p className="text-[#343a40] text-base leading-relaxed mb-4">
                Through our outstanding cloud migration services, we help you in determining the approach that work 
                best for your organization to meet the business goals.
              </p>
              
              <p className="text-[#343a40] text-base leading-relaxed mb-4">
                Furthermore, COVID-19 has prompted many companies to evolve from just a 'business' to a cloud business 
                at an accelerated pace. With the emergence of the pandemic, companies shifted to a remote working 
                environment, which necessitated the use of cloud to a great extent. This aspect is urging many 
                companies to embrace cloud migration services.
              </p>
              
              <h3 className="text-base  font-semibold text-[#343a40] mb-3">
                Why opt for Strong Point cloud migration services?
              </h3>
              
              <p className="text-[#343a40] text-base leading-relaxed mb-5">
                Through storing the business information and data centrally, the cloud offers robust security as 
                compared to traditional data centers. Furthermore, we also provide built-in security features such 
                as periodic updates, security analytics, and cross-enterprise visibility.
              </p>
              
              <button className="bg-[#753a88] text-white px-6 py-3 rounded-lg text-lg transition-colors">
                Have a question?
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Migration Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of migrating your infrastructure to the cloud
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Security</h3>
              <p className="text-gray-600 text-sm">Robust security features and compliance standards</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalability</h3>
              <p className="text-gray-600 text-sm">Scale resources up or down based on demand</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
              <p className="text-gray-600 text-sm">Reduce infrastructure costs and maintenance</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">Access data and applications from anywhere</p>
            </div>
          </div>
        </div>
      </section>

        <PageCarrerSection/>
        <Footer/>
    </div>
  );
};

export default CloudMigration;
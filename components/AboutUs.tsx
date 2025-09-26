
import { Cloud, Database, Shield, ArrowRight, BarChart3, Zap } from 'lucide-react';
import PageCarrerSection from './PageCarrerSection';
import Footer from './Footer';

const AboutUS = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-18">

      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Connectors of Innovation and Technology!
              </h1>
              <p className="text-lg text-purple-100 leading-relaxed">
                Our customer-centric approach and experience in adopting and transforming modernization programs for enterprises makes us one of the pioneers in the technology modernization sector!
              </p>
            </div>
            <div className="relative flex justify-center">
             
              <div className="relative">

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

      <section className="py-5 relative bottom-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                In today’s era, data is really the new oil! Infinite amount of data is generated every minute in countless formats. 
                With so much data scattered all over, many companies are unable to utilize the data in a proper manner.
                Modernizing data is all about extending, retaining, and reusing the information under these layers.
                It involves creating a scalable and flexible data stack without much complexities and restrictions.
              </p>
              
              <p className="text-gray-900 text-base font-semibold leading-relaxed mb-6">
                Why should you modernize your data?  
              </p>
              
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Data asset modernization is the key to enable enhanced compliance. In addition, it also assures 
                cost-efficiency and the potential to enlighten the stakeholders with extensive business insights and revolutionary analytics capabilities.
              </p>
              
              <h3 className="text-base text-gray-700 mb-4">
                With the latest data readily available with the help of data asset modernization, many companies can quickly adapt to the rapidly changing market and outsmart their rivals with ease.
              </h3>
              
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Many companies are revamping their data environment in response to the wide changes in the data landscape.
                Making the most of the available data is also a critical component to success.
              </p>
              
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Have a question?
              </button>
            </div>
          </div>
        </div>
      </section>

     
        <PageCarrerSection/>
        <Footer/>
    </div>
  );
};

export default AboutUS;
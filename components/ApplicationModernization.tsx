
import { Cloud, Server, Database, Shield, ArrowRight, Smartphone, Globe, Layers, RefreshCw } from 'lucide-react';
import PageCarrerSection from './PageCarrerSection';
import Footer from './Footer';

const ApplicationModernization = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-18">

    
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Application Modernization
              </h1>
              <p className="text-lg text-purple-100 leading-relaxed">
                Migrate your applications to an ethical and standards-based environment with minimal disruptions!
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose max-w-none">
              <p className="text-gray-700 text-base  leading-relaxed mb-6">
                The IT landscape has transformed extensively over the years.
                Relying on traditional legacy systems can be a deterrent to the growth structure of any organization.
                Updating the existing legacy applications is the need of the hour. Application modernization does just that.
                Instead of developing or deploying a new legacy application, upgrading the existing one proves to be beneficial and consumes less time.
                These benefits are enough to convince any company to invest in application modernization services.
              </p>
              
              <p className="text-gray-900 font-semibold text-base leading-relaxed mb-6">
                 Why choose application modernization?
              </p>
              
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Application modernization assists companies and firms in restructuring their legacy applications to align with the cloud environment. 
                Furthermore, it also offers advantages like scalability, agility, and affordability..
              </p>
              
              <h3 className="text-base  text-gray-700 mb-4">
                Using outdated legacy applications can hinder the overall productivity of an organization. 
                With application modernization, the legacy application gets a new and refreshed user interface, expansive functionalities,
                and cutting-edge features, eventually enhancing productivity and boosting revenues.
              </h3>
              
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                Lastly, when you choose Strong Point, you are opting for the best application modernization services! We develop, manage, and modernize applications with enhanced security across hybrid cloud environments.
              </p>
              
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Have a question?
              </button>
            </div>
          </div>
        </div>
      </section>

<section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Modernization Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Modernize your applications for improved performance, scalability, and user experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Ready</h3>
            <p className="text-gray-600 text-sm">Responsive design for seamless mobile experiences</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600 text-sm">Deploy applications globally with cloud infrastructure</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Microservices</h3>
            <p className="text-gray-600 text-sm">Modular architecture for better maintainability</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Agile Updates</h3>
            <p className="text-gray-600 text-sm">Faster deployment cycles and continuous integration</p>
          </div>
        </div>
      </div>
    </section>

        <PageCarrerSection/>
        <Footer/>
    </div>
  );
};

export default ApplicationModernization;
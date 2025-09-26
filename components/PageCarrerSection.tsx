import Image from "next/image";


export default function PageCarrerSection() {
  return (
    <>
    <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
           <div className='flex justify-center mb-6'>
                 <Image src='/ASLogo.png' alt='adamSoftwareLogo' width={350} height={100} className="object-cover block"/>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career with Adam Software Services</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We always keep our 'WORK-WORK' on the scale which permits individuals who are equally excited and curious to 
            dream big and help move our technologies.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View all openings
          </button>
        </div>
      </section>
    </>
  )
}

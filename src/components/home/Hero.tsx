import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            讓專業設計與開發，為您打造獨特品牌體驗
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            我們是一家專注於網站開發和設計的公司，為您提供從概念到實現的全方位服務。我們幫助企業建立專業的數位形象，提升品牌價值。
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/portfolio" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
            >
              查看作品集
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-colors duration-300 text-center"
            >
              關於我們
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
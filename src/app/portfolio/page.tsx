import Portfolio from '@/components/portfolio/Portfolio';

export const metadata = {
  title: '作品集 | 設計公司',
  description: '瀏覽我們的作品集，了解我們在網站開發與設計方面的專業技能和創意。',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">我們的作品集</h1>
          <p className="text-xl max-w-3xl mx-auto">
            探索我們的最新作品，展示我們在網站開發與設計領域的專業能力與創意
          </p>
        </div>
      </section>
      
      <Portfolio />
    </div>
  );
}
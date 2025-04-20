import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Team from '@/components/home/Team';
import FeaturedWorks from '@/components/home/FeaturedWorks';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <FeaturedWorks />
      <Team />
    </div>
  );
}
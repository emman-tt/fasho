import Hero from '../sections/Hero';
import CuratedLooks from '../sections/CuratedLooks';
import StylePicks from '../sections/StylePicks';
import StyleList from '../sections/StyleList';
import CreateOutfit from '../sections/CreateOutfit';
import GiantType from '../sections/GiantType';
import BestSellers from '../sections/BestSellers';
import Elevate from '../sections/Elevate';
import FashionBanner from '../sections/FashionBanner';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CuratedLooks />
      <StylePicks />
      <StyleList />
      <CreateOutfit />
      <GiantType />
      <BestSellers />
      <Elevate />
      <FashionBanner />
    </main>
  );
}

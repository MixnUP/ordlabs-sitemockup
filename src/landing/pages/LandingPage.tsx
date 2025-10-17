import LandingLayout from '../layouts/LandingLayout';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { BrandIdentity } from '../sections/BrandIdentity';
import { BrandTone } from '../sections/BrandTone';
import { VisualIdentity } from '../sections/VisualIdentity';
import { ColorUsage } from '../sections/ColorUsage';
import { HeroVariant1 } from '../sections/HeroVariant1';
import { HeroVariant2 } from '../sections/HeroVariant2';
import { HeroVariant3 } from '../sections/HeroVariant3';
import { HeroVariant4 } from '../sections/HeroVariant4';
import { HeroVariant5 } from '../sections/HeroVariant5';
import { HeroVariant6 } from '../sections/HeroVariant6';
import { ColorHarmony } from '../sections/ColorHarmony';
import { PracticalExamples } from '../sections/PracticalExamples';

export function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <About />
      <BrandIdentity />
      <BrandTone />
      <VisualIdentity />
      <ColorUsage />
      <HeroVariant1 />
      <HeroVariant2 />
      <HeroVariant3 />
      <HeroVariant4 />
      <HeroVariant5 />
      <HeroVariant6 />
      <ColorHarmony />
      <PracticalExamples />
    </LandingLayout>
  );
}
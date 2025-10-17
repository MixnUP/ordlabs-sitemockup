import { FadeIn } from '@/components/ui/fade-in';
import { HeroVectors } from '@/components/ui/vectors';
import logomark from '@/assets/Tertiary-Logomark.png';

export function Hero() {
  return (
    <section className="w-full bg-background relative">
      <HeroVectors />
      <div className="flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 text-center relative">
        <FadeIn delay={0}>
          <img src={logomark} alt="OrdLabs Tertiary Logomark" className="mx-auto mb-6 w-auto h-40 object-contain" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Crafting <span className="text-primary">Innovation</span>, Empowering <span className="text-primary">Businesses</span>.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mx-auto mt-4 max-w-[600px] text-base text-foreground">
            Empowering small businesses and startups with innovative, scalable, and user-centric digital solutions.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

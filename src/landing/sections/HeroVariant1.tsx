import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, Mail } from 'lucide-react';
import logomark from '@/assets/Tertiary-Logomark.png';

export function HeroVariant1() {
  return (
    <section className="w-full py-20 sm:py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background to-primary/10 animate-gradient-xy"></div>
      <div className="container mx-auto px-4 text-center">
        <FadeIn delay={0}>
          <img src={logomark} alt="OrdLabs Tertiary Logomark" className="mx-auto mb-6 w-auto h-32 object-contain" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-poppins">
            Crafting Innovation,
            <br />
            <span className="text-primary">Empowering Businesses.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mx-auto mt-6 max-w-[700px] text-lg text-foreground/80">
            We build tailored digital solutions that bridge creativity and technology, turning your bold ideas into impactful realities.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">
              Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

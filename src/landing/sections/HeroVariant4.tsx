import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, Star, Sparkles, Satellite } from 'lucide-react';
import logomark from '@/assets/Tertiary-Logomark.png';

export function HeroVariant4() {
  return (
    <section className="w-full py-20 sm:py-32 md:py-40 relative bg-foreground">
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Lucide Icons - More, varied, edge-positioned */}
        <Star className="absolute top-1/4 left-1/4 h-16 w-16 text-primary animate-pulse-subtle animate-float delay-100" />
        <Sparkles className="absolute bottom-1/3 right-1/3 h-12 w-12 text-supportive-accent animate-icon-rotate animate-balance delay-200" />
        <Satellite className="absolute top-1/2 right-1/4 h-20 w-20 text-secondary animate-float-lg animate-icon-bounce delay-300" />
        <Star className="absolute bottom-1/4 left-1/2 h-10 w-10 text-primary animate-pulse-subtle animate-float-sm delay-400" />
        <Sparkles className="absolute top-0 left-1/2 h-8 w-8 text-supportive-accent animate-icon-rotate-slow animate-balance-sm delay-500" />

        {/* Additional icons */}
        <Star className="absolute top-1/3 left-0 h-14 w-14 text-primary animate-float-sm animate-balance-lg delay-600" />
        <Satellite className="absolute bottom-0 right-1/4 h-18 w-18 text-secondary animate-icon-bounce animate-float-lg delay-700" />
        <Sparkles className="absolute top-1/4 right-0 h-10 w-10 text-supportive-accent animate-balance-sm animate-pulse-subtle delay-800" />
        <Star className="absolute bottom-0 left-1/4 h-12 w-12 text-primary animate-float-lg animate-icon-rotate delay-900" />
        <Satellite className="absolute top-0 left-1/3 h-16 w-16 text-secondary animate-icon-rotate-slow animate-float-sm delay-1000" />
        <Sparkles className="absolute bottom-1/2 left-0 h-8 w-8 text-supportive-accent animate-pulse-subtle animate-balance-lg delay-1100" />
        <Star className="absolute top-1/2 right-0 h-10 w-10 text-primary animate-float animate-icon-bounce delay-1200" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <FadeIn delay={0}>
          <img src={logomark} alt="OrdLabs Tertiary Logomark" className="mx-auto mb-6 w-auto h-24 object-contain filter invert" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-poppins text-background">
            Crafting Innovation,
            <br />
            <span className="text-primary">Empowering Businesses.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mx-auto mt-6 max-w-[600px] text-lg text-background/80">
            We transform bold ideas into impactful digital solutions, empowering businesses to thrive in the modern landscape with cutting-edge technology and user-centric design.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="mt-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-primary/50">
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

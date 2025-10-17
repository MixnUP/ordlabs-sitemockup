import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { PlayCircle } from 'lucide-react';
import logomark from '@/assets/Tertiary-Logomark.png';

export function HeroVariant3() {
  return (
    <section className="w-full py-24 sm:py-40 md:py-56 flex items-center justify-center text-center relative bg-background">
       <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      <div className="container mx-auto px-4">
        <FadeIn delay={0}>
          <img src={logomark} alt="OrdLabs Tertiary Logomark" className="mx-auto mb-20 w-auto h-40 object-contain animate-float-lg animate-balance-sm delay-100 drop-shadow-[0_0_15px_rgba(6,104,226,0.4)]" />
          <h1 className="text-6xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl font-poppins uppercase">
            <span className="block -rotate-2 text-primary animate-float animate-balance-lg delay-200 animate-glow-primary">Build.</span>
            <span className="block rotate-1 text-secondary-foreground">Launch.</span>
            <span className="block -rotate-1 text-supportive-accent animate-float-sm animate-balance delay-300 animate-glow-supportive-accent">Grow.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mx-auto mt-8 max-w-[500px] text-lg text-foreground/70">
            Crafting Innovation, Empowering Businesses.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="mt-10">
            <Button size="lg" variant="secondary">
              Watch Our Reel <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

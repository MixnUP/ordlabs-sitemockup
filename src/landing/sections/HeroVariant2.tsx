import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight } from 'lucide-react';
import Primary from '@/assets/Primary.png';

export function HeroVariant2() {
  return (
    <section className="w-full py-20 sm:py-32 md:py-40 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <FadeIn delay={0}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins">
                Crafting Innovation,
                <br />
                <span className="text-primary">Empowering Businesses.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-6 max-w-[500px] text-lg text-foreground/80">
                We bridge creativity and technical excellence to deliver tailored digital solutions that drive growth and enhance your online presence.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="mt-8">
                <Button size="lg">
                  Join OrdLabs <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </FadeIn>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <FadeIn delay={200}>
              <div className="relative w-full max-w-md h-80 rounded-2xl bg-muted flex items-center justify-center">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full animate-pulse-subtle"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 border-2 border-secondary rounded-2xl animate-icon-rotate"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-supportive-accent/10 rounded-full animate-icon-bounce delay-100"></div>
                <div className="absolute bottom-0 left-0 w-20 h-12 bg-primary/5 rounded-lg animate-pulse-subtle delay-200"></div>
                <div className="absolute top-1/4 -left-4 w-8 h-8 bg-secondary/10 rounded-md animate-pulse-fast delay-300"></div>
                <div className="absolute bottom-1/4 -right-4 w-10 h-10 border-2 border-supportive-accent rounded-full animate-icon-rotate-slow delay-400"></div>
                <div className="absolute top-4 left-1/4 w-6 h-6 border-2 border-primary/50 rounded-sm animate-icon-rotate delay-500"></div>
                <div className="absolute bottom-4 right-1/4 w-14 h-14 border-2 border-secondary/50 rounded-lg animate-icon-rotate-slow delay-600"></div>
                <div className="absolute top-1/3 right-0 w-4 h-4 border border-supportive-accent/50 rounded-full animate-icon-rotate delay-700"></div>
                <div className="absolute top-1/2 left-0 w-10 h-10 border border-primary/30 rounded-md animate-icon-rotate delay-800"></div>
                <div className="absolute top-1/2 right-0 w-12 h-12 border-2 border-secondary/30 rounded-full animate-icon-rotate-slow delay-900"></div>
                <div className="absolute bottom-0 left-1/3 w-8 h-8 border border-supportive-accent/30 rounded-sm animate-icon-rotate delay-1000"></div>
                <div className="absolute top-1/4 right-1/4 w-7 h-7 border-2 border-primary/30 rounded-lg animate-icon-rotate-slow delay-1100"></div>
                <img src={Primary} alt="Primary Logo" className="w-full h-full object-contain p-4" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

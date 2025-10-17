import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight } from 'lucide-react'; // Icons for accents
import logomark from '@/assets/Tertiary-Logomark.png';
import Primary from '@/assets/Primary.png'; // Accent visual

export function HeroVariant6() {
  return (
    <section className="w-full min-h-screen relative bg-eerie-black text-isabelline overflow-hidden flex items-center justify-center py-20 sm:py-32 md:py-40">
      {/* Layered Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-float-lg delay-100"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-70 animate-pulse-subtle delay-200"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-supportive-accent/10 rounded-full filter blur-3xl opacity-70 animate-balance-lg delay-300"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-float-sm delay-400"></div>

      {/* Main Content "Floating Island" */}
      <div className="relative z-10 max-w-4xl mx-auto p-4 sm:p-8 md:p-12 bg-isabelline/10 rounded-xl shadow-2xl backdrop-blur-sm border border-isabelline/20 text-center animate-float-lg delay-500">
        <FadeIn delay={0}>
          <img src={logomark} alt="OrdLabs Tertiary Logomark" className="mx-auto mb-6 w-auto h-20 sm:h-24 object-contain filter invert" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-poppins text-isabelline">
            Crafting Innovation,
            <br />
            <span className="text-primary">Empowering Businesses.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mx-auto mt-4 sm:mt-6 max-w-[600px] text-base sm:text-lg text-isabelline/80">
            We build visionary digital solutions that propel your business forward, blending cutting-edge technology with creative design.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-primary/50">
              Explore Our Vision <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Start Your Project
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Accent Visual - positioned to interact */}
      <FadeIn delay={600}>
        <img src={Primary} alt="Accent Visual" className="hidden lg:block absolute bottom-10 left-10 w-48 h-auto object-contain opacity-30 animate-pulse-subtle delay-700" />
      </FadeIn>
    </section>
  );
}

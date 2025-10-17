import { FadeIn } from '@/components/ui/fade-in';
import { Sparkles, Shapes } from 'lucide-react';
import Primary from '@/assets/Primary.png';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        <Sparkles className="absolute top-1/4 left-1/4 h-16 w-16 text-primary animate-pulse-subtle" />
        <Shapes className="absolute bottom-1/4 right-1/4 h-12 w-12 text-secondary animate-icon-rotate" />
        <Sparkles className="absolute top-1/2 right-1/3 h-10 w-10 text-supportive-accent animate-pulse-subtle delay-100" />
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center relative">
        <FadeIn delay={0}>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Brand Overview</h2>
            <p className="mx-auto mt-4 max-w-3xl text-foreground">
              OrdLabs is a software development company dedicated to crafting innovation and empowering businesses through tailored digital solutions. It bridges creativity, experimentation, and technical excellence to turn bold ideas into real-world applications.
            </p>
            <div className="mt-8 text-left">
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-2 text-foreground">
                Empower small businesses and startups by providing innovative, scalable, and user-centric digital solutions that enhance online presence and operational efficiency.
              </p>
            </div>
            <div className="mt-6 text-left">
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-2 text-foreground">
                To become a trusted digital partner for modern businesses — where innovation meets practicality.
              </p>
            </div>
            <div className="mt-6 text-left">
              <h3 className="text-xl font-semibold">Tagline</h3>
              <p className="mt-2 text-foreground">
                “Crafting Innovation, Empowering Businesses.”
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="flex justify-center">
            <img 
              src={Primary} 
              alt="OrdLabs Primary Logo" 
              className="w-full max-w-[250px] md:max-w-[300px] h-auto object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

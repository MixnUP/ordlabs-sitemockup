import { FadeIn } from '@/components/ui/fade-in';
import { Sparkles, Shapes } from 'lucide-react'; // Reusing AboutVectors for now, can create a new one if needed

export function BrandIdentity() {
  return (
    <section id="brand-identity" className="py-20 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        <Shapes className="absolute top-1/4 right-1/4 h-16 w-16 text-secondary animate-icon-rotate" />
        <Sparkles className="absolute bottom-1/4 left-1/4 h-12 w-12 text-primary animate-pulse-subtle" />
        <Shapes className="absolute top-1/2 left-1/3 h-10 w-10 text-supportive-accent animate-icon-rotate delay-100" />
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center relative">
        <FadeIn delay={0}>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Brand Identity</h2>
            <h3 className="text-xl font-semibold mt-4">Name Origin</h3>
            <p className="mx-auto mt-2 max-w-3xl text-foreground">
              The term “Ord” originates from bored, symbolizing the founder’s philosophy of turning idle moments into innovation.
              Combined with “Labs,” it represents a hub for creativity, experimentation, and discovery in digital development.
            </p>
            <h3 className="text-xl font-semibold mt-4">Core Values</h3>
            <ul className="mx-auto mt-2 max-w-3xl text-foreground list-disc list-inside">
              <li><strong>Innovation</strong> – Always explore better, smarter ways to build.</li>
              <li><strong>Quality</strong> – Deliver solutions with precision and reliability.</li>
              <li><strong>Empowerment</strong> – Help businesses thrive through technology.</li>
              <li><strong>Creativity</strong> – Design experiences that inspire and engage.</li>
              <li><strong>Integrity</strong> – Build with honesty, clarity, and accountability.</li>
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="flex justify-center relative">
            <div className="w-full rounded-lg max-w-md md:max-w-lg h-64 bg-transparent flex items-center justify-center text-primary-foreground text-lg font-semibold relative overflow-hidden">
              <div className="absolute inset-0 radial-gradient-top-left"></div>
              <div className="absolute inset-0 radial-gradient-top-right"></div>
              <div className="absolute inset-0 radial-gradient-bottom-left"></div>
              <div className="absolute inset-0 radial-gradient-bottom-right"></div>
              <p className="text-2xl font-bold text-background z-10">Crafting Innovation</p>
            </div>
            {/* Top-left corner */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary rounded-sm animate-float-sm"></div>
            <div className="absolute -top-5 -left-5 w-6 h-6 bg-secondary rounded-md animate-float"></div>
            <div className="absolute -top-3 left-8 w-3 h-3 bg-supportive-accent rounded-full animate-float-lg"></div>

            {/* Top-right corner */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-sm animate-float-sm"></div>
            <div className="absolute -top-5 -right-5 w-6 h-6 bg-secondary rounded-md animate-float"></div>
            <div className="absolute -top-3 right-8 w-3 h-3 bg-supportive-accent rounded-full animate-float-lg"></div>

            {/* Bottom-left corner */}
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-sm animate-float-sm"></div>
            <div className="absolute -bottom-5 -left-5 w-6 h-6 bg-secondary rounded-md animate-float"></div>
            <div className="absolute -bottom-3 left-8 w-3 h-3 bg-supportive-accent rounded-full animate-float-lg"></div>

            {/* Bottom-right corner */}
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary rounded-sm animate-float-sm"></div>
            <div className="absolute -bottom-5 -right-5 w-6 h-6 bg-secondary rounded-md animate-float"></div>
            <div className="absolute -bottom-3 right-8 w-3 h-3 bg-supportive-accent rounded-full animate-float-lg"></div>

            {/* Edges */}
            <div className="absolute top-1/2 -left-6 w-5 h-5 bg-primary/50 rounded-full animate-balance"></div>
            <div className="absolute top-1/2 -right-6 w-5 h-5 bg-secondary/50 rounded-full animate-balance-sm"></div>
            <div className="absolute top-1/4 -left-10 w-3 h-3 bg-primary/50 rounded-full animate-balance-lg"></div>
            <div className="absolute bottom-1/4 -right-10 w-3 h-3 bg-primary/50 rounded-full animate-balance"></div>
            <div className="absolute top-1/3 -right-12 w-4 h-4 bg-secondary/50 rounded-md animate-balance-sm"></div>
            <div className="absolute bottom-1/3 -left-12 w-4 h-4 bg-secondary/50 rounded-md animate-balance-lg"></div>

            {/* More random squares */}
            <div className="absolute top-1/4 -right-20 w-2 h-2 bg-supportive-accent/50 rounded-full animate-float"></div>
            <div className="absolute bottom-1/4 -left-20 w-2 h-2 bg-supportive-accent/50 rounded-full animate-float-sm"></div>
            <div className="absolute top-1/2 -right-24 w-3 h-3 bg-primary/50 rounded-md animate-float-lg"></div>
            <div className="absolute bottom-1/2 -left-24 w-3 h-3 bg-primary/50 rounded-md animate-float"></div>
            <div className="absolute top-1/3 -left-28 w-4 h-4 bg-secondary/50 rounded-full animate-balance"></div>
            <div className="absolute bottom-1/3 -right-28 w-4 h-4 bg-secondary/50 rounded-full animate-balance-sm"></div>
            <div className="absolute top-2/3 -left-32 w-2 h-2 bg-supportive-accent/50 rounded-md animate-balance-lg"></div>
            <div className="absolute bottom-2/3 -right-32 w-2 h-2 bg-supportive-accent/50 rounded-md animate-balance"></div>
            <div className="absolute top-1/2 -left-36 w-3 h-3 bg-primary/50 rounded-full animate-float"></div>
            <div className="absolute bottom-1/2 -right-36 w-3 h-3 bg-primary/50 rounded-full animate-float-sm"></div>

            {/* Top and bottom edges */}
            <div className="absolute -top-10 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float"></div>
            <div className="absolute -top-12 left-1/2 w-3 h-3 bg-secondary/50 rounded-md animate-float-sm"></div>
            <div className="absolute -top-10 right-1/4 w-2 h-2 bg-supportive-accent/50 rounded-full animate-float-lg"></div>
            <div className="absolute -bottom-10 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float"></div>
            <div className="absolute -bottom-12 left-1/2 w-3 h-3 bg-secondary/50 rounded-md animate-float-sm"></div>
            <div className="absolute -bottom-10 right-1/4 w-2 h-2 bg-supportive-accent/50 rounded-full animate-float-lg"></div>
            <div className="absolute -top-16 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-balance"></div>
            <div className="absolute -bottom-16 right-1/3 w-3 h-3 bg-secondary/50 rounded-md animate-balance-sm"></div>
            <div className="absolute -top-20 left-2/3 w-2 h-2 bg-supportive-accent/50 rounded-full animate-balance-lg"></div>
            <div className="absolute -bottom-20 right-2/3 w-2 h-2 bg-primary/50 rounded-full animate-balance"></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

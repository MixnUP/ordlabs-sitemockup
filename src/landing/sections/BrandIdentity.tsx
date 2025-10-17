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
          <div className="flex justify-center">
            {/* Placeholder for an image or graphic related to brand identity */}
            <div className="w-full rounded-lg max-w-md md:max-w-lg h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-lg font-semibold">
              Brand Identity Graphic Placeholder
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

import { FadeIn } from '@/components/ui/fade-in';
import { Sparkles, Shapes } from 'lucide-react'; // Reusing AboutVectors for now

export function BrandTone() {
  return (
    <section id="brand-tone" className="py-20 sm:py-24 md:py-32 relative bg-muted">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        <Sparkles className="absolute top-1/3 left-1/2 h-14 w-14 text-primary animate-pulse-subtle" />
        <Shapes className="absolute bottom-1/3 right-1/2 h-10 w-10 text-secondary animate-icon-rotate" />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
        <FadeIn delay={0}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Brand Tone & Personality</h2>
            <p className="mx-auto mt-4 max-w-3xl text-foreground">
              The voice of OrdLabs is crafted to be professional, innovative, empowering, and human-centric.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="py-4 px-6 text-lg font-semibold text-primary">Trait</th>
                  <th className="py-4 px-6 text-lg font-semibold text-primary">Description</th>
                  <th className="py-4 px-6 text-lg font-semibold text-primary">Example AI Tone</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary/10">
                  <td className="py-4 px-6"><strong>Professional</strong></td>
                  <td className="py-4 px-6">Knowledgeable yet approachable.</td>
                  <td className="py-4 px-6">“We deliver tailored solutions to meet your business goals.”</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="py-4 px-6"><strong>Innovative</strong></td>
                  <td className="py-4 px-6">Forward-thinking and experimental.</td>
                  <td className="py-4 px-6">“Let’s explore new possibilities for your next digital product.”</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="py-4 px-6"><strong>Empowering</strong></td>
                  <td className="py-4 px-6">Encouraging growth and collaboration.</td>
                  <td className="py-4 px-6">“Together, we build technology that moves businesses forward.”</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="py-4 px-6"><strong>Human-centric</strong></td>
                  <td className="py-4 px-6">Focused on user experience and empathy.</td>
                  <td className="py-4 px-6">“We design with people in mind — not just systems.”</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

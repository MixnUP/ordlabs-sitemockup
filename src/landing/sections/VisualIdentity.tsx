import { FadeIn } from '@/components/ui/fade-in';
import { Sparkles, Shapes } from 'lucide-react'; // Reusing AboutVectors for now

export function VisualIdentity() {
  return (
    <section id="visual-identity" className="py-20 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        <Shapes className="absolute top-1/4 left-1/4 h-16 w-16 text-primary animate-icon-rotate" />
        <Sparkles className="absolute bottom-1/4 right-1/4 h-12 w-12 text-secondary animate-pulse-subtle" />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
        <FadeIn delay={0}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visual Identity</h2>
            <p className="mx-auto mt-4 max-w-3xl text-foreground">
              The visual elements that define the OrdLabs brand, including color palette and typography.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Color Palette</h3>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#0668E2] border border-gray-300"></div>
                  <p className="mt-2 text-sm">Celtic Blue</p>
                  <p className="text-xs text-muted-foreground">#0668E2</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#F4F3EE] border border-gray-300"></div>
                  <p className="mt-2 text-sm">Isabelline</p>
                  <p className="text-xs text-muted-foreground">#F4F3EE</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#1B1C1C] border border-gray-300"></div>
                  <p className="mt-2 text-sm">Eerie Black</p>
                  <p className="text-xs text-muted-foreground">#1B1C1C</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#012E2C] border border-gray-300"></div>
                  <p className="mt-2 text-sm">Dark Green</p>
                  <p className="text-xs text-muted-foreground">#012E2C</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#F68E1E] border border-gray-300"></div>
                  <p className="mt-2 text-sm">Dark Orange</p>
                  <p className="text-xs text-muted-foreground">#F68E1E</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Typography</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg font-poppins font-bold">Primary Font: Poppins</p>
                  <p className="text-foreground font-poppins">For headings, taglines. Rounded, geometric, and modern.</p>
                </div>
                <div>
                  <p className="text-lg font-sora font-bold">Secondary Font: Sora</p>
                  <p className="text-foreground font-sora">For body text. Good readability.</p>
                </div>
                <div>
                  <p className="text-lg font-poppins font-bold">Style: Rounded, geometric, and modern with good readability.</p>
                  <p className="text-foreground font-poppins">Text casing: Prefer lowercase for the brand name (ordlabs).</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

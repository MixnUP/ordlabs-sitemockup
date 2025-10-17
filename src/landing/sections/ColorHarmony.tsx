
import { FadeIn } from '@/components/ui/fade-in';

export function ColorHarmony() {
  const harmonies = [
    {
      name: 'Primary Harmony',
      description: 'Celtic Blue, Eerie Black, and Isabelline create a balanced, professional look.',
      colors: ['#0668E2', '#1B1C1C', '#F4F3EE'],
    },
    {
      name: 'Vibrant Accent',
      description: 'Dark Orange provides a supportive accent against the primary colors.',
      colors: ['#0668E2', '#F68E1E', '#F4F3EE'],
    },
    {
      name: 'Elegant Contrast',
      description: 'Dark Green and Isabelline offer a sophisticated and modern feel.',
      colors: ['#012E2C', '#F4F3EE', '#1B1C1C'],
    },
    {
        name: 'Full Palette',
        description: 'All brand colors working together in a vibrant and cohesive system.',
        colors: ['#0668E2', '#F68E1E', '#012E2C', '#1B1C1C', '#F4F3EE'],
      },
  ];

  return (
    <section id="color-harmony" className="py-20 sm:py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Color Harmony</h2>
            <p className="mx-auto mt-4 max-w-3xl text-foreground/80">
              Our brand colors are designed to work in harmony, creating a consistent and engaging visual experience across all applications.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {harmonies.map((harmony, index) => (
            <FadeIn key={harmony.name} delay={index * 100}>
              <div className="group relative flex flex-col h-full rounded-lg border border-border/50 bg-card shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-semibold text-foreground">{harmony.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{harmony.description}</p>
                </div>
                <div className="flex h-24 w-full items-end p-2">
                  <div className="flex h-full w-full items-stretch overflow-hidden rounded-md">
                    {harmony.colors.map((color) => (
                      <div
                        key={color}
                        className="flex-1 transition-all duration-300 group-hover:flex-grow-[1.2]"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle, Code, Lightbulb, Tag, AlertTriangle, ArrowRight, PlayCircle } from 'lucide-react'; // Icons for examples
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import logomark from '@/assets/Tertiary-Logomark.png';

export function ColorUsage() {
  const colors = [
    {
      name: 'Celtic Blue', hex: '#0668E2', description: 'Primary accent color, used in logo and highlights.',
      examples: [
        <div className="flex items-center space-x-2 text-primary animate-glow-subtle">
          <Lightbulb size={20} />
          <span className="text-sm font-medium">Highlight</span>
        </div>,
        <button className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm flex items-center space-x-1 animate-button-press-subtle">
          <span>Action</span>
          <ArrowRight size={16} />
        </button>,
        <div className="w-16 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-progress-fill"></div>
        </div>,
        <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
      ],
      shadcnExamples: [
        <Input type="text" placeholder="Input" className="border-primary focus:ring-primary animate-text-pulse" />,
        <Avatar className="h-16 w-16 p-2 bg-background border border-primary animate-pulse-subtle text-primary animate-glow-shadow"><AvatarImage src={logomark} className="w-full h-full object-cover" /></Avatar>
      ]
    },
    {
      name: 'Isabelline', hex: '#F4F3EE', description: 'Soft off-white, Background and neutral areas.',
      examples: [
        <div className="w-full h-full bg-background border border-border rounded-md flex items-center justify-center animate-background-breathe">
          <span className="text-xs text-foreground/50">Background</span>
        </div>,
        <div className="w-full h-px bg-border animate-line-pulse"></div>,
        <div className="h-4 w-24 bg-background rounded animate-text-pulse"></div>,
        <div className="w-20 h-10 bg-background shadow-sm rounded-md flex items-center justify-center text-xs text-foreground/70">Card BG</div>
      ],
      shadcnExamples: [
        <Button variant="outline" className="border-border text-foreground animate-button-press-subtle">Outline</Button>,
        <Skeleton className="w-20 h-6 bg-muted animate-pulse-subtle" />
      ]
    },
    {
      name: 'Eerie Black', hex: '#1B1C1C', description: 'Deep neutral black, Text, headers, dark backgrounds.',
      examples: [
        <div className="bg-foreground text-background p-2 rounded-md text-xs font-mono flex items-center space-x-1 animate-text-pulse">
          <Code size={14} />
          <span>console.log('...')</span>
        </div>,
        <h4 className="text-foreground text-lg font-bold animate-text-pulse">Heading Example</h4>,
        <p className="text-foreground/80 text-xs animate-text-pulse">Footer text example</p>,
        <div className="w-12 h-6 rounded-full bg-foreground flex items-center p-1 animate-pulse-subtle">
          <div className="w-4 h-4 rounded-full bg-background"></div>
        </div>
      ],
      shadcnExamples: [
        <Textarea placeholder="Textarea" className="bg-foreground text-background border-border focus:ring-foreground animate-text-pulse" />,
        <Label className="text-foreground animate-text-pulse">Dark Label</Label>
      ]
    },
    {
      name: 'Dark Green', hex: '#012E2C', description: 'Elegant contrast green, Secondary color, overlays, footer.',
      examples: [
        <div className="flex items-center space-x-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs animate-tag-jiggle">
          <Tag size={14} />
          <span>Category</span>
        </div>,
        <div className="flex items-center space-x-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs animate-pulse-subtle">
          <PlayCircle size={14} />
          <span>Active</span>
        </div>,
        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center animate-icon-rotate">
          <Tag size={16} className="text-secondary-foreground" />
        </div>,
        <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-subtle"></div>
      ],
      shadcnExamples: [
        <Separator className="bg-secondary animate-line-pulse" />,
        <Input type="text" placeholder="Input" className="border-secondary focus:ring-secondary animate-text-pulse" />
      ]
    },
    {
      name: 'Dark Orange', hex: '#F68E1E', description: 'Supportive accent, Success indicators, buttons, highlights.',
      examples: [
        <div className="flex items-center space-x-1 text-supportive-accent animate-icon-bounce">
          <CheckCircle size={20} />
          <span className="text-sm font-medium">Success</span>
        </div>,
        <button className="bg-supportive-accent text-primary-foreground px-3 py-1 rounded-md text-sm animate-button-press-subtle">Confirm</button>,
        <div className="flex items-center space-x-1 text-supportive-accent animate-icon-bounce">
          <AlertTriangle size={20} />
          <span className="text-sm font-medium">Warning</span>
        </div>,
        <div className="w-16 h-2 bg-supportive-accent rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-white/30 animate-progress-flow"></div>
        </div>,
        <p className="text-foreground text-sm">Text with <span className="text-supportive-accent animate-text-pulse">Highlight</span></p>
      ],
      shadcnExamples: [
        <Label className="bg-supportive-accent text-primary-foreground px-2 py-1 rounded-full text-xs animate-pulse-subtle">New Feature</Label>,
        <Avatar className="h-16 w-16 p-2 bg-background border border-supportive-accent animate-pulse-subtle text-supportive-accent animate-glow-shadow"><AvatarImage src={logomark} className="w-full h-full object-cover" /></Avatar>
      ]
    },
  ];

  return (
    <section id="color-usage" className="py-20 sm:py-24 md:py-32 relative bg-background">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
        <FadeIn delay={0}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Brand Colors in Action</h2>
            <p className="mx-auto mt-4 max-w-3xl text-foreground">
              Discover the vibrant palette that defines OrdLabs, showcasing how each color contributes to our visual identity and user experience.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-y-8">
          {colors.map((color, index) => (
            <FadeIn key={color.name} delay={index * 100 + 200}>
              <div
                className="group relative p-6 border-b border-border/50 last:border-b-0 transition-all duration-300 hover:scale-[1.02] hover:bg-muted/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="flex flex-col items-center md:items-start">
                    <div className={`h-24 w-full flex items-center justify-center rounded-md ${color.name === 'Isabelline' ? 'border border-border' : ''}`} style={{ backgroundColor: color.hex }}>
                      <span className="text-lg font-bold text-white mix-blend-difference">
                        {color.name}
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-semibold">{color.hex}</p>
                    <p className="mt-2 text-sm text-foreground text-center md:text-left">{color.description}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 h-full">
                    {color.examples.map((example, exIndex) => (
                      <FadeIn key={exIndex} delay={exIndex * 50}>
                        <div className="flex items-center justify-center w-full">
                          {example}
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-4 h-full">
                    {color.shadcnExamples.map((example, exIndex) => (
                      <FadeIn key={exIndex} delay={exIndex * 50}>
                        <div className="flex items-center justify-center w-full">
                          {example}
                        </div>
                      </FadeIn>
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

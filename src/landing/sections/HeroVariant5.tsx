import { FadeIn } from '@/components/ui/fade-in';
import { Sparkles } from 'lucide-react';
import Secondary from '@/assets/Secondary.png';

export function HeroVariant5() {
  return (
    <section className="w-full py-20 sm:py-32 relative bg-muted/30 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-supportive-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse-subtle"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-subtle delay-200"></div>

          <div className="md:col-span-2 flex items-center justify-center relative h-80">
            {/* Sparkles icons encircling the logo container, positioned relative to this column */}
            <Sparkles className="absolute top-1/4 left-1/4 h-10 w-10 text-primary/70 animate-pulse-subtle animate-float delay-100" style={{ transform: 'translate(-50%, -50%) translate(-50px, -50px)' }} />
            <Sparkles className="absolute top-1/4 right-1/4 h-12 w-12 text-supportive-accent/70 animate-icon-rotate animate-balance delay-200" style={{ transform: 'translate(50%, -50%) translate(50px, -50px)' }} />
            <Sparkles className="absolute bottom-1/4 left-1/4 h-14 w-14 text-secondary/70 animate-float-lg animate-icon-bounce delay-300" style={{ transform: 'translate(-50%, 50%) translate(-50px, 50px)' }} />
            <Sparkles className="absolute bottom-1/4 right-1/4 h-16 w-16 text-primary/50 animate-pulse-subtle animate-float-sm delay-400" style={{ transform: 'translate(50%, 50%) translate(50px, 50px)' }} />
            <Sparkles className="absolute top-1/2 left-0 h-8 w-8 text-supportive-accent/50 animate-icon-rotate-slow animate-balance-sm delay-500" style={{ transform: 'translate(-100%, -50%) translate(-80px, 0)' }} />
            <Sparkles className="absolute top-1/2 right-0 h-10 w-10 text-secondary/60 animate-float-sm animate-balance-lg delay-600" style={{ transform: 'translate(100%, -50%) translate(80px, 0)' }} />
            <Sparkles className="absolute top-0 left-1/2 h-18 w-18 text-primary/60 animate-icon-bounce animate-float-lg delay-700" style={{ transform: 'translate(-50%, -100%) translate(0, -80px)' }} />
            <Sparkles className="absolute bottom-0 left-1/2 h-20 w-20 text-supportive-accent/60 animate-balance-sm animate-pulse-subtle delay-800" style={{ transform: 'translate(-50%, 100%) translate(0, 80px)' }} />
            <FadeIn delay={200}>
              <div className="relative w-56 h-56 rounded-full bg-background shadow-lg flex items-center justify-center z-10">
                <img src={Secondary} alt="Secondary Logo" className="w-full h-full object-contain p-4" />
              </div>
            </FadeIn>
          </div>
    </section>
  );
}

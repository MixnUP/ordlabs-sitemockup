import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import logomark from '@/assets/Tertiary-Logomark.png';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <img src={logomark} alt="ordlabs" className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block font-poppins">ordlabs</span>
          </a>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <a href="#about">Overview</a>
            <a href="#brand-identity">Identity</a>
            <a href="#brand-tone">Tone</a>
            <a href="#visual-identity">Visuals</a>
            <a href="#founder">Founder</a>
          </nav>
        </div>
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <a href="/" className="mr-6 flex items-center space-x-2">
                <img src={logomark} alt="ordlabs" className="h-6 w-6" />
                <span className="font-bold font-poppins">ordlabs</span>
              </a>
              <div className="mt-6 flex flex-col space-y-4">
                <a href="#about">Overview</a>
                <a href="#brand-identity">Identity</a>
                <a href="#brand-tone">Tone</a>
                <a href="#visual-identity">Visuals</a>
                <a href="#founder">Founder</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

import logomark from '@/assets/Tertiary-Logomark.png';
import { FooterVectors } from '@/components/ui/vectors';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground relative">
      <FooterVectors />
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <img src={logomark} alt="ordlabs" className="h-8 w-8" />
            <span className="font-bold text-lg">ordlabs</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-primary">
              Terms of Service
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-sm hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 2.8 5.1 0 1.4-.5 2.7-1.5 3.7-1 .9-2.2 1.4-3.6 1.4H6.5c-1.4 0-2.5-.5-3.5-1.4C2 15.2 1.5 13.9 1.5 12.5c0-1.9 1.2-3.7 2.8-5.1C2.7 6.1 2 4 2 4s5.2 2.6 10 2.6S22 4 22 4z"></path><path d="M12 12.5c-1.4 0-2.5-.5-3.5-1.4C7.5 10.2 7 8.9 7 7.5c0-1.9 1.2-3.7 2.8-5.1C11.2 1.1 12.8 0 15 0c2.2 0 3.8 1.1 4.8 2.4 1 .9 1.5 2.2 1.5 3.6 0 1.4-.5 2.7-1.5 3.7-1 .9-2.2 1.4-3.6 1.4h-.2z"></path></svg>
            </a>
            <a href="#" className="text-sm hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <div className="text-center text-sm pt-6 mt-6 border-t border-primary/20">
          &copy; {new Date().getFullYear()} ordlabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

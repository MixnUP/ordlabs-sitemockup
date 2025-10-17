import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactVectors } from '@/components/ui/vectors';
import { FadeIn } from '@/components/ui/fade-in';

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 sm:py-24 md:py-32 bg-muted/20 relative">
      <ContactVectors />
      <FadeIn delay={0}>
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
            <p className="mx-auto mt-4 text-lg text-foreground">
              Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <form className="mt-12 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                  <Input id="name" placeholder="Your name" className="focus:bg-primary/10" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="focus:bg-primary/10" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="focus:bg-primary/10" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px] focus:bg-primary/10" />
              </div>
              <div className="pt-2">
                <Button size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
            
            <div className="mt-16 pt-8 border-t border-border">
              <h3 className="text-lg font-medium">Or reach out directly</h3>
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-foreground">
                <a href="mailto:contact@ordlabs.xyz" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  contact@ordlabs.xyz
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

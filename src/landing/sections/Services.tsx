import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Code, Smartphone } from "lucide-react";
import { ServicesVectors } from '@/components/ui/vectors';
import { FadeIn } from '@/components/ui/fade-in';

export function Services() {
  return (
    <section id="services" className="w-full py-20 sm:py-24 md:py-32 bg-background relative">
      <ServicesVectors />
      <div className="relative">
        <FadeIn delay={0}>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Code className="text-primary" />
                  </div>
                  <span>Website Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  We build modern, responsive, and high-performing websites that are tailored to your business needs.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Smartphone className="text-primary" />
                  </div>
                  <span>Web & Mobile Applications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  We create powerful and scalable web and mobile applications that provide a seamless user experience.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BarChart className="text-primary" />
                  </div>
                  <span>Responsive UI/UX Design</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  We design intuitive and engaging user interfaces that are optimized for all devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

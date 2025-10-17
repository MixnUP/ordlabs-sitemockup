
import { FadeIn } from '@/components/ui/fade-in';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, AlertTriangle, Info, ArrowRight } from 'lucide-react';

export function PracticalExamples() {
  return (
    <section id="practical-examples" className="py-20 sm:py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Practical Color Examples</h2>
            <p className="mx-auto mt-4 max-w-3xl text-foreground/80">
              Here’s how our brand colors translate into real-world UI components, creating a cohesive and engaging user experience.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Example 1: Project Card */}
          <FadeIn delay={100}>
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
              <CardHeader className="bg-muted/50 border-b">
                <CardTitle className="text-lg font-semibold text-foreground">Project Alpha</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-foreground/80 mb-4">A web application for managing tasks and collaborating with teams.</p>
                <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 py-1 px-2 rounded-full">React</span>
                    <span className="text-xs font-semibold text-secondary-foreground bg-secondary py-1 px-2 rounded-full">Node.js</span>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4 flex justify-between items-center">
                <div className="text-sm text-foreground/70">Status: In Progress</div>
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">View Project</Button>
              </CardFooter>
            </Card>
          </FadeIn>

          {/* Example 2: Notifications */}
          <FadeIn delay={200}>
            <div className="space-y-4">
              <div className="bg-supportive-accent/10 border-l-4 border-supportive-accent text-supportive-accent p-4 rounded-r-lg flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Success!</h4>
                  <p className="text-sm">Your profile has been updated.</p>
                </div>
              </div>
              <div className="bg-destructive/10 border-l-4 border-destructive text-destructive p-4 rounded-r-lg flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Warning</h4>
                  <p className="text-sm">Your session is about to expire.</p>
                </div>
              </div>
              <div className="bg-primary/10 border-l-4 border-primary text-primary p-4 rounded-r-lg flex items-start space-x-3">
                <Info className="h-5 w-5 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Information</h4>
                  <p className="text-sm">A new update is available.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Example 3: User Profile Widget */}
          <FadeIn delay={300}>
            <Card className="text-center flex flex-col items-center justify-center p-6 h-full">
                <Avatar className="w-24 h-24 border-4 border-primary/50 shadow-lg mb-4">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-foreground">Jane Doe</h3>
                <p className="text-sm text-foreground/70 mb-4">Software Engineer</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View Profile <ArrowRight className='w-4 h-4 ml-2' /></Button>
            </Card>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

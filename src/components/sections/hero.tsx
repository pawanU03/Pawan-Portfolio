import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';



const HeroSection = () => {
  return (
    <section id="home" className="relative h-dvh flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-headline text-foreground leading-tight mb-4">
          Éclat
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto text-foreground/80 mb-8">
          A Digital Craftsman Building Elegant Web Experiences
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" download="resume.pdf">
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-6 h-6 text-foreground/60 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;

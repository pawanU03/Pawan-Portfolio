import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-6">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm a recent Computer Science graduate with a passion for building beautiful and functional web applications. I'm eager to apply my skills in modern web technologies to a real-world setting and contribute to exciting projects.
            </p>
            <p>
              My journey into web development started from a love of problem-solving and a desire to create things that people can interact with. I'm a quick learner, always excited to pick up new technologies, and I believe that the best digital products are born from a blend of technical excellence and user-centric design. I'm actively seeking opportunities to kick-start my career as a developer.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <Card className="overflow-hidden shadow-xl rounded-lg">
            <CardContent className="p-0">
              <Image
                src="https://placehold.co/500x600.png"
                alt="Portrait of the developer"
                width={500}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint="professional portrait"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

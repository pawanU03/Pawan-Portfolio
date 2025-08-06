import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import profileImg from '@/img/profile.png';

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
              I am a Computer Science graduate with a strong foundation in data analysis and visualization. My expertise lies in utilizing tools like Excel, SQL, and Power BI to collect, clean, and analyze datasets, build insightful dashboards, and automate reporting.
            </p>
            <p>
              With a passion for uncovering data-driven insights, I am a dedicated and analytical problem-solver with excellent communication skills. I am eager to apply my technical abilities and enthusiasm for learning to a professional setting, where I can contribute to impactful projects and continue to grow as a data professional.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <Card className="overflow-hidden shadow-xl rounded-lg">
            <CardContent className="p-0">
              <Image
                src={profileImg}
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

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import EducationSection from '@/components/sections/education';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';
import { FadeIn } from '@/components/fade-in';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <FadeIn>
          <HeroSection />
        </FadeIn>
        <FadeIn>
          <AboutSection />
        </FadeIn>
        <FadeIn>
          <EducationSection />
        </FadeIn>
        <FadeIn>
          <ProjectsSection />
        </FadeIn>
        <FadeIn>
          <ContactSection />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

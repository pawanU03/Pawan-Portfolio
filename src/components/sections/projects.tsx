'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Project = {
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubLink: string;
  liveLink?: string;
  aiHint: string;
};

const projects: Project[] = [
  {
    title: 'LuxeChic E-commerce',
    shortDescription: 'A high-end fashion e-commerce platform.',
    longDescription: 'LuxeChic is a fully responsive e-commerce site for a luxury fashion brand. It features a custom CMS for product management, Stripe integration for secure payments, and a minimalistic, elegant user interface designed to highlight the products.',
    image: 'https://placehold.co/1200x800.png',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'Sanity.io'],
    githubLink: '#',
    liveLink: '#',
    aiHint: 'fashion website',
  },
  {
    title: 'Portfolio CMS',
    shortDescription: 'Headless CMS for creative portfolios.',
    longDescription: 'A powerful, yet simple-to-use headless CMS built with Node.js and GraphQL. It allows artists and designers to manage their portfolio content through a clean interface, with a flexible API to feed data into any frontend.',
    image: 'https://placehold.co/1200x800.png',
    tags: ['Node.js', 'GraphQL', 'React', 'MongoDB'],
    githubLink: '#',
    aiHint: 'dashboard interface',
  },
  {
    title: 'DataVis Dashboard',
    shortDescription: 'Interactive financial data visualization tool.',
    longDescription: 'An analytics dashboard that provides users with interactive charts and graphs to visualize complex financial data. Built with D3.js and React, it offers real-time data updates and customizable views.',
    image: 'https://placehold.co/1200x800.png',
    tags: ['React', 'D3.js', 'WebSocket', 'Figma'],
    githubLink: '#',
    liveLink: '#',
    aiHint: 'data chart',
  },
  {
    title: 'Artisan Cafe Website',
    shortDescription: 'A cozy website for a local coffee shop.',
    longDescription: 'A charming and responsive website for a local artisan cafe, featuring their menu, story, and an integrated online ordering system. The design aims to reflect the warm and rustic atmosphere of the cafe itself.',
    image: 'https://placehold.co/1200x800.png',
    tags: ['Gatsby', 'Contentful', 'Shopify Lite'],
    githubLink: '#',
    aiHint: 'coffee shop',
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-4">
          My Creations
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-foreground/80">
          A selection of projects that showcase my passion for development and design.
        </p>
      </div>
      
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Card
                  onClick={() => setSelectedProject(project)}
                  className="h-full flex flex-col cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 overflow-hidden"
                >
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl max-h-[90dvh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="font-headline text-3xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription asChild>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject?.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6 py-4 overflow-y-auto pr-4">
            <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border">
                    <Image
                    src={selectedProject?.image || "https://placehold.co/600x400.png"}
                    alt={selectedProject?.title || 'Project image'}
                    width={600}
                    height={400}
                    className="object-cover w-full"
                    data-ai-hint={selectedProject?.aiHint}
                    />
                </div>
                <p className="text-muted-foreground">{selectedProject?.longDescription}</p>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-semibold text-lg">Links</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href={selectedProject?.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </a>
                </Button>
                {selectedProject?.liveLink && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Live Site
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;

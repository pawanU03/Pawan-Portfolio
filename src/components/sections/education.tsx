import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'State Technology College',
    period: '2020 - 2024',
    description: 'Completed a comprehensive curriculum covering fundamental and advanced topics in computer science, including data structures, algorithms, software engineering, and database management. Gained hands-on experience through various projects. Graduated with honors and led a team for the final year capstone project developing a real-time collaborative code editor.',
    courses: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Web Development', 'Database Systems', 'Software Engineering']
  },
  {
    degree: 'High School Diploma',
    institution: 'City High School',
    period: '2018 - 2020',
    description: 'Focused on science and mathematics, laying a strong analytical foundation for future studies in technology.',
    courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science Basics']
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-4">
                Education
              </h2>
              <p className="text-lg text-foreground/80">
                My academic journey and the foundations of my expertise.
              </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {educationData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <div className="text-left">
                    <h3 className="font-headline text-xl font-semibold">{item.degree}</h3>
                    <p className="text-sm text-muted-foreground">{item.institution} &bull; {item.period}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-2 border-l-2 border-primary ml-2">
                    <p className="text-foreground/80 mb-4">{item.description}</p>
                    <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                    <ul className="list-disc list-inside text-foreground/70">
                      {item.courses.map((course) => <li key={course}>{course}</li>)}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

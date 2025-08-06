import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const educationData = [
  {
    degree: 'B.E. Computer Science Engineering',
    institution: 'Chandigarh University',
    period: '2021 - 2025',
    description: 'Specialization in Artificial Intelligence and Machine Learning with a CGPA of 8.00/10.0. The curriculum provided a strong foundation in computer science principles, with a focus on AI and machine learning concepts and their practical applications.',
    courses: ['Data Structures', 'Algorithms', 'Artificial Intelligence', 'Machine Learning', 'Database Management']
  },
  {
    degree: 'Intermediate (CBSE)',
    institution: 'Bhavan Vidyalaya, Sec-15, Panchkula, Haryana',
    period: '2019 - 2021',
    description: 'Completed my intermediate education with a focus on science and mathematics, achieving a percentage of 81.4%. This provided a strong analytical and problem-solving foundation for my engineering studies.',
    courses: ['Physics', 'Chemistry', 'Mathematics']
  },
  {
    degree: 'Matriculation (CBSE)',
    institution: 'New India High School, Pinjore, Haryana',
    period: '2018 - 2019',
    description: 'Completed my matriculation with a percentage of 92%, demonstrating a strong academic performance from an early stage.',
    courses: ['Science', 'Mathematics', 'English']
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

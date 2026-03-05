import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const experiences = [
  {
    id: 1,
    title: "Preschool Assistant",
    company: "Læringsverkstedet Novarmen",
    location: "Stavanger, Norway",
    period: "Dec 2024 - Jul 2025",
    description: "Assisted in daily routines, play-based learning, and care for children aged 1–6.",
    responsibilities: [
      "Supported social and emotional development of children",
      "Ensured a safe and nurturing environment",
      "Collaborated with staff and parents on child development",
      "Facilitated play-based learning activities"
    ],
    technologies: []
  },
  {
    id: 2,
    title: "Solution Developer",
    company: "Eye-Share",
    location: "Norway",
    period: "Sep 2023 - Jul 2024",
    description: "Worked with agile methods to develop smart solutions for customers, focusing on client communication and needs assessment.",
    responsibilities: [
      "Developed smart solutions using agile methodologies",
      "Communicated and discussed requirements with clients",
      "Collaborated in cross-functional teams",
      "Delivered customer-focused IT solutions"
    ],
    technologies: ["Agile Methods", "Software Development", "Client Communication"]
  },
  {
    id: 3,
    title: "Gymnastics Coach",
    company: "Nordstrand Turnforening",
    location: "Oslo, Norway",
    period: "Oct 2019 - Aug 2022",
    description: "Worked as a coach for young gymnasts, teaching responsibility and discipline.",
    responsibilities: [
      "Coached young athletes in gymnastics techniques",
      "Developed training programs and routines",
      "Taught responsibility and discipline",
      "Managed group dynamics and social situations"
    ],
    technologies: []
  },
  {
    id: 4,
    title: "Gymnastics Coach",
    company: "Sandnes Turnforening",
    location: "Sandnes, Norway",
    period: "Sep 2017 - Aug 2019",
    description: "Coached at former gymnastics club, organizing workouts, routines and social situations.",
    responsibilities: [
      "Organized workouts and training sessions",
      "Developed gymnastics routines",
      "Managed social situations and team building",
      "Mentored young athletes"
    ],
    technologies: []
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-600">
            My professional journey and career highlights
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 hover:border-l-indigo-600">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Briefcase className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex flex-col gap-1">
                        <span>{exp.company} - {exp.location}</span>
                        <span className="flex items-center gap-1 text-sm">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-gray-600 pl-4 relative before:content-['•'] before:absolute before:left-0">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {exp.technologies.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

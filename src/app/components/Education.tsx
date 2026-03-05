import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

const education = [
  {
    id: 1,
    degree: "Master's Degree in Informatics: Design, Use and Interaction",
    school: "University of Oslo",
    location: "Oslo, Norway",
    period: "Aug 2025 - Present",
    description: "Learning to understand how today's computer systems work in practice, and how to use the knowledge to create tomorrow's IT solutions.",
    achievements: [
      "Focus on user-centered design",
      "System development and interaction design",
      "Creating innovative IT solutions"
    ]
  },
  {
    id: 2,
    degree: "Bachelor's Degree in Applied Computer Science",
    school: "OsloMet - Storbyuniversitet",
    location: "Oslo, Norway",
    period: "Aug 2020 - Jun 2023",
    description: "Academic excellence in Prototyping, Software Engineering and Programming. Theoretical understanding of user interface, research methods and system development.",
    achievements: [
      "Excellence in Prototyping and Software Engineering",
      "Strong foundation in Programming",
      "User interface and research methods expertise"
    ]
  },
  {
    id: 3,
    degree: "One Year of Bachelor's Degree in Art",
    school: "OsloMet - Storbyuniversitet",
    location: "Oslo, Norway",
    period: "Aug 2019 - Jun 2020",
    description: "Extensive training with colour use, propositions, and creativity.",
    achievements: [
      "Color theory and application",
      "Creative thinking and design principles",
      "Artistic foundations for digital design"
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600">
            My academic journey and qualifications
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 hover:border-l-blue-600">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex flex-col gap-1">
                        <span>{edu.school} - {edu.location}</span>
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{edu.description}</p>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

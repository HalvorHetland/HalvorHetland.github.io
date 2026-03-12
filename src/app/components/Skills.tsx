import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import { 
  Code2, 
  Database, 
  Palette, 
  Wrench,
  FileCode,
  Box,
  Terminal,
  Layers,
  GitBranch,
  Container,
  HardDrive,
  Image as ImageIcon
} from "lucide-react";

const techStack = [
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: FileCode, color: "text-yellow-500" },
      { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
      { name: "Python", icon: FileCode, color: "text-blue-600" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: Wrench,
    skills: [
      { name: "React", icon: Box, color: "text-cyan-500" },
      { name: "Node.js", icon: Terminal, color: "text-green-600" },
      { name: "Tailwind CSS", icon: Layers, color: "text-teal-500" },
      { name: "Vite", icon: Box, color: "text-purple-500" },
    ]
  },
  {
    category: "Tools & Technologies",
    icon: Database,
    skills: [
      { name: "Git", icon: GitBranch, color: "text-orange-600" },
      { name: "Docker", icon: Container, color: "text-blue-500" },
      { name: "Linux", icon: HardDrive, color: "text-yellow-600" },
      { name: "PostgreSQL", icon: Database, color: "text-blue-700" },
    ]
  },
  {
    category: "Design",
    icon: Palette,
    skills: [
      { name: "Figma", icon: ImageIcon, color: "text-purple-600" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((group, groupIndex) => {
            const CategoryIcon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <CategoryIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{group.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {group.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <SkillIcon className={`w-6 h-6 ${skill.color}`} />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

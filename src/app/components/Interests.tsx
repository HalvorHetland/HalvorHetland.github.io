import { Mountain, Users, Globe, Trophy, Heart, Gamepad2, TreePine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";

const interests = [
  {
    id: 1,
    icon: TreePine,
    title: "Hiking",
    description: "Getting out in nature — nothing beats a long trail with great views at the top."
  },
  {
    id: 2,
    icon: Mountain,
    title: "Climbing",
    description: "Both bouldering and sport climbing. Problem solving meets physical challenge."
  },
  {
    id: 3,
    icon: Users,
    title: "Socializing",
    description: "Love spending time with people — good conversations, laughs, and new experiences."
  },
  {
    id: 4,
    icon: Globe,
    title: "Travel",
    description: "Exploring new places, cultures, and food whenever I get the chance."
  },
  {
    id: 5,
    icon: Trophy,
    title: "Football",
    description: "Playing and watching football. Huge fan of the beautiful game."
  },
  {
    id: 6,
    icon: Heart,
    title: "Friends & Family",
    description: "The most important thing — quality time with the people closest to me."
  },
  {
    id: 7,
    icon: Gamepad2,
    title: "Video Games",
    description: "Winding down with games, from competitive multiplayer to story-driven adventures."
  }
];

const skills = [
  { category: "Soft Skills", items: ["Communicating", "Organizing", "Creativity", "Leadership", "Problem Solving"] },
  { category: "Technical Skills", items: ["Programming", "Software Engineering", "System Development", "Prototyping", "User Interface"] },
  { category: "Methods", items: ["Agile Methods", "Project Management", "Research Methods", "User-Centered Design"] },
  { category: "Languages", items: ["Norwegian (Native)", "English (Fluent)", "Spanish (Intermediate)"] }
];

export function Interests() {
  return (
    <section id="interests" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Interests & Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            What I'm passionate about and what I'm good at
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Personal Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-700 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-lg">{interest.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{interest.description}</p>
                  </CardContent>
                </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-700">
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-sm text-gray-700 dark:text-gray-300 pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-600">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

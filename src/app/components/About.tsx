import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { GraduationCap, Code, Lightbulb, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A bit about who I am and what I'm passionate about
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2 hover:border-blue-200 transition-all">
            <CardContent className="pt-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                I'm a computer science student and solution developer interested in <span className="font-semibold text-blue-600">distributed systems</span>, 
                <span className="font-semibold text-blue-600"> networking</span>, and <span className="font-semibold text-blue-600">backend development</span>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Currently pursuing my Master's degree in Informatics: Design, Use & Interaction at the University of Oslo, 
                I specialize in creating user-centered IT systems and smart digital solutions. My background combines 
                software engineering expertise with a strong focus on prototyping and agile development methods.
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Currently Learning:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Rust</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Systems programming and performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">Kubernetes</p>
                      <p className="text-sm text-gray-600">Container orchestration and DevOps</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">Data Engineering</p>
                      <p className="text-sm text-gray-600">Building scalable data pipelines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-indigo-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">Advanced Algorithms</p>
                      <p className="text-sm text-gray-600">Optimization and complexity analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

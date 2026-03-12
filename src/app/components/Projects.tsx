import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

import dhis2app from "../../assets/dhis2app.png";
import schoolPlatform from "../../assets/schoolPlatform.png";
import intility from "../../assets/intility.png";
import oslomet from "../../assets/oslomet.png";
import bachelorReport from "../../assets/Sluttrapport_Gruppe20.pdf";
import organizerAi from "../../assets/organizerAi.png";

const projects = [
  {
    id: 1,
    title: "DHIS2 Web Application",
    description:
      "A comprehensive web application built for DHIS2 (District Health Information Software 2), focusing on health data management and visualization. Developed with modern web technologies and user-centered design principles.",
    image: dhis2app,
    tags: ["React", "DHIS2", "Health Data", "Web Development"],
    github: "https://github.com/HalvorHetland/DHIS2_WebApp",
    demo: "#"
  },
  {
    id: 2,
    title: "School Dashboard Application",
    description:
      "Dashboard app for schools, tracking student performance, attendance and administrative metrics with real‑time charts and reports. Built with usability and education‑focused features in mind.",
    image: schoolPlatform,
    tags: ["React", "TypeScript", "Dashboard", "Education"],
    github: "https://github.com/HalvorHetland/SchoolDashboardApp",
    demo: "#"
  },
  {
    id: 3,
    title: "Bachelor Project",
    description:
      "Capstone application developed for my bachelor's degree. Includes the implementation itself and several written reports covering requirements, design and evaluation.",
    image: [intility, oslomet], // two images stacked vertically
    tags: ["React", "TypeScript", "Agile", "Software Engineering"],
    github: "https://github.com/HalvorHetland/Bachelor-Prosjekt",
    demo: "#",
    reports: [
      { name: "Final Report", url: bachelorReport }
      // add additional report files from /src/files if needed
    ]
  },
  {
    id: 4,
    title: "Organizer AI",
    description:
      "AI‑powered organizer application that helps manage tasks, schedules and notes with natural‑language commands.",
    image: organizerAi,
    tags: ["AI", "Google Ai Studio", "Chatbot", "Education"],
    github: "https://github.com/HalvorHetland/OrganizerAi",
    demo: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 group h-full">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 relative">
                  {Array.isArray(project.image) ? (
                    <div className="flex flex-col w-full h-full">
                      {project.image.map((src, i) => (
                        <ImageWithFallback
                          key={i}
                          src={src}
                          alt={`${project.title} ${i + 1}`}
                          className="w-full h-1/2 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ))}
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2 flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-blue-50 hover:border-blue-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>

                  {/* report links, if any */}
                  {project.reports &&
                    project.reports.map((r) => (
                      <Button
                        key={r.url}
                        variant="outline"
                        size="sm"
                        className="gap-1 hover:bg-blue-50 hover:border-blue-300"
                        asChild
                      >
                        <a href={r.url} target="_blank" rel="noopener noreferrer">
                          {r.name}
                        </a>
                      </Button>
                    ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
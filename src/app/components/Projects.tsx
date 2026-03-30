import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

import dhis2app from "../../assets/dhis2app.png";
import schoolPlatform from "../../assets/schoolPlatform.png";
import intility from "../../assets/intility.png";
import oslomet from "../../assets/oslomet.png";
import organizerAi from "../../assets/organizerAi.png";
import bachelorReport from "../../assets/Sluttrapport_Gruppe20.pdf";

const projects = [
  {
    id: 1,
    title: "DHIS2 Web Application",
    description: "A web application for managing and visualizing health data.",
    longDescription: {
      problem:
        "Health organizations often struggle with complex datasets that are difficult to visualize and analyze.",
      solution:
        "I developed a React-based web application integrated with DHIS2 APIs to present health data through interactive dashboards and visualizations.",
      tech: ["React", "DHIS2 API", "Data Visualization", "REST APIs"],
      outcome:
        "The platform enables easier health data exploration and improves decision-making for administrators."
    },
    images: [dhis2app],
    tags: ["React", "DHIS2", "Health Data", "Web Development"],
    github: "https://github.com/HalvorHetland/DHIS2_WebApp"
  },
  {
    id: 2,
    title: "School Dashboard Application",
    description:
      "Dashboard app for schools to track performance and attendance.",
    longDescription: {
      problem:
        "Schools often lack centralized dashboards to monitor student progress and administrative metrics.",
      solution:
        "I created a real-time dashboard with charts and data insights for teachers and administrators.",
      tech: ["React", "TypeScript", "Charts", "Dashboard UX"],
      outcome:
        "Teachers and staff can quickly identify trends in attendance and performance."
    },
    images: [schoolPlatform],
    tags: ["React", "TypeScript", "Dashboard", "Education"],
    github: "https://github.com/HalvorHetland/SchoolDashboardApp"
  },
  {
    id: 3,
    title: "Bachelor Project",
    description:
      "Capstone project combining software development with academic research.",
    longDescription: {
      problem:
        "The goal was to design and implement a real-world application following modern software engineering practices.",
      solution:
        "Our team followed Agile methodologies to build the application and documented the entire development lifecycle.",
      tech: ["React", "TypeScript", "Agile", "Software Engineering"],
      outcome:
        "The project resulted in a complete application and detailed academic documentation."
    },
    images: [intility, oslomet],
    tags: ["React", "TypeScript", "Agile", "Software Engineering"],
    github: "https://github.com/HalvorHetland/Bachelor-Prosjekt",
    reports: [{ name: "Final Report", url: bachelorReport }]
  },
  {
    id: 4,
    title: "Organizer AI",
    description:
      "AI-powered organizer that manages tasks and schedules with natural language.",
    longDescription: {
      problem:
        "Managing tasks across different tools can be inefficient and time-consuming.",
      solution:
        "I built an AI assistant capable of understanding natural-language commands to organize tasks and schedules.",
      tech: ["AI", "Google AI Studio", "Chatbot", "React"],
      outcome:
        "Users can interact conversationally with the organizer to manage productivity."
    },
    images: [organizerAi],
    tags: ["AI", "Google AI Studio", "Chatbot", "Education"],
    github: "https://github.com/HalvorHetland/OrganizerAi"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects demonstrating my development experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >

              <Card
                onClick={() => {
                  setSelectedProject(project);
                  setImageIndex(0);
                }}
                className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all border-2 hover:border-blue-200 group h-full"
              >

                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600">
                    {project.title}
                  </CardTitle>

                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-blue-100 text-blue-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 flex-wrap">

                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  {project.reports &&
                    project.reports.map((r) => (
                      <Button key={r.url} variant="outline" size="sm" asChild>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >

            <motion.div
              className="bg-white max-w-3xl w-full rounded-2xl shadow-xl overflow-hidden relative"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              <div className="relative">

                <img
                  src={selectedProject.images[imageIndex]}
                  className="w-full h-[300px] object-cover"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 bg-white/80 p-2 rounded-full"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 bg-white/80 p-2 rounded-full"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}

              </div>

              <div className="p-6 space-y-4">

                <h3 className="text-2xl font-semibold">
                  {selectedProject.title}
                </h3>

                <div>
                  <h4 className="font-semibold">Problem</h4>
                  <p className="text-gray-600">
                    {selectedProject.longDescription.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Solution</h4>
                  <p className="text-gray-600">
                    {selectedProject.longDescription.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.longDescription.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold">Outcome</h4>
                  <p className="text-gray-600">
                    {selectedProject.longDescription.outcome}
                  </p>
                </div>

                <Button asChild>
                  <a href={selectedProject.github} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-gray-300 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Halvor Hetland</h3>
            <p className="text-sm">
              Solution Developer and Informatics student passionate about creating user-centered IT solutions 
              and smart digital experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#interests" className="hover:text-white transition-colors">Skills</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm mb-4">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                halvor.hetland@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +47 46 54 66 15
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Oslo, Norway
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/HalvorHetland" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/halvor-hetland-34096b1b8/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:halvor.hetland@gmail.com" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Halvor Hetland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

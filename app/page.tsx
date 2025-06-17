'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Eye, 
  ArrowLeft,
  Briefcase, 
  GraduationCap, 
  Rocket,
  Mail, 
  Github, 
  Linkedin,
  User,
  Info,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  CheckCircle,
  Clock
} from 'lucide-react';

// Types for better TypeScript support
interface Project {
  name: string;
  description: string;
  tech: string[];
  metrics?: string;
  link?: string;
  status: 'completed' | 'in-progress';
}

interface Skill {
  category: string;
  technologies: string[];
  icon: any;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');

  const titles = ['Full-Stack Developer', 'React Specialist', 'UI/UX Enthusiast'];
  const fullTitle = 'Full-Stack Developer';

  useEffect(() => {
    setIsLoaded(true);
    
    // Typing animation for title
    const typeTitle = async () => {
      setIsTyping(true);
      for (let i = 0; i <= fullTitle.length; i++) {
        setCurrentTitle(fullTitle.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      setIsTyping(false);
    };
    
    const timer = setTimeout(typeTitle, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Sample projects data (replace with your actual projects)
  const projects: Project[] = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: 'Improved conversion by 35%',
      status: 'completed'
    },
    {
      name: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      metrics: 'Reduced project delays by 40%',
      status: 'completed'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Real-time data visualization platform for business insights',
      tech: ['React', 'D3.js', 'Python', 'AWS'],
      status: 'in-progress'
    }
  ];

  const skills: Skill[] = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: Smartphone
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Express', 'FastAPI'],
      icon: Database
    },
    {
      category: 'DevOps & Cloud',
      technologies: ['AWS', 'Docker', 'CI/CD', 'Vercel'],
      icon: Cloud
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      icon: Code
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Akshay_Gaddi_resume_2025.pdf';
    link.download = 'Akshay_Gaddi_Resume_2025.pdf';
    link.click();
  };

  const handleViewResume = () => {
    setShowPDF(true);
  };

  const handleScheduleCall = () => {
    window.open('mailto:amg.akshaygaddi@gmail.com?subject=Let\'s Schedule a Call&body=Hi Akshay, I\'d like to schedule a call to discuss opportunities.', '_blank');
  };

  const handleBackToHome = () => {
    setShowPDF(false);
  };

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-300 h-6 rounded w-3/4"></div>
      <div className="bg-gray-300 h-4 rounded w-1/2"></div>
      <div className="bg-gray-300 h-4 rounded w-2/3"></div>
    </div>
  );

  if (showPDF) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg">
          <motion.button 
            onClick={handleBackToHome}
            className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-full text-white transition-all duration-300 focus:ring-4 focus:ring-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go back to home page"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>
          
          <h2 className="text-xl font-bold text-white">Akshay Gaddi - Resume</h2>
          
          <motion.button 
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-full text-white transition-all duration-300 focus:ring-4 focus:ring-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download resume as PDF"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </motion.button>
        </div>
        
        <div className="p-4 md:p-6 h-[calc(100vh-80px)]">
          <iframe 
            src="/Akshay_Gaddi_resume_2025.pdf" 
            className="w-full h-full rounded-lg shadow-xl border-none"
            title="Akshay Gaddi Resume"
            loading="lazy"
          />
        </div>
        
        <div className="md:hidden p-5 bg-amber-50 border-l-4 border-amber-400 rounded-lg mx-4 mb-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-amber-800">
              <Info className="w-6 h-6" />
              <h3 className="font-bold text-lg">Mobile Viewing Notice</h3>
            </div>
            <p className="text-amber-800">For the best viewing experience on mobile devices:</p>
            <ul className="list-disc ml-5 text-amber-800 space-y-1">
              <li>Tap "Download PDF" to save and open in your preferred PDF viewer</li>
              <li>Use pinch-to-zoom for better readability</li>
              <li>Rotate your device to landscape mode</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-1000`}>
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grain%22%20width%3D%22100%22%20height%3D%22100%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22%20fill%3D%22rgba(255,255,255,0.1)%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22url(%23grain)%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Professional Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Professional Photo Placeholder */}
              <motion.div 
                className="flex items-center gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/30">
                    <User className="w-12 h-12 text-white/80" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    Available
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white/90 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Remote • Global</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-4 h-4" />
                    <span>3+ Years Experience</span>
                  </div>
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block text-xl md:text-2xl font-normal opacity-90 mb-2">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Akshay Gaddi
                </span>
              </h1>
              
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-2">
                  {currentTitle}
                  {isTyping && <span className="animate-pulse">|</span>}
                </h2>
                <p className="text-lg text-white/80">
                  Building scalable web applications with React, Node.js & Cloud Technologies
                </p>
              </div>

              {/* Key Technologies */}
              <div className="mb-8">
                <p className="text-white/70 mb-3">Specialized in:</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'AWS', 'Next.js'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-sm text-white border border-white/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  onClick={handleScheduleCall}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full text-white font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 overflow-hidden relative focus:ring-4 focus:ring-green-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Schedule a call with Akshay"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.button>
                
                <motion.button 
                  onClick={handleViewResume}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-full text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 overflow-hidden relative focus:ring-4 focus:ring-blue-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View resume"
                >
                  <Eye className="w-5 h-5" />
                  View Resume
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.button>
                
                <motion.button 
                  onClick={handleDownloadResume}
                  className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white font-semibold transition-all duration-300 border border-white/20 overflow-hidden relative focus:ring-4 focus:ring-white/30"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Download resume as PDF"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.button>
              </div>
            </motion.div>

            {/* Right side - Enhanced Professional Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl text-center text-white max-w-md"
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [-5, 0, -5]
                }}
                transition={{ 
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                whileHover={{ scale: 1.05, rotateY: 0 }}
              >
                <div className="text-6xl mb-6 opacity-90">
                  <User className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Professional Resume</h3>
                <p className="opacity-80 mb-6">Updated January 2025</p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col items-center gap-2">
                    <Briefcase className="w-6 h-6 text-blue-300" />
                    <span className="font-medium text-sm">Developer</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Rocket className="w-6 h-6 text-purple-300" />
                    <span className="font-medium text-sm">Innovator</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Globe className="w-6 h-6 text-green-300" />
                    <span className="font-medium text-sm">Remote</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-yellow-300" />
                    <span className="font-medium text-sm">Learner</span>
                  </div>
                </div>

                <div className="text-sm text-white/70">
                  "Passionate about creating exceptional digital experiences"
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="text-blue-500 text-4xl mb-6">
                  <skill.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recent work that showcases my problem-solving abilities and technical expertise
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-6"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-xl relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {project.metrics && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
                    <p className="text-blue-800 font-medium">{project.metrics}</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to discuss your next project? I'd love to hear about your ideas and how we can bring them to life.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.a
                href="mailto:amg.akshaygaddi@gmail.com?subject=Let's Collaborate&body=Hi Akshay, I'd like to discuss a project opportunity."
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-full text-white transition-all duration-300 shadow-lg shadow-blue-500/25 focus:ring-4 focus:ring-blue-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Send email to Akshay"
              >
                <Mail className="w-5 h-5" />
                Start a Conversation
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/akshaygaddi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white transition-all duration-300 border border-white/20 focus:ring-4 focus:ring-white/30"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>
              
              <motion.a
                href="https://github.com/organicboi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white transition-all duration-300 border border-white/20 focus:ring-4 focus:ring-white/30"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View GitHub profile"
              >
                <Github className="w-5 h-5" />
                GitHub
              </motion.a>
            </div>

            {/* Quick Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400">amg.akshaygaddi@gmail.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Remote • Global</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-gray-400">Within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">&copy; 2025 Akshay Gaddi. All rights reserved.</p>
              <p className="text-gray-500">Resume last updated: January 2025</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 rounded">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

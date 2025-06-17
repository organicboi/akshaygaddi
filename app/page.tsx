'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Eye, 
  ArrowLeft,
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
  Clock,
  Star,
  Zap,
  Award
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
  icon: React.ComponentType<{ className?: string }>;
  proficiency: number;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPDF, setShowPDF] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');

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

  // Sample projects data with enhanced styling
  const projects: Project[] = [
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management and AI-powered recommendations',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      metrics: 'Improved conversion by 35% • 10K+ active users',
      status: 'completed',
      link: '#'
    },
    {
      name: 'Real-Time Analytics Dashboard',
      description: 'Enterprise-grade analytics platform with live data visualization and predictive insights',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js', 'WebSocket'],
      metrics: 'Reduced reporting time by 60% • $2M+ data processed',
      status: 'completed',
      link: '#'
    },
    {
      name: 'AI-Powered Task Manager',
      description: 'Intelligent project management tool with ML-based priority optimization and team collaboration',
      tech: ['React', 'Python', 'TensorFlow', 'AWS', 'GraphQL'],
      metrics: 'Increased team productivity by 45%',
      status: 'in-progress'
    }
  ];

  const skills: Skill[] = [
    {
      category: 'Frontend Excellence',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      icon: Smartphone,
      proficiency: 95
    },
    {
      category: 'Backend Mastery',
      technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'],
      icon: Database,
      proficiency: 90
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      icon: Cloud,
      proficiency: 85
    },
    {
      category: 'Modern Tools',
      technologies: ['Git', 'MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch'],
      icon: Code,
      proficiency: 88
    }
  ];

  const achievements = [
    { icon: Award, text: '50+ Projects Delivered', color: 'from-amber-400 to-orange-500' },
    { icon: Star, text: '98% Client Satisfaction', color: 'from-emerald-400 to-teal-500' },
    { icon: Zap, text: '3+ Years Experience', color: 'from-purple-400 to-pink-500' },
    { icon: Globe, text: 'Remote Work Expert', color: 'from-cyan-400 to-blue-500' }
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
    window.open('mailto:amg.akshaygaddi@gmail.com?subject=Let%27s%20Schedule%20a%20Call&body=Hi%20Akshay,%20I%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20opportunities.', '_blank');
  };

  const handleBackToHome = () => {
    setShowPDF(false);
  };

  if (showPDF) {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl border-b border-gray-700">
          <motion.button 
            onClick={handleBackToHome}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 backdrop-blur-xl rounded-xl text-white transition-all duration-300 focus:ring-4 focus:ring-cyan-500/30 border border-cyan-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go back to home page"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>
          
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Akshay Gaddi - Resume
          </h2>
          
          <motion.button 
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-xl text-white transition-all duration-300 focus:ring-4 focus:ring-amber-500/30 shadow-lg shadow-amber-500/25"
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
            className="w-full h-full rounded-2xl shadow-2xl border border-gray-700"
            title="Akshay Gaddi Resume"
            loading="lazy"
          />
        </div>
        
        <div className="md:hidden p-5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl mx-4 mb-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-amber-300">
              <Info className="w-6 h-6" />
              <h3 className="font-bold text-lg">Mobile Viewing Notice</h3>
            </div>
            <p className="text-amber-200">For the best viewing experience on mobile devices:</p>
            <ul className="list-disc ml-5 text-amber-200 space-y-1">
              <li>Tap &ldquo;Download PDF&rdquo; to save and open in your preferred PDF viewer</li>
              <li>Use pinch-to-zoom for better readability</li>
              <li>Rotate your device to landscape mode</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-1000`}>
      {/* Enhanced Hero Section with Modern Dark Theme */}
      <section className="min-h-screen flex items-center relative overflow-hidden py-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Professional Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Professional Status Card */}
              <motion.div 
                className="flex items-center gap-6 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                    <User className="w-14 h-14 text-cyan-400" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
                    Available for Hire
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="font-medium">Remote • Global Timezone</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="font-medium">3+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="font-medium">50+ Projects Completed</span>
                  </div>
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <motion.span 
                  className="block text-xl md:text-2xl font-normal text-gray-400 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Hello, I&apos;m
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Akshay Gaddi
                </motion.span>
              </h1>
              
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    {currentTitle}
                    {isTyping && <span className="animate-pulse text-cyan-400">|</span>}
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Crafting exceptional digital experiences with cutting-edge technologies. 
                  Specialized in building scalable, performant applications that drive business growth.
                </p>
              </div>

              {/* Enhanced Technology Stack */}
              <div className="mb-12">
                <p className="text-gray-400 mb-4 font-medium">Core Technologies:</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'React', color: 'from-blue-400 to-cyan-400' },
                    { name: 'TypeScript', color: 'from-blue-500 to-indigo-500' },
                    { name: 'Node.js', color: 'from-green-400 to-emerald-400' },
                    { name: 'AWS', color: 'from-orange-400 to-amber-400' },
                    { name: 'Next.js', color: 'from-gray-400 to-gray-600' }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className={`px-4 py-2 bg-gradient-to-r ${tech.color} rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech.name}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Premium CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  onClick={handleScheduleCall}
                  className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-2xl text-white font-bold transition-all duration-300 shadow-xl shadow-emerald-500/25 overflow-hidden focus:ring-4 focus:ring-emerald-500/30"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Schedule a call with Akshay"
                >
                  <Calendar className="w-6 h-6" />
                  <span className="text-lg">Schedule a Call</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.button>
                
                <motion.button 
                  onClick={handleViewResume}
                  className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-2xl text-white font-bold transition-all duration-300 shadow-xl shadow-cyan-500/25 overflow-hidden focus:ring-4 focus:ring-cyan-500/30"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View resume"
                >
                  <Eye className="w-6 h-6" />
                  <span className="text-lg">View Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.button>
                
                <motion.button 
                  onClick={handleDownloadResume}
                  className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-700/50 to-gray-700/50 hover:from-slate-600/60 hover:to-gray-600/60 backdrop-blur-xl rounded-2xl text-white font-bold transition-all duration-300 border border-gray-600/50 overflow-hidden focus:ring-4 focus:ring-gray-500/30"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Download resume as PDF"
                >
                  <Download className="w-6 h-6" />
                  <span className="text-lg">Download PDF</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
                className="relative bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-2xl rounded-3xl p-12 border border-gray-700/50 shadow-2xl text-center text-white max-w-md"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-teal-400 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/25">
                      <User className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Professional Resume
                  </h3>
                  <p className="text-gray-400 mb-8 text-lg">Updated January 2025</p>
                  
                  {/* Achievement Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-300">{achievement.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-500/30">
                      <Star className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 font-medium">&ldquo;Excellence in Every Line of Code&rdquo;</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Mastering cutting-edge technologies to build the future of web development
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"></div>
            </div>
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
                className="relative group"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Skill category header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <skill.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-12 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-cyan-400 to-teal-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          />
                        </div>
                        <span className="text-xs text-cyan-400 font-semibold">{skill.proficiency}%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies list */}
                  <div className="space-y-3">
                    {skill.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="font-medium">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into powerful digital solutions that drive real business impact
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </div>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white leading-tight">{project.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {project.status === 'completed' ? '✓ Completed' : '⚡ In Progress'}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Metrics highlight */}
                  {project.metrics && (
                    <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-l-4 border-cyan-400 p-4 mb-6 rounded-r-lg">
                      <p className="text-cyan-300 font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        {project.metrics}
                      </p>
                    </div>
                  )}
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 text-sm rounded-lg font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project link */}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition-colors group-hover:translate-x-1"
                      whileHover={{ x: 5 }}
                    >
                      Explore Project <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Let&apos;s Create Something Extraordinary
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I&apos;m passionate about collaborating on innovative projects 
              that push the boundaries of what&apos;s possible.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <motion.a
                href="mailto:amg.akshaygaddi@gmail.com?subject=Let%27s%20Collaborate&body=Hi%20Akshay,%20I%27d%20like%20to%20discuss%20a%20project%20opportunity."
                className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-2xl text-white font-bold text-lg transition-all duration-300 shadow-xl shadow-purple-500/25 focus:ring-4 focus:ring-purple-500/30 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Send email to Akshay"
              >
                <Mail className="w-6 h-6" />
                Start a Conversation
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/akshaygaddi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 rounded-2xl text-white font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-500/25 focus:ring-4 focus:ring-blue-500/30 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.a>
              
              <motion.a
                href="https://github.com/organicboi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-2xl text-white font-bold text-lg transition-all duration-300 shadow-xl shadow-gray-700/25 focus:ring-4 focus:ring-gray-500/30 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View GitHub profile"
              >
                <Github className="w-6 h-6" />
                GitHub
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.a>
            </div>

            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Mail, title: 'Email', info: 'amg.akshaygaddi@gmail.com', color: 'from-blue-500 to-cyan-500' },
                { icon: MapPin, title: 'Location', info: 'Remote • Global', color: 'from-emerald-500 to-teal-500' },
                { icon: Clock, title: 'Response Time', info: 'Within 24 hours', color: 'from-purple-500 to-pink-500' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.info}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                Akshay Gaddi
              </h3>
              <p className="text-gray-400 mb-2">&copy; 2025 All rights reserved.</p>
              <p className="text-gray-500">Resume last updated: January 2025</p>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/30 rounded px-2 py-1">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/30 rounded px-2 py-1">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

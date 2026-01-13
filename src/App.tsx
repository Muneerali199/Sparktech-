import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import { Zap, Users, BookOpen, Code, MessageCircle, Github, Linkedin, Calendar, Award, Target, Rocket, Menu, X, ChevronDown } from 'lucide-react';
import AudioManager from './components/AudioManager';
import SoundEffects from './components/SoundEffects';

// Import team member images (replace with your actual image paths)
import fardeenImg from './team/fardeen.jpg';
import muneerImg from './team/muneer.jpg';
import kanakImg from './team/kanak.jpg';
import tanishaImg from './team/tanisha.jpg';
import swastikaImg from './team/swastika.jpg';
import alishaImg from './team/alisha.jpg';
import kasheeImg from './team/kashee.jpg';
import mohdImg from './team/mohd.jpg';
import arpitImg from './team/arpit.jpg';
import misbahImg from './team/misbah.jpg';

// Import sponsor logos (replace with your actual image paths)
import sponsor1 from './team/pw.png';
import sponsor2 from './team/OpsTree.png';
import sponsor3 from './team/sponsor3.png';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface Skill {
  title: string;
  icon: React.ReactNode;
  color: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  social: {
    linkedin: string;
    github: string;
  };
  gradient: string;
  image: string;
}

interface Sponsor {
  name: string;
  logo: string;
  url: string;
  description: string;
}

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [soundEnabled] = useState(true);
  interface WindowWithSounds extends Window {
    playHoverSound?: () => void;
    playClickSound?: () => void;
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features: Feature[] = [
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Deep Dives into AI & Emerging Technologies",
      description: "Explore the latest trends and advancements in artificial intelligence and cutting-edge tech.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Unrivaled Networking Opportunities",
      description: "Connect with peers, mentors, and industry leaders in the AI community.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Real-World Project Showcases",
      description: "See innovative ideas come to life and share your own groundbreaking projects.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Collaboration & Partnership Opportunities",
      description: "Looking to sponsor or partner? Join our thriving ecosystem of innovation.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const skills: Skill[] = [
    { title: "Skills Development", icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-yellow-400" },
    { title: "Career Preparation", icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-green-400" },
    { title: "Practical AI Tools", icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-blue-400" },
    { title: "Industry Connections", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, color: "text-purple-400" }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Fardeen Princess Ansari",
      role: "Founder & CEO",
      bio: "Visionary leader and princess of innovation, driving growth in AI technologies with passion and creativity.",
      social: {
        linkedin: "https://www.linkedin.com/in/fardeen-ansari-642a352aa",
        github: "#"
      },
      gradient: "from-purple-500 to-pink-500",
      image: fardeenImg
    },
    {
      name: "Muneer Ali",
      role: "Developer & Tech Manager",
      bio: "Technical expert overseeing development and implementation of cutting-edge solutions.",
      social: {
        linkedin: "https://www.linkedin.com/in/muneer-ali",
        github: "#"
      },
      gradient: "from-blue-500 to-cyan-500",
      image: muneerImg
    },
    {
      name: "Kanak Kaushik",
      role: "Social Media & PR Manager",
      bio: "Creative strategist building our brand presence and community engagement.",
      social: {
        linkedin: "https://www.linkedin.com/in/kanak-kaushik-6867a2275",
        github: "#"
      },
      gradient: "from-green-500 to-teal-500",
      image: kanakImg
    },
    {
      name: "Tanisha Garg",
      role: "Graphic Designer",
      bio: "Visual storyteller crafting compelling designs that communicate our mission.",
      social: {
        linkedin: "https://www.linkedin.com/in/tanisha-garg-55b9a61ba",
        github: "#"
      },
      gradient: "from-orange-500 to-red-500",
      image: tanishaImg
    },
    {
      name: "Swastika Bansal",
      role: "Anchor",
      bio: "Engaging host bringing our events and content to life with charismatic delivery.",
      social: {
        linkedin: "https://www.linkedin.com/in/swastika-bansal-1b90a82a6",
        github: "#"
      },
      gradient: "from-yellow-500 to-amber-500",
      image: swastikaImg
    },
    {
      name: "Alisha Sagar",
      role: "Team Member",
      bio: "Passionate contributor dedicated to advancing AI education and community engagement.",
      social: {
        linkedin: "https://www.linkedin.com/in/alisha-sagar-3b4052302/",
        github: "https://github.com/Alisha-sagar"
      },
      gradient: "from-pink-500 to-rose-500",
      image: alishaImg
    },
    {
      name: "Kashee Keshwani",
      role: "Team Member",
      bio: "Enthusiastic team member committed to fostering innovation and learning in tech.",
      social: {
        linkedin: "https://www.linkedin.com/in/kasheekeswani/",
        github: "https://github.com/kasheekeswani"
      },
      gradient: "from-violet-500 to-purple-500",
      image: kasheeImg
    },
    {
      name: "Mohd Arham",
      role: "Team Member",
      bio: "Dedicated professional driving impactful initiatives in the AI community.",
      social: {
        linkedin: "#",
        github: "#"
      },
      gradient: "from-cyan-500 to-blue-500",
      image: mohdImg
    },
    {
      name: "Arpit Sharma",
      role: "Team Member",
      bio: "Creative thinker bringing fresh perspectives to technology and innovation.",
      social: {
        linkedin: "https://www.linkedin.com/in/arpit-kumar-sharma-291255358/",
        github: "https://github.com/arpitsharma1879-hue"
      },
      gradient: "from-orange-500 to-amber-500",
      image: arpitImg
    },
    {
      name: "Misbah",
      role: "Team Member",
      bio: "Enthusiastic contributor passionate about technology and innovation.",
      social: {
        linkedin: "https://www.linkedin.com/in/misbah-a-69a2b1373",
        github: "https://github.com/Misbah-55"
      },
      gradient: "from-purple-500 to-indigo-500",
      image: misbahImg
    }
  ];

  const sponsors: Sponsor[] = [
    {
      name: "Tech Innovators Inc.",
      logo: sponsor1,
      url: "https://example.com/tech-innovators",
      description: "Leading the way in AI research and development"
    },
    {
      name: "Future Systems",
      logo: sponsor2,
      url: "https://example.com/future-systems",
      description: "Building the infrastructure for tomorrow's technology"
    },
    {
      name: "Quantum Solutions",
      logo: sponsor3,
      url: "https://example.com/quantum-solutions",
      description: "Pioneering quantum computing applications"
    }
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: easeInOut
      }
    }
  };

  const glowVariants = {
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
      if (soundEnabled) {
        (window as WindowWithSounds).playClickSound?.();
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleHover = () => {
    if (soundEnabled) {
      (window as WindowWithSounds).playHoverSound?.();
    }
  };

  const handleClick = () => {
    if (soundEnabled) {
      (window as WindowWithSounds).playClickSound?.();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Audio Components */}
      <AudioManager />
      <SoundEffects isEnabled={soundEnabled} />
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Multiple Star Layers */}
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="shooting-stars"></div>
        
        {/* Dynamic Galaxy Effects */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-blue-900/20 to-transparent opacity-60 animate-pulse-slow"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-600/30 to-transparent rounded-full blur-3xl animate-float"
          style={{
            left: `${20 + Math.sin(scrollY * 0.001) * 10}%`,
            top: `${30 + Math.cos(scrollY * 0.001) * 5}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-radial from-purple-600/25 to-transparent rounded-full blur-3xl animate-float-delayed"
          style={{
            right: `${15 + Math.cos(scrollY * 0.0015) * 8}%`,
            bottom: `${25 + Math.sin(scrollY * 0.0015) * 6}%`,
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl animate-float-slow"
          style={{
            left: `${60 + Math.sin(scrollY * 0.0008) * 12}%`,
            top: `${60 + Math.cos(scrollY * 0.0008) * 8}%`,
          }}
        ></div>

        {/* Mouse Follow Effect */}
        <div 
          className="absolute w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        ></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 group-hover:text-purple-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-purple-400/20 transition-all duration-300"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Spark Tech AI Hub
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Features', 'Hackathon', 'Team', 'Sponsors', 'Collaboration', 'Join Us'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 group text-sm lg:text-base font-medium"
                  onMouseEnter={handleHover}
                  onClick={handleClick}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 blur-sm"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group"
              onMouseEnter={handleHover}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {isMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gray-800/50 animate-slide-down">
              <div className="px-4 py-6 space-y-4">
                {['About', 'Features', 'Hackathon', 'Team', 'Sponsors', 'Collaboration', 'Join Us'].map((item, index) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    onClick={closeMenu} 
                    className="block text-gray-300 hover:text-cyan-400 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section - Cartoon Style */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
        <div className="text-center max-w-5xl mx-auto">
          <div 
            className="transform transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            {/* Floating Cartoon Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
            
            {/* Fun Cartoon Decorations */}
            <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</div>
            <div className="absolute top-20 right-20 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>✨</div>
            <div className="absolute bottom-20 left-32 text-5xl animate-bounce" style={{ animationDelay: '0.8s' }}>💫</div>
            <div className="absolute bottom-32 right-16 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🎨</div>
            
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x leading-tight cartoon-text">
                Welcome to Spark Tech AI Hub! 
                <span className="inline-block animate-bounce ml-2">🚀</span>
              </h1>
              
              <div className="relative mb-8 sm:mb-10">
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in-up px-2 cartoon-bounce">
                  Get ready to ignite your potential where{' '}
                  <span className="text-cyan-400 font-semibold relative cartoon-wiggle inline-block">
                    Artificial Intelligence
                    <div className="absolute inset-0 bg-cyan-400/20 blur-lg animate-pulse"></div>
                  </span>{' '}
                  meets cutting-edge learning technologies.
                  <span className="inline-block animate-bounce ml-2">🎯</span>
                </p>
                
                <p className="text-lg sm:text-xl text-gray-400 mb-10 sm:mb-12 max-w-4xl mx-auto animate-fade-in-up leading-relaxed px-2" style={{ animationDelay: '0.3s' }}>
                  We're building a vibrant community of curious minds, change-makers, and tech enthusiasts, 
                  bringing you closer through live events, workshops, and meetups across India! 
                  <span className="inline-block animate-pulse">🇮🇳✨</span>
                  <span className="inline-block animate-bounce ml-2" style={{ animationDelay: '0.5s' }}>🎪</span>
                  <span className="inline-block animate-bounce ml-2" style={{ animationDelay: '0.7s' }}>🎊</span>
                </p>

                {/* Fardeen Princess Introduction */}
                <div className="relative bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-pink-500/30 overflow-hidden mb-8 sm:mb-10 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
                  
                  {/* Princess Tag */}
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-pink-500/20 rounded-full border border-pink-400/30">
                      <span className="text-2xl animate-bounce">👑</span>
                      <span className="text-pink-300 font-semibold text-sm sm:text-base">Meet Our Founder</span>
                      <span className="text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>✨</span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient-x">
                      Fardeen Princess Ansari
                    </h3>
                    
                    <p className="text-base sm:text-lg text-pink-200 mb-4 leading-relaxed">
                      <span className="inline-block animate-bounce mr-1">💝</span>
                      The inspiring princess of innovation and CEO of Spark Tech AI Hub! 
                      She leads with passion, creativity, and a vision to transform the tech landscape.
                      <span className="inline-block animate-bounce ml-1">🌟</span>
                    </p>
                    
                    <p className="text-sm sm:text-base text-purple-200 mb-4 leading-relaxed">
                      <span className="inline-block mr-1">🎤</span>
                      As our lead speaker, she brings energy and inspiration to every event!
                    </p>

                    {/* Event Announcement - Enhanced Reminder */}
                    <div className="mt-6 p-6 bg-gradient-to-br from-pink-600/30 via-purple-600/30 to-cyan-600/30 rounded-3xl border-2 border-pink-400/50 shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
                      {/* Save the Date Header */}
                      <div className="mb-4">
                        <p className="text-xl sm:text-2xl text-white font-bold mb-2 animate-pulse">
                          <span className="inline-block mr-2">📅</span>
                          SAVE THE DATE!
                          <span className="inline-block ml-2">📅</span>
                        </p>
                      </div>
                      
                      {/* Event Details */}
                      <div className="bg-white/10 rounded-2xl p-4 mb-4 backdrop-blur-sm">
                        <p className="text-2xl sm:text-3xl text-pink-200 font-bold mb-3">
                          17th January 2026
                        </p>
                        <p className="text-lg sm:text-xl text-cyan-200 font-semibold mb-2">
                          📍 Jamia Hamdard, Delhi
                        </p>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                          <span className="inline-block animate-bounce mr-1">✨</span>
                          Join us for an exciting meetup and networking session!
                          <span className="inline-block animate-bounce ml-1">✨</span>
                        </p>
                      </div>
                      
                      {/* Special Message */}
                      <p className="text-sm sm:text-base text-pink-200 leading-relaxed italic">
                        <span className="inline-block animate-bounce mr-1">💕</span>
                        Come meet Fardeen Princess and the entire Spark Tech AI Hub team!
                        <span className="inline-block animate-bounce ml-1">💖</span>
                      </p>
                    </div>

                    {/* Hackathon Cancelled Note */}
                    <div className="mt-4 p-3 bg-red-900/30 rounded-xl border border-red-500/30">
                      <p className="text-xs sm:text-sm text-red-300">
                        <span className="mr-1">⚠️</span>
                        Note: SnowFrost Hackathon 2026 has been cancelled
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
                <a 
                  href="https://chat.whatsapp.com/DL3S2U6W6zHJFREu11Oht0?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-white font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50 text-sm sm:text-base overflow-hidden"
                  onMouseEnter={handleHover}
                  onClick={handleClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Join WhatsApp Community
                  </div>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/fardeen-ansari-642a352aa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 sm:px-10 py-4 sm:py-5 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base overflow-hidden"
                  onMouseEnter={handleHover}
                  onClick={handleClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="relative z-10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Connect on LinkedIn
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              What to Expect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl overflow-hidden animate-fade-in-up"
                onMouseEnter={handleHover}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-6 group-hover:text-purple-400 transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚠️ SnowFrost Hackathon 2026 - CANCELLED ⚠️ */}
      <section id="hackathon" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-3 h-3 bg-red-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-red-300 rounded-full animate-float-delayed opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-red-300 rounded-full animate-float-slow opacity-60"></div>
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-red-400 rounded-full animate-float opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8 flex-wrap">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent animate-gradient-x px-2">
                SNOWFROST HACKATHON 2026
              </h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-red-500/30 overflow-hidden max-w-4xl mx-auto"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 animate-gradient-x"></div>
              
              <div className="relative z-10">
                <div className="text-6xl sm:text-7xl mb-6">⚠️</div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-400 mb-6">
                  EVENT CANCELLED
                </h3>
                <p className="text-xl sm:text-2xl text-white mb-6 leading-relaxed">
                  We regret to inform you that the SnowFrost Hackathon 2026 has been cancelled.
                </p>
                <div className="border-t border-red-500/30 my-8"></div>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  We apologize for any inconvenience this may cause. All registered participants will be notified directly.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 mt-6 leading-relaxed">
                  Please stay connected with us for future events and opportunities.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Future Events Message */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-purple-500/30 overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 animate-gradient-x"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stay Tuned for Future Events
              </h3>
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed">
                Join our community to be the first to know about upcoming workshops, events, and hackathons. 🚀
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://chat.whatsapp.com/DL3S2U6W6zHJFREu11Oht0?mode=ac_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-white font-bold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 overflow-hidden"
                  onMouseEnter={handleHover}
                  onClick={handleClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Join Our Community</span>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/company/spark-tech-ai-hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 overflow-hidden"
                  onMouseEnter={handleHover}
                  onClick={handleClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Follow Us on LinkedIn</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Section with Stunning Animations */}
      <section id="team" className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              The brilliant minds powering Spark Tech AI Hub's vision and innovation
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Gradient Glow Effect */}
                  <motion.div 
                    variants={glowVariants}
                    initial={{ opacity: 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
                  />
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                  
                  <div className="relative z-10 flex flex-col items-center h-full">
                    {/* Team Member Photo with Enhanced Styling */}
                    <motion.div
                      variants={imageVariants}
                      className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mb-8 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-cyan-400/30 transition-all duration-500 shadow-2xl relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Hover shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                    </motion.div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-center text-purple-400 mb-4 sm:mb-6 text-lg font-medium">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-center text-base leading-relaxed mb-6 flex-grow">
                      {member.bio}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mt-auto">
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-125"
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a 
                        href={member.social.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-300 transform hover:scale-125"
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Sponsors Section */}
      <section id="sponsors" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
            >
              Our Sponsors
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              We're grateful for the support of these visionary organizations
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {sponsors.map((sponsor, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden h-full flex flex-col items-center">
                  {/* Gradient Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-red-500/10 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  
                  {/* Sponsor Logo */}
                  <div className="relative z-10 w-full h-32 flex items-center justify-center mb-8">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-300 text-center text-base leading-relaxed mb-6">
                    {sponsor.description}
                  </p>
                  
                  <a 
                    href={sponsor.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                    onMouseEnter={handleHover}
                    onClick={handleClick}
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Become a Sponsor CTA */}
          <div className="mt-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-purple-500/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 animate-gradient-x"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Want to become a sponsor?</h3>
                <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join our growing list of partners and get exposure to thousands of AI enthusiasts, students, and professionals.
                </p>
                <a 
                  href="mailto:sponsors@sparktechaihub.com" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
                  onMouseEnter={handleHover}
                  onClick={handleClick}
                >
                  Contact Us About Sponsorship
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Collaboration Section */}
      <section id="collaboration" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Collaboration with Blockchain Web 3 Technologies
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              { icon: Calendar, title: "Workshop", color: "from-purple-500 to-blue-500", delay: "0s" },
              { icon: Code, title: "AI Tech & Blockchain", color: "from-cyan-500 to-green-500", delay: "0.2s" },
              { icon: Rocket, title: "Hackathon 🖥 💡", color: "from-orange-500 to-red-500", delay: "0.4s" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                onMouseEnter={handleHover}
                style={{ animationDelay: item.delay }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute inset-[1px] rounded-3xl bg-gray-900/90 backdrop-blur-xl"></div>
                
                <div className="relative z-10">
                  <item.icon className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 mx-auto mb-6 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Aim Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-x">
              Aim of Our Club
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed px-2 relative z-10">
                Connect students with industry experts, researchers with professionals in the AI field. 
                People learn and innovate in the field of Artificial Intelligence and related technologies like machine learning.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl blur-xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={index}
               className="group relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-800/50 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 text-center overflow-hidden animate-fade-in-up"
               onMouseEnter={handleHover}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`${skill.color} group-hover:text-white transition-colors duration-300 mx-auto mb-4 flex justify-center transform group-hover:scale-110 group-hover:rotate-12`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>

                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-purple-500/30 overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 animate-gradient-x"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Audience</h3>
                <p className="text-xl sm:text-2xl text-gray-300 mb-6 sm:mb-8">From beginners to advanced enthusiasts</p>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                  We conduct seminars, workshops, hands-on projects, and much more to equip our members 
                  with practical skills in AI tools and prepare them for successful careers in technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Join Section */}
      <section id="join-us" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
            Ready to Spark Your Journey?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-12 leading-relaxed px-2">
            Whether you're a student, a founder, or just passionate about the future of tech, 
            <span className="text-cyan-400 font-semibold relative">
              {' '}Spark Tech AI Hub{' '}
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg animate-pulse"></div>
            </span> 
            is your tribe. Let's build, learn, and grow together.
          </p>

          <div className="space-y-8 mb-12">
            <div className="text-lg sm:text-xl text-gray-400 space-y-4 px-2">
              {[
                "💬 Tell us in the comments: What city should we spark up next?",
                "🔔 Turn on post notifications so you never miss an event!",
                "🤝 Want to collaborate with our community? Send us a DM!"
              ].map((text, index) => (
                <div 
                  key={index}
                  className="animate-fade-in-up bg-gray-900/30 backdrop-blur-sm rounded-2xl p-4 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 sm:mt-12 px-4">
              <a 
                href="https://chat.whatsapp.com/DL3S2U6W6zHJFREu11Oht0?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-white font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50 text-sm sm:text-base overflow-hidden"
                onMouseEnter={handleHover}
                onClick={handleClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Join WhatsApp Community
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/spark-tech-ai-hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50 text-sm sm:text-base overflow-hidden"
                onMouseEnter={handleHover}
                onClick={handleClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Connect with us
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6 sm:mb-8 group">
            <div className="relative">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 group-hover:text-purple-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-purple-400/20 transition-all duration-300"></div>
            </div>
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Spark Tech AI Hub
            </span>
          </div>
          
          <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
            Building the future of AI, one spark at a time.
          </p>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://chat.whatsapp.com/DL3S2U6W6zHJFREu11Oht0?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              onMouseEnter={handleHover}
              onClick={handleClick}
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/fardeen-ansari-642a352aa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              onMouseEnter={handleHover}
              onClick={handleClick}
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          
          <p className="text-xs sm:text-sm text-gray-500">
            © 2024 Spark Tech AI Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
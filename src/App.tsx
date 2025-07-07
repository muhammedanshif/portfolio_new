import React from 'react';
import { 
  User, 
  Code, 
  Database, 
  Server, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  GraduationCap,
  Calendar,
  Award,
  Briefcase,
  Star,
  ChevronDown,
  Building,
  Clock,
  CheckCircle
} from 'lucide-react';

function App() {
  const skills = [
    { name: 'JavaScript', icon: Code, color: 'bg-yellow-500', level: 90 },
    { name: 'React.js', icon: Code, color: 'bg-blue-500', level: 85 },
    { name: 'Node.js', icon: Server, color: 'bg-green-500', level: 80 },
    { name: 'Python', icon: Code, color: 'bg-blue-600', level: 75 },
    { name: 'MongoDB', icon: Database, color: 'bg-green-600', level: 85 },
    { name: 'MySQL', icon: Database, color: 'bg-orange-500', level: 80 },
    { name: 'Express.js', icon: Server, color: 'bg-gray-600', level: 85 },
    { name: 'HTML/CSS', icon: Globe, color: 'bg-red-500', level: 95 },
  ];

 const projects = [
    {
      title: 'Scholarship Portal',
      description: 'A comprehensive web platform that showcases available scholarships for students. The website provides detailed information on each scholarship, including eligibility criteria, funding amounts, application processes, and deadlines to help students find and apply for relevant opportunities.',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      featured: true,
      duration: 'Mar 2024 - Apr 2024',
      teamSize: '3-member Agile team',
      achievements: [
        'Developed comprehensive scholarship information system',
        'Implemented search and filter functionality for scholarships',
        'Created detailed scholarship pages with eligibility and application info',
        'Collaborated effectively in Agile development environment',
        'Delivered complete documentation and presentation'
      ],
      type: 'Academic Project'
    },
    {
      title: 'BookingInn',
      description: 'A full-featured hotel booking platform that provides a seamless experience for users to search, book, and manage hotel reservations. Features comprehensive hotel listings with detailed information, advanced search capabilities, and user-friendly booking management.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      live: '#',
      featured: true,
      duration: 'Apr 2024 - May 2024',
      company: 'softLogic Systems',
      achievements: [
        'Built responsive hotel listing interface with images and amenities',
        'Implemented advanced search and filtering by location, price, and ratings',
        'Developed secure booking and reservation management system',
        'Created user dashboard for managing bookings and preferences',
        'Integrated payment processing and confirmation system'
      ],
    
    }

  ];

  const internships = [
    {
      title: 'MERN Stack Developer Intern',
      company: 'Softlogic Systems ,Chennai',
      duration: '4 months',
      period: 'Dec 2024 - Apr 2025',
      description: 'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
      achievements: [
        'Built responsive web applications with React.js and modern JavaScript',
        'Implemented RESTful APIs using Node.js and Express.js',
        'Worked with MongoDB for database design and management',
        'Participated in code reviews and agile development processes',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML/CSS'],
      type: 'MERN Stack'
    },
    {
      title: 'Python Full Stack Developer Intern',
      company: 'Quest Innovative Solutions , Calicut',
      duration: '3 months',
      period: 'Oct 2021 - Jan 2022',
      description: 'Gained experience in Python-based web development using Django framework. Worked on backend development, database integration, and frontend implementation for enterprise applications.',
      achievements: [
        'Developed web applications using Django framework',
        'Implemented user authentication and authorization systems',
        'Created and optimized database schemas using PostgreSQL',
        'Built responsive frontend interfaces with HTML, CSS, and JavaScript',
        'Integrated third-party APIs and payment gateways'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
      type: 'Python Full Stack'
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      University: 'University of Madras',
      year: '2022-2024',
      grade: 'First Class',
      description: 'Specialized in Software Development, Database Management, and Web Technologies'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Calicut University',
      year: '2018-2021',
      description: 'Foundation in Computer Science, Programming, and System Analysis'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DevPortfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors duration-300">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors duration-300">About</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-blue-400 transition-colors duration-300">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition-colors duration-300">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors duration-300">Projects</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-blue-400 transition-colors duration-300">Education</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors duration-300">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-6 min-h-screen flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-lg font-semibold">
                  Hello, I'm Muhammed Anshif
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Full-Stack
                </span>
                <br />
                <span className="text-white">Developer</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                MCA Graduate with hands-on internship experience in MERN Stack and Python Full Stack development. 
                Ready to contribute to dynamic development teams and grow in the tech industry.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <Download className="inline mr-2 h-5 w-5" />
                  Download Resume
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 transform hover:scale-105"
                >
                  <Mail className="inline mr-2 h-5 w-5" />
                  Get In Touch
                </button>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
                  <div className="w-72 h-72 bg-gray-900 rounded-full flex items-center justify-center">
                    <User className="w-32 h-32 text-white" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg hover:animate-pulse transition-all duration-300">
                  <Code className="w-10 h-10 text-gray-900" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse shadow-lg hover:animate-bounce transition-all duration-300">
                  <Database className="w-8 h-8 text-gray-900" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <button onClick={() => scrollToSection('about')} className="animate-bounce hover:animate-pulse transition-all duration-300">
              <ChevronDown className="w-8 h-8 text-blue-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-400">Passionate Developer & Problem Solver</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                I'm a recent MCA graduate with practical experience gained through two comprehensive internships 
                in full-stack development. My journey includes hands-on work with both MERN Stack and Python 
                Full Stack technologies, giving me a well-rounded foundation in modern web development.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                During my internships, I've contributed to real-world projects, collaborated with development teams, 
                and gained valuable experience in agile development processes. This practical exposure has strengthened 
                my technical skills and prepared me for professional software development roles.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                I believe in writing clean, maintainable code and staying updated with the latest industry trends 
                and best practices. My goal is to contribute meaningfully to innovative projects while continuing 
                to grow as a developer.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center group">
                  <Calendar className="w-6 h-6 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="text-white font-semibold">Status</span>
                    <p className="text-gray-300 text-sm">Fresh Graduate</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <MapPin className="w-6 h-6 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="text-white font-semibold">Location</span>
                    <p className="text-gray-300 text-sm">India</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Briefcase className="w-6 h-6 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="text-white font-semibold">Experience</span>
                    <p className="text-gray-300 text-sm">7 Months Internship</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Star className="w-6 h-6 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="text-white font-semibold">Specialization</span>
                    <p className="text-gray-300 text-sm">Full Stack</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105">
                <GraduationCap className="w-16 h-16 text-blue-400 mb-6 hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-semibold mb-3">Education</h4>
                <p className="text-gray-300 text-lg mb-2">Master of Computer Applications</p>
                <p className="text-gray-400">Comprehensive study of software development, algorithms, and system design</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300 transform hover:scale-105">
                <Award className="w-16 h-16 text-purple-400 mb-6 hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-semibold mb-3">Practical Experience</h4>
                <p className="text-gray-300 text-lg mb-2">MERN & Python Full Stack</p>
                <p className="text-gray-400">Real-world internship experience in modern web development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">Hands-on internship experience in full-stack development</p>
          </div>
          
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-300">
                          <Building className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300">{internship.title}</h3>
                          <p className="text-xl text-white font-medium">{internship.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center text-gray-300">
                          <Clock className="w-5 h-5 mr-2 text-green-400" />
                          <span className="font-medium">{internship.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                          <span>{internship.period}</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-blue-400/30">
                          <span className="text-blue-400 font-semibold">{internship.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">{internship.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {internship.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-gray-300 hover:text-white transition-colors duration-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {internship.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">Technologies I work with to bring ideas to life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105 group">
                <div className={`w-16 h-16 ${skill.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-x-105"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 text-sm mt-2">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-400 mb-3 hover:scale-110 transition-transform duration-300">Frontend</div>
              <p className="text-gray-300 leading-relaxed">React.js, JavaScript ES6+, TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design</p>
            </div>
            <div className="text-center bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-green-400 mb-3 hover:scale-110 transition-transform duration-300">Backend</div>
              <p className="text-gray-300 leading-relaxed">Node.js, Express.js, Python, Django, RESTful APIs, Authentication & Authorization</p>
            </div>
            <div className="text-center bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl font-bold text-purple-400 mb-3 hover:scale-110 transition-transform duration-300">Database</div>
              <p className="text-gray-300 leading-relaxed">MongoDB, MySQL, PostgreSQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">A showcase of my development skills and creativity</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">Featured</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400 hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 font-semibold transform hover:scale-105">
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </a>
                    <a href={project.live} className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 font-semibold transform hover:scale-105">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm hover:bg-purple-500/30 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a href={project.live} className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-lg">Academic foundation that shaped my technical expertise</p>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2 hover:text-blue-300 transition-colors duration-300">{edu.degree}</h3>
                    <p className="text-xl text-white mb-1">{edu.institution}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-lg font-semibold text-purple-400">{edu.year}</p>
                    <p className="text-gray-300">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 text-xl">
              I'm actively seeking entry-level opportunities to start my career in tech. Let's discuss how I can contribute to your team.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-blue-400">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center group cursor-pointer">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-6 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">Email</p>
                    <p className="text-white font-semibold text-xl group-hover:text-blue-400 transition-colors duration-300">muhammedanshif35@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mr-6 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">Phone</p>
                    <p className="text-white font-semibold text-xl group-hover:text-green-400 transition-colors duration-300">+91 8157906063</p>
                  </div>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mr-6 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg">Location</p>
                    <p className="text-white font-semibold text-xl group-hover:text-purple-400 transition-colors duration-300">India</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mt-12">
                <a href="https://github.com/muhammedanshif" className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-blue-400">
                  <Github className="w-8 h-8" />
                </a>
                <a href="http://www.linkedin.com/in/muhammedanshif4" className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-blue-400">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20 transition-all duration-300">
              <h4 className="text-2xl font-semibold mb-6 text-white">Send a Message</h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-4 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-4 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-4 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-4 text-white focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Muhammed Anshif
            </div>
            <p className="text-gray-400 mb-6">
              Full-Stack Developer • MCA Graduate • 7 Months Internship Experience
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/muhammedanshif" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                <Github className="w-6 h-6" />
              </a>
              <a href="http://www.linkedin.com/in/muhammedanshif4" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500">
              Muhammed Anshif © 2025.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Home, BookOpen, Users, GraduationCap, Mail, ArrowRight,
  ShieldCheck, Sun, Star, MapPin, Phone, Clock, Lightbulb, Heart, BookText, Facebook, Moon, ChevronUp, MessageSquare, BookMarked
} from 'lucide-react';

// --- Configuration Data ---
const INSTITUTE_NAME = 'Al Quran Academy';
const INSTITUTE_SLOGAN = 'Illuminating Hearts with the Light of the Quran.';
const PRIMARY_COLOR = 'green'; // Tailwind color: e.g., green-700
const ACCENT_COLOR = 'amber'; // Tailwind color for golden elements: e.g., amber-400

// Logo images
const LOGO_DARK_BG = 'https://i.imgur.com/eBfJd8B.png'; // Image 2 - used for dark backgrounds (white logo)
const LOGO_LIGHT_BG = 'https://i.imgur.com/1I58E97.png'; // Image 1 - used for light backgrounds (green logo)
const FACEBOOK_LINK = 'https://www.facebook.com/profile.php?id=61562103570473&rdid=0kh6HDflH7Q61qZT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AFk9YKy3U%2F#';

const navItems = [
  { name: 'Home', icon: Home, page: 'home' },
  { name: 'Courses', icon: BookOpen, page: 'courses' },
  { name: 'Enrollment', icon: GraduationCap, page: 'enrollment' },
  { name: 'Teachers', icon: Users, page: 'faculty' },
  { name: 'Blog', icon: BookMarked, page: 'blog' }, // New Blog Page
  { name: 'About', icon: Heart, page: 'about' },
  { name: 'Contact', icon: Mail, page: 'contact' },
];

const mockCourses = [
  { id: 1, title: 'Noorani Qaida', icon: BookText, description: 'Foundational learning for Quranic recitation and Tajweed.', duration: '8 Weeks', price: 99 },
  { id: 2, title: 'Hifz Program', icon: ShieldCheck, description: 'Memorization of the Holy Quran with expert guidance.', duration: 'Flexible', price: 149 },
  { id: 3, title: 'Tajweed & Tarteel', icon: Star, description: 'Mastering the rules of Quranic pronunciation and melodious recitation.', duration: '12 Weeks', price: 119 },
  { id: 4, title: 'Arabic Language', icon: Lightbulb, description: 'Learn classical Arabic to understand the Quran directly.', duration: '16 Weeks', price: 129 },
];

const mockFaculty = [
  { id: 1, name: 'Ustadh Ahmad Kamal', title: 'Head of Hifz Department', specialty: 'Qira\'at & Tajweed', img: 'https://placehold.co/400x400/065f46/fcd34d?text=AK' },
  { id: 2, name: 'Ustadha Aisha Khan', title: 'Senior Qaida Instructor', specialty: 'Early Childhood Quranic Education', img: 'https://placehold.co/400x400/065f46/fcd34d?text=AK' },
  { id: 3, name: 'Ustadh Omar Hassan', title: 'Arabic Language Specialist', specialty: 'Classical Arabic & Tafsir', img: 'https://placehold.co/400x400/065f46/fcd34d?text=OH' },
];

const mockTestimonials = [
  { id: 1, text: "The Tajweed course fundamentally changed my recitation. The instructor's patience was exceptional, Masha'Allah.", name: 'Fatimah Z.', course: 'Tajweed & Tarteel', rating: 5 },
  { id: 2, text: "My children love the Hifz program! It's engaging and the online format is seamless. They look forward to class every day.", name: 'Omar H.', course: 'Hifz Program', rating: 5 },
  { id: 3, text: "Learning Arabic here has made the Quran so much more meaningful. The materials are excellent and the teachers highly recommended.", name: 'David M.', course: 'Arabic Language', rating: 4 },
];

const mockBlogPosts = [
  { id: 1, title: 'The Importance of Consistency in Hifz', excerpt: 'Memorization is a journey, not a sprint. We explore the best strategies for daily retention and review to achieve your goals.', date: 'Oct 25, 2025' },
  { id: 2, title: 'Understanding the Rules of Ikhfa', excerpt: 'A deep dive into one of the most common and beautiful Tajweed rules, Ikhfa (concealment), with practical examples for recitation.', date: 'Oct 18, 2025' },
  { id: 3, title: 'Bridging the Gap: Teaching Quran to Teens', excerpt: 'Practical tips for parents and teachers on keeping teenagers engaged and motivated in their Quran studies in a modern context.', date: 'Oct 11, 2025' },
];


// --- Utility Components ---

// Text Animation Component (Emulating Framer Motion's staggered text effect using CSS)
const AnimatedText = ({ text, className, delay = 0 }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-char-fade-in"
          style={{ animationDelay: `${delay + index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char} {/* Use non-breaking space for actual space char */}
        </span>
      ))}
    </span>
  );
};

// --- Components ---

const Header = ({ activePage, setActivePage, darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-lg dark:shadow-2xl transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActivePage('home')}>
          <img 
            src={darkMode ? LOGO_DARK_BG : LOGO_LIGHT_BG} 
            alt={`${INSTITUTE_NAME} Logo`} 
            className="h-10 md:h-12 w-auto transition-opacity duration-500" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => { setActivePage(item.page); setIsMenuOpen(false); }}
              className={`flex items-center space-x-2 py-2 px-4 transition-all duration-300 rounded-lg 
                ${activePage === item.page
                  ? `text-white bg-${PRIMARY_COLOR}-700 hover:bg-${PRIMARY_COLOR}-800 shadow-md`
                  : `text-gray-700 dark:text-gray-300 hover:text-${PRIMARY_COLOR}-700 dark:hover:text-${ACCENT_COLOR}-400 hover:bg-gray-100 dark:hover:bg-gray-800`
                } font-medium text-sm lg:text-base`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </button>
          ))}
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors duration-300 ml-4
                text-gray-700 dark:text-${ACCENT_COLOR}-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors duration-300 mr-2
                text-gray-700 dark:text-${ACCENT_COLOR}-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className={`text-gray-700 dark:text-gray-300 hover:text-${PRIMARY_COLOR}-700 focus:outline-none p-2 rounded-lg`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl pb-2">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => { setActivePage(item.page); setIsMenuOpen(false); }}
              className={`block w-full text-left px-6 py-3 transition-colors duration-200 
                ${activePage === item.page
                  ? `text-white bg-${PRIMARY_COLOR}-600 hover:bg-${PRIMARY_COLOR}-700`
                  : `text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-${PRIMARY_COLOR}-700 dark:hover:text-${ACCENT_COLOR}-400`
                }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

const HeroSection = ({ setActivePage }) => (
  <section className={`bg-${PRIMARY_COLOR}-800 dark:bg-gray-950 text-white py-20 md:py-32 rounded-b-xl shadow-inner relative overflow-hidden transition-colors duration-500`}>
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${LOGO_DARK_BG})`, backgroundSize: '200px', backgroundRepeat: 'repeat', backgroundPosition: 'center' }}></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Animated Text for Hero Heading */}
        <AnimatedText
          text={INSTITUTE_NAME}
          className={`block text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-${ACCENT_COLOR}-300`}
        />
        <p className="text-xl md:text-2xl mb-8 font-light text-gray-100 dark:text-gray-300 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          {INSTITUTE_SLOGAN}
        </p>
        <div className="flex justify-center space-x-4 animate-slide-up" style={{ animationDelay: '1.5s' }}>
          <button
            onClick={() => setActivePage('enrollment')}
            className={`flex items-center px-8 py-3 text-lg font-semibold text-${PRIMARY_COLOR}-900 bg-${ACCENT_COLOR}-400 rounded-full shadow-lg 
                        hover:bg-${ACCENT_COLOR}-300 transform hover:scale-105 transition-all duration-300`}
          >
            Enroll Now <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button
            onClick={() => setActivePage('courses')}
            className={`px-8 py-3 text-lg font-semibold text-white border border-${ACCENT_COLOR}-400 rounded-full shadow-md 
                       hover:bg-${ACCENT_COLOR}-400 hover:text-${PRIMARY_COLOR}-900 transform hover:scale-105 transition-all duration-300`}
          >
            View Courses
          </button>
        </div>
      </div>
    </div>
  </section>
);

const CoursesSection = ({ setActivePage }) => (
  <section className="py-16 md:py-24 bg-white dark:bg-gray-900 animate-slide-up transition-colors duration-500" style={{ animationDelay: '0.1s' }}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">Our Quranic Programs</h2>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Dedicated to nurturing a deep understanding and love for the Holy Quran.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockCourses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-gray-700/50 transition-shadow duration-300 group animate-slide-up-item" 
            style={{ animationDelay: `${0.2 + course.id * 0.1}s` }}
          >
            <div className={`p-3 inline-flex rounded-full bg-${PRIMARY_COLOR}-100 dark:bg-${PRIMARY_COLOR}-900 text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 mb-4`}>
              <course.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-${PRIMARY_COLOR}-700 transition-colors">{course.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{course.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-500 mb-4 border-t dark:border-gray-700 pt-2 mt-2">
              <span className={`font-bold text-lg text-${PRIMARY_COLOR}-600 dark:text-${ACCENT_COLOR}-400`}>${course.price}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-2" />{course.duration}</span>
            </div>
            <button
              onClick={() => setActivePage('enrollment')}
              className={`w-full py-2 flex items-center justify-center text-sm font-semibold text-white bg-${PRIMARY_COLOR}-600 rounded-lg hover:bg-${PRIMARY_COLOR}-700 transition-colors transform hover:scale-[1.02]`}
            >
              Start Enrollment <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
        <button
            onClick={() => setActivePage('enrollment')}
            className={`px-8 py-3 text-lg font-semibold text-${PRIMARY_COLOR}-900 bg-${ACCENT_COLOR}-400 rounded-full shadow-lg 
                        hover:bg-${ACCENT_COLOR}-300 transform hover:scale-[1.02] transition-all duration-300`}
          >
            Begin Your Journey Today
          </button>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
    <section className={`py-16 md:py-24 bg-${PRIMARY_COLOR}-50 dark:bg-gray-800 animate-slide-up transition-colors duration-500`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">What Our Students Say</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Hear from those who have successfully illuminated their hearts with us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mockTestimonials.map((review, index) => (
                    <div 
                        key={review.id} 
                        className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl border-t-4 border-${ACCENT_COLOR}-400 transition-shadow duration-300 hover:shadow-2xl dark:hover:shadow-gray-700/50 animate-slide-up-item"
                        style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                    >
                        <MessageSquare className={`w-8 h-8 mb-4 text-${ACCENT_COLOR}-400`} />
                        <p className="italic text-gray-700 dark:text-gray-300 mb-4">"{review.text}"</p>
                        <div className="flex items-center space-x-2 mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 fill-${ACCENT_COLOR}-400 text-${ACCENT_COLOR}-400`} />
                            ))}
                        </div>
                        <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                        <p className={`text-sm text-${PRIMARY_COLOR}-600 dark:text-${PRIMARY_COLOR}-400`}>{review.course}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const EnrollmentSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: mockCourses[0].title });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enrollment Form Submitted:', form);
    // In a real application, this data would be saved to Firestore.
    setIsSubmitted(true);
    // setForm({ name: '', email: '', phone: '', course: mockCourses[0].title }); // Keep course selected
  };

  const inputClass = `w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-${PRIMARY_COLOR}-500 focus:border-${PRIMARY_COLOR}-500 transition-colors`;

  return (
    <section className={`py-16 md:py-24 bg-${PRIMARY_COLOR}-50 dark:bg-gray-900 animate-slide-up transition-colors duration-500`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">Course Enrollment Form</h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Please fill out the details below to register for your chosen Quranic program.
        </p>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl dark:shadow-gray-700/50 border-t-4 border-${PRIMARY_COLOR}-600 transition-colors duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" value={form.email} onChange={handleChange} required className={inputClass} />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number (with country code)</label>
              <input type="tel" name="phone" id="phone" value={form.phone} onChange={handleChange} required className={inputClass} />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Course</label>
              <select
                name="course" id="course" value={form.course} onChange={handleChange} required
                className={`${inputClass} appearance-none`}
              >
                {mockCourses.map(c => (
                  <option key={c.id} value={c.title}>
                    {c.title} - (${c.price})
                  </option>
                ))}
              </select>
            </div>
            
            {isSubmitted && (
              <div className={`p-4 bg-${ACCENT_COLOR}-100 border border-${ACCENT_COLOR}-300 text-${PRIMARY_COLOR}-800 font-semibold rounded-lg text-center animate-pulse`}>
                <p>Jazak Allah Khair! Your enrollment request for **{form.course}** has been received.</p>
                <p className="text-sm mt-1">We will contact you shortly to complete the registration.</p>
              </div>
            )}
            <button
              type="submit"
              className={`w-full py-3 font-semibold text-lg text-white bg-${PRIMARY_COLOR}-700 rounded-lg shadow-xl 
                          hover:bg-${PRIMARY_COLOR}-800 transition-colors transform hover:scale-[1.01]`}
            >
              Submit Enrollment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className={`py-16 md:py-24 bg-${PRIMARY_COLOR}-50 dark:bg-gray-900 animate-slide-up transition-colors duration-500`} style={{ animationDelay: '0.1s' }}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:space-x-12">
        <div className="lg:w-1/2">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4`}>Our Mission</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 animate-slide-up-item" style={{ animationDelay: '0.3s' }}>
            At {INSTITUTE_NAME}, our sacred mission is to facilitate the learning and memorization of the Holy Quran, instilling its teachings in the hearts of Muslims worldwide.
          </p>
          <div className="space-y-4">
            <div className="flex items-start animate-slide-up-item" style={{ animationDelay: '0.5s' }}>
              <Heart className={`w-6 h-6 text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 flex-shrink-0 mt-1`} />
              <p className="ml-3 text-gray-700 dark:text-gray-300">Cultivating a deep love and connection with the Quran.</p>
            </div>
            <div className="flex items-start animate-slide-up-item" style={{ animationDelay: '0.6s' }}>
              <ShieldCheck className={`w-6 h-6 text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 flex-shrink-0 mt-1`} />
              <p className="ml-3 text-gray-700 dark:text-gray-300">Ensuring accurate recitation (Tajweed) and memorization (Hifz).</p>
            </div>
            <div className="flex items-start animate-slide-up-item" style={{ animationDelay: '0.7s' }}>
              <Sun className={`w-6 h-6 text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 flex-shrink-0 mt-1`} />
              <p className="ml-3 text-gray-700 dark:text-gray-300">Providing guidance on understanding and implementing Quranic wisdom.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <img
            src="https://placehold.co/800x600/047857/fcd34d?text=Quranic+Classroom"
            alt="Quranic Classroom"
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/047857/fcd34d?text=Classroom+Image"; }}
          />
        </div>
      </div>
    </div>
  </section>
);

const FacultySection = () => (
  <section className="py-16 md:py-24 bg-white dark:bg-gray-900 animate-slide-up transition-colors duration-500" style={{ animationDelay: '0.1s' }}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">Meet Our Esteemed Teachers</h2>
      <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Learn from qualified Huffaz and scholars with Ijazah in Quranic sciences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockFaculty.map((member) => (
          <div key={member.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-2xl dark:hover:shadow-gray-700/50 transition-shadow duration-300 animate-slide-up-item" style={{ animationDelay: `${0.2 + member.id * 0.1}s` }}>
            <img
              src={member.img}
              alt={member.name}
              className={`w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-${PRIMARY_COLOR}-100 dark:border-${PRIMARY_COLOR}-900`}
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/128x128/${PRIMARY_COLOR}-700/${ACCENT_COLOR}-400?text=${member.name.split(' ').map(n => n[0]).join('')}` }}
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
            <p className={`text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 font-medium mb-2`}>{member.title}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{member.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BlogSection = () => (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 animate-slide-up transition-colors duration-500" style={{ animationDelay: '0.1s' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">Our Knowledge Base</h2>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Inspirational articles and essential tips for your Quranic journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mockBlogPosts.map((post, index) => (
                    <div 
                        key={post.id} 
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-shadow duration-300 hover:shadow-2xl dark:hover:shadow-gray-700/50 flex flex-col animate-slide-up-item"
                        style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                    >
                        <div className={`p-3 inline-flex rounded-full bg-${PRIMARY_COLOR}-100 dark:bg-${PRIMARY_COLOR}-900 text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 mb-4 self-start`}>
                            <BookMarked className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
                        <div className="flex justify-between items-center border-t dark:border-gray-700 pt-3">
                            <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                            <button className={`text-sm font-medium text-${PRIMARY_COLOR}-600 dark:text-${ACCENT_COLOR}-400 hover:underline`}>
                                Read More <ArrowRight className="w-3 h-3 inline ml-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', form);
    // In a real application, you would send this data to a backend/API/Firestore
    setIsSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };
  
  const inputClass = `w-full p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-${PRIMARY_COLOR}-500 focus:border-${PRIMARY_COLOR}-500 transition-colors`;

  return (
    <section className={`py-16 md:py-24 bg-${PRIMARY_COLOR}-50 dark:bg-gray-900 animate-slide-up transition-colors duration-500`} style={{ animationDelay: '0.1s' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">Get In Touch</h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          We're here to answer your questions about enrollment and programs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8 animate-slide-up-item text-gray-800 dark:text-gray-300" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-start space-x-4">
              <MapPin className={`w-6 h-6 text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 flex-shrink-0`} />
              <div>
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white">Address</h4>
                <p className="text-gray-600 dark:text-gray-400">789 Quranic Path, Guidance City, Blessed State 12345</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className={`w-6 h-6 text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 flex-shrink-0`} />
              <div>
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 987-6543</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className={`w-6 h-6 text-${PRIMARY_COLOR}-700 dark:text-${ACCENT_COLOR}-400 flex-shrink-0`} />
              <div>
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">info@alQuranAcademy.org</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-gray-700/50 animate-slide-up-item transition-colors duration-500" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="c_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="c_name" value={form.name} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="c_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="c_email" value={form.email} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea
                  name="message" id="message" rows="4" value={form.message} onChange={handleChange} required
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>
              {isSubmitted && (
                <div className={`p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg`}>
                  Thank you! Your message has been sent. We will get back to you soon.
                </div>
              )}
              <button
                type="submit"
                className={`w-full py-3 font-semibold text-white bg-${PRIMARY_COLOR}-700 rounded-lg shadow-md 
                            hover:bg-${PRIMARY_COLOR}-800 transition-colors transform hover:scale-[1.01]`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const BackToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-3 bg-${ACCENT_COLOR}-400 text-${PRIMARY_COLOR}-900 rounded-full shadow-2xl transition-opacity duration-300 hover:bg-${ACCENT_COLOR}-300 transform hover:scale-110 z-50`}
            aria-label="Scroll to top"
        >
            <ChevronUp className="w-6 h-6" />
        </button>
    );
};


const Footer = () => (
  <footer className={`bg-gray-900 text-white dark:bg-gray-950 py-10 transition-colors duration-500`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 dark:border-gray-800 pb-8 mb-8">
        {/* About */}
        <div>
          <h5 className="font-bold text-xl mb-4 text-${ACCENT_COLOR}-400">{INSTITUTE_NAME}</h5>
          <p className="text-gray-400 text-sm">
            Providing comprehensive Quranic education and fostering a strong Islamic identity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className={`font-bold text-lg mb-4 text-${ACCENT_COLOR}-400`}>Quick Links</h5>
          <ul className="space-y-2 text-sm">
            {navItems.map(item => (
                <li key={item.page}>
                    <a href={`#${item.page}`} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                    </a>
                </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h5 className={`font-bold text-lg mb-4 text-${ACCENT_COLOR}-400`}>Key Programs</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            {mockCourses.slice(0, 3).map(course => (
              <li key={course.id}>
                <a href="#courses" className="hover:text-white transition-colors">{course.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h5 className={`font-bold text-lg mb-4 text-${ACCENT_COLOR}-400`}>Connect</h5>
          <div className="space-y-2 text-sm text-gray-400">
            <p className="flex items-center"><MapPin className="w-4 h-4 mr-2"/> 789 Quranic Path</p>
            <p className="flex items-center"><Phone className="w-4 h-4 mr-2"/> +1 (555) 987-6543</p>
            
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
              <Facebook className="w-4 h-4 mr-2"/> Facebook Page
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pt-4">
        &copy; {new Date().getFullYear()} {INSTITUTE_NAME}. All rights reserved.
      </div>
    </div>
  </footer>
);


// --- Main Application Component ---
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false); // New Dark Mode state

  // Effect to manage the dark class on the body/root for system-wide Tailwind dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  const renderContent = (page) => {
    switch (page) {
      case 'home':
        return (
          <>
            <HeroSection setActivePage={setActivePage} />
            <CoursesSection setActivePage={setActivePage} />
            <TestimonialsSection /> {/* NEW */}
            <AboutSection />
            <FacultySection />
            <ContactSection />
          </>
        );
      case 'courses':
        return (
          <div className="min-h-screen pt-20">
            <CoursesSection setActivePage={setActivePage} />
          </div>
        );
      case 'enrollment':
        return (
          <div className="min-h-screen pt-20">
            <EnrollmentSection />
          </div>
        );
      case 'faculty':
        return (
          <div className="min-h-screen pt-20">
            <FacultySection />
          </div>
        );
      case 'blog': // NEW Blog Page
        return (
          <div className="min-h-screen pt-20">
            <BlogSection />
          </div>
        );
      case 'about':
        return (
          <div className="min-h-screen pt-20">
            <AboutSection />
          </div>
        );
      case 'contact':
        return (
          <div className="min-h-screen pt-20">
            <ContactSection />
          </div>
        );
      default:
        return <HeroSection setActivePage={setActivePage} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-500 ${darkMode ? 'dark' : ''}`}>
      <Header activePage={activePage} setActivePage={setActivePage} darkMode={darkMode} setDarkMode={setDarkMode} />
      <main key={activePage} className="flex-grow animate-content-fade-in">
        {renderContent(activePage)}
      </main>
      <Footer />
      <BackToTopButton /> {/* NEW */}
    </div>
  );
};

export default App;

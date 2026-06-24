// src/App.jsx
import React, { useRef, useState } from 'react';
import { personalInfo, skills, experience, projects, education } from './data/portfolioData';
import emailjs from '@emailjs/browser';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [projectLayout, setProjectLayout] = useState('grid');
  const [view, setView] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copy, setCopy] = useState(false);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const SERVICE_ID = 'service_ix7n48h';
    const TEMPLATE_ID = 'template_8qk6nr7';
    const PUBLIC_KEY = 'otyVIHab-pu_7xqxt';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setLoading(false);
        setStatusMessage('✅ Message sent successfully!');
        formRef.current.reset(); // Clears the form input fields
      }, (error) => {
        setLoading(false);
        setStatusMessage('❌ Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
      });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 5000)
  }

  const handleCopyPhone = (text) => {
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 5000)
  }

  return (
    <div className={darkMode ? "bg-slate-900 text-slate-100 min-h-screen font-sans" : "bg-slate-50 text-slate-900 min-h-screen font-sans"}>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 p-4 border-b backdrop-blur-md ${darkMode ? "bg-slate-900/80 border-slate-800" : "bg-white/80 border-slate-200"}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-mono font-bold text-xl tracking-wider text-teal-500">&lt;{personalInfo.name.split(' ')[0]} /&gt;</span>
          <div className="flex items-center gap-6">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <button key={section} onClick={() => scrollToSection(section)} className="capitalize font-medium hover:text-teal-400 transition-colors hidden md:block">
                {section}
              </button>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg border ${darkMode ? "border-slate-700 bg-slate-800 text-yellow-400" : "border-slate-300 bg-gray-100 text-indigo-600"}`}>
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Hi, I am <span className="text-teal-500">{personalInfo.name}</span>
        </h1>
        <p className="text-xl font-mono text-teal-400 mb-6">{personalInfo.title}</p>
        <p className={`text-lg leading-relaxed max-w-2xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{personalInfo.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="px-6 py-2 rounded-lg font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-colors">GitHub Profile</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={`px-6 py-2 rounded-lg font-semibold border ${darkMode ? "border-slate-700 hover:bg-slate-800" : "border-slate-300 hover:bg-gray-100"}`}>LinkedIn</a>
          <div className="flex items-center gap-2 bg-slate-600 px-3 py-1.5 rounded-xl shadow-sm w-fit">
            {/* Email Text */}
            <p className="font-semibold text-white text-sm select-all">
              {personalInfo.email}
            </p>

            {/* Copy Button */}
            <button
              onClick={() => handleCopyEmail(personalInfo.email)}
              className={`p-1.5 rounded-lg transition-all duration-200 focus:outline-none ${copied
                ? 'bg-green-500 text-white scale-95'
                : 'bg-teal-700/50 hover:bg-teal-700 text-teal-100 hover:text-white'
                }`}
              aria-label="Copy email"
            >
              {copied ? (
                /* Success Checkmark Icon */
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                /* Copy Clipboard Icon */
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center gap-2 bg-slate-600 px-3 py-1.5 rounded-xl shadow-sm w-fit">
            {/* Email Text */}
            <p className="font-semibold text-white text-sm select-all">
              {personalInfo.phone}
            </p>

            {/* Copy Button */}
            <button
              onClick={() => handleCopyPhone(personalInfo.phone)}
              className={`p-1.5 rounded-lg transition-all duration-200 focus:outline-none ${copy
                ? 'bg-green-500 text-white scale-95'
                : 'bg-teal-700/50 hover:bg-teal-700 text-teal-100 hover:text-white'
                }`}
              aria-label="Copy email"
            >
              {copy ? (
                /* Success Checkmark Icon */
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                /* Copy Clipboard Icon */
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 px-4 ${darkMode ? "bg-slate-950" : "bg-slate-100"}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-teal-500 pl-3">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className={`p-5 rounded-xl border ${darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
                <h3 className="text-teal-400 font-mono font-bold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span key={skill} className={`text-sm px-3 py-1 rounded-md font-medium ${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-200 text-slate-800"}`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-l-4 border-teal-500 pl-3">Work History</h2>
        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div key={idx} className={`p-6 rounded-xl border ${darkMode ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200"}`}>
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-teal-400">{job.role}</h3>
                  <p className="text-sm font-semibold opacity-70">{job.company}</p>
                </div>
                <span className="text-sm font-mono opacity-60">{job.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 opacity-80 text-sm">
                {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section (With Dynamic View Switching) */}
      <section id="projects" className={`py-16 px-4 ${darkMode ? "bg-slate-950" : "bg-slate-100"}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold border-l-4 border-teal-500 pl-3">Featured Projects</h2>
            {/* Options to Choose Grid or List Layout */}
            <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs">
              <button onClick={() => setProjectLayout('grid')} className={`px-3 py-1.5 rounded-md transition-all ${projectLayout === 'grid' ? 'bg-teal-500 text-white font-bold' : 'text-slate-400'}`}>Grid View</button>
              <button onClick={() => setProjectLayout('list')} className={`px-3 py-1.5 rounded-md transition-all ${projectLayout === 'list' ? 'bg-teal-500 text-white font-bold' : 'text-slate-400'}`}>List View</button>
            </div>
          </div>

          <div className={projectLayout === 'grid' ? "grid grid-cols-2 md:grid-cols-3 gap-6" : "space-y-6"}>
            {projects
              .slice(0, view ? projects.length : (projectLayout === 'grid' ? 3 : 3))
              .map((project) => (
                <div
                  key={project.id}
                  className={`rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${darkMode ? "bg-slate-900 border-slate-800 shadow-slate-950/50" : "bg-white border-slate-200 shadow-sm"
                    } ${projectLayout === 'list' ? 'flex flex-col md:flex-row h-full' : ''}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`object-cover ${projectLayout === 'list' ? 'w-full md:w-48 h-48 md:h-auto' : 'w-full h-40'}`}
                  />
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-teal-400 line-clamp-1">{project.title}</h3>
                      <p className="text-xs opacity-80 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 font-mono border border-teal-500/20">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-[10px] px-1.5 py-0.5 opacity-50 font-mono">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs font-medium pt-2 border-t border-slate-800/20">
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-teal-400 hover:underline flex items-center gap-0.5">Live Demo 🔗</a>
                      <a href={project.codeLink} target="_blank" rel="noreferrer" className="opacity-70 hover:underline hover:text-teal-400">Source Code</a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className='w-full mt-6 flex justify-center'>
            <button className='flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-500 text-teal-400 font-semibold text-sm transition-all duration-300 ease-in-out hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] active:scale-95' onClick={() => setView(!view)}>
              <span>{view ? "Hide Projects" : "View All Projects"}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${view ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section (with Formspree implementation option) */}
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className={`text-base leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Have an interesting project or a position you are looking to fill? Send me a message directly through this form and it will land straight in my inbox.
          </p>
        </div>

        <div className="flex-1 w-full">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-xs font-mono mb-1 tracking-wider opacity-70">YOUR NAME</label>
              {/* CHANGED name TO MATCH YOUR EMAILJS TEMPLATE VARIABLE */}
              <input
                type="text"
                name="from_name"
                required
                className={`w-full p-3 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors ${darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-white border-slate-300 text-black"}`}
              />
            </div>
            <div>
              <label className="block text-xs font-mono mb-1 tracking-wider opacity-70">EMAIL ADDRESS</label>
              {/* CHANGED name TO MATCH YOUR EMAILJS TEMPLATE VARIABLE */}
              <input
                type="email"
                name="reply_to"
                required
                className={`w-full p-3 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors ${darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-white border-slate-300 text-black"}`}
              />
            </div>
            <div>
              <label className="block text-xs font-mono mb-1 tracking-wider opacity-70">MESSAGE BODY</label>
              {/* name="message" already matches your dashboard template perfectly */}
              <textarea
                name="message"
                rows="5"
                required
                className={`w-full p-3 rounded-lg border focus:outline-none focus:border-teal-500 resize-none transition-colors ${darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-white border-slate-300 text-black"}`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message 🚀'}
            </button>

            {statusMessage && (
              <p className={`text-center text-sm font-semibold mt-4 ${statusMessage.includes('successfully') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center text-xs tracking-wide opacity-50 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
        © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
      </footer>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    document.title = "Manpreet Singh | React Native Expert";
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "IDFC First Bank",
      desc: "IDFC First Bank Mobile App is a secure digital banking platform offering services such as account management, fund transfers, bill payments, credit card management, and other financial features for millions of users.",
      role: "Worked on building the customer service flow to report the dispute or fraudulent transaction from the app itself and made the flow automated using various APIs and saved the huge cost of the bak which was spent on manual processes to track the issues",
      tech_stacks: [
        "React Native",
        "Redux",
        "TypeScript",
        "JavaScript",
        "unit testing",
        "jest",
      ],
      challenges: [
        "Integrating with legacy banking systems",
        "Ensuring high security and compliance",
        "following the standards of banking apps",
      ],
      android_url:
        "https://play.google.com/store/apps/details?id=com.idfcfirstbank.optimus&hl=en_IN",
      ios_url:
        "https://apps.apple.com/in/app/idfc-first-bank-mobilebanking/id1521443352",
    },
    {
      title: "Tonik Bank",
      desc: "Tonik Bank is a digital-only neobank that provides mobile-first banking services such as savings accounts, time deposits, payments, and financial management tools. The app focuses on delivering a seamless, secure, and fully digital banking experience for customers without the need for physical branches.",
      role: "Worked on enhancing the version of react native to the latest and updated all the modules according to the newer version and fixed various bugs and crashes from the app to make the app stable for production release",
      tech_stacks: ["React Native", "Redux", "TypeScript", "JavaScript"],
      challenges: [
        "To make the changes in native customise libraries for security purpose to make them compatible with react native ",
        "Debugging issues and finding the solutions manually",
        "go through the complex flows of banking app to find the root cause of the issues without breaking any existing functionality",
      ],
      android_url:
        "https://play.google.com/store/apps/details?id=com.tonik.mobile&hl=en_IN",
      ios_url:
        "https://apps.apple.com/ph/app/tonik-bank-loans-deposits/id1541576007",
    },
    {
      title: "Ferns N Petals",
      desc: "Ferns N Petals UAE is a mobile application for the UAE branch of the popular floral and gifting brand. The app allows users to browse and order flowers, gifts, cakes, and personalized items with convenient delivery options. It emphasizes a seamless shopping experience, real-time order tracking, and secure payments.",
      role: "I worked on multiple features of the app including selecting the specific country while placing the order, adding gifts in checklist, its quantity and final calculated value including shipping and all. Also worked on currency conversion and adding the addrerssing for shipping. ",
      tech_stacks: ["React Native", "Redux", "TypeScript", "JavaScript"],
      challenges: [
        "since this was my first e-commerce app , I faced issues creating new flows and their complex logics",
        "handling multiple currencies and their conversions",
        "working with 3rd party libraries for payments and shipping integrations",
      ],
      android_url:
        "https://play.google.com/store/apps/details?id=ae.fnp&hl=en_IN",
      ios_url:
        "https://apps.apple.com/ae/app/fnp-flowers-gifts-delivery/id1274924764",
    },
    {
      title: "HelloBible",
      desc: "HelloBible is a mobile application designed to provide users with easy access to the Bible, devotional content, and related audio-visual resources. The app focuses on delivering an interactive and user-friendly experience, including features like scripture reading, audio playback, and personalized devotional plans.",
      role: "I worked on feature to chat with AI and convert the text to speech using advanced AI models to generate human-like responses and audio",
      tech_stacks: [
        "React Native",
        "Expo",
        "Redux",
        "TypeScript",
        "JavaScript",
        "TanStack Query",
      ],
      challenges: [
        "Integrating advanced AI models for chat and text-to-speech",
        "Optimizing performance for audio playback",
        "Ensuring a seamless user experience across devices",
      ],
      android_url:
        "https://apps.apple.com/us/app/hellobible-bible-chat/id6502768944",
      ios_url:
        "https://play.google.com/store/apps/details?id=com.hellobible.app&hl=en_IN",
    },
    {
      title: "TopMusic",
      desc: "TopMusic is a mobile application designed to provide users with access to a wide range of music, playlists, and audio content. The app emphasizes personalized recommendations, smooth streaming, and an engaging user experience for music lovers.",
      role: "Worked on fixing the critical bugs and crashes from the app and improved the performance of the app by optimizing various components and implemented the new design for the app to make it more user-friendly",
      tech_stacks: [
        "React Native",
        "Expo",
        "Redux",
        "TypeScript",
        "JavaScript",
        "TanStack Query",
      ],
      challenges: [
        "Debugging and resolving critical bugs and crashes",
        "Optimizing performance for smoother streaming",
        "understanding complex code and make the changes accordinly without breaking existing functionality",
      ],
      android_url:
        "https://play.google.com/store/apps/details?id=com.topchretien.topmusic&hl=en_IN",
      ios_url: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white dark:from-zinc-900 dark:to-black text-gray-900 dark:text-white">
      {/* Navbar */}
      <header className="fixed top-0 w-full backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Manpreet Singh</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#tech" className="hover:underline">
              Tech Stack
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-28 px-4 md:px-12 max-w-6xl mx-auto space-y-32">
        {/* Hero */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <Image
              src="/profile-pic_1.png"
              alt="Manpreet Singh"
              width={128}
              height={128}
              className="rounded-full border-4 border-white dark:border-zinc-800 shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I&apos;m Manpreet 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Senior React Native AI Developer | AI Integrations | Expo | React JS
            | Voice & LLM Systems
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="Manpreet Singh - SeniorReactNative AiEngineer Resume2026.pdf"
              className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
            >
              📄 Download Resume
            </Link>
            <button
              onClick={scrollToContact}
              className="border border-gray-400 dark:border-gray-600 px-5 py-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
            >
              ✉️ Let’s Connect
            </button>
          </div>
        </motion.section>

        {/* About */}
        <section id="about">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="prose dark:prose-invert max-w-none text-lg space-y-4">
            <div className="flex flex-wrap gap-4 text-sm mb-6 pb-4 border-b border-gray-300 dark:border-zinc-700">
              <span>
                📧{" "}
                <a
                  href="mailto:preetrana883@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  preetrana883@gmail.com
                </a>
              </span>
              <span>📞 +91 9478133303</span>
              <span>
                🔗{" "}
                <a
                  href="https://www.linkedin.com/in/manpreet-singh-37467556/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              </span>
            </div>

            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              Executive Summary
            </h3>
            <p>
              Senior Mobile Engineer with 9+ years of experience building,
              scaling, and modernizing high-impact mobile and tvOS applications
              across fintech, banking, e-commerce, and healthcare domains.
              Strong expertise in React Native architecture, performance
              optimization, and delivering production-ready applications used by
              millions of users.
            </p>

            <p>
              Experienced in integrating AI/LLM systems into mobile applications
              including voice-to-LLM pipelines, real-time audio streaming, and
              AI-driven chat experiences. Skilled in working with OpenAI,
              Claude, and other LLM APIs with focus on latency optimization,
              guardrails, and production-grade logging.
            </p>

            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Mobile & Web Platforms
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  React Native, Expo, Android, iOS, React.js, tvOS
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Languages
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  TypeScript, JavaScript, Python (Basic)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  State & Data Management
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Redux, TanStack Query, Context API, REST APIs
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Architecture & Quality
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Modular Architecture, Scalable Design, Performance
                  Optimization, Unit Testing (Jest)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Native & Real-Time Media
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Custom Native Modules, WebRTC, AudioRTC, Bluetooth Audio,
                  Real-time PCM Streaming
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  CI/CD & Release
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  GitHub Actions, TestFlight, Play Store, Firebase, CodePush,
                  EAS Builds
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  AI & LLM Integration
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  LLM APIs, Voice-to-LLM pipelines, Real-time streaming, Prompt
                  engineering, Token optimization
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Backend & Services
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Firebase, fastAPI (Basic), Third-party SDK Integrations
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">
              Key Achievements
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>
                Delivered mobile applications used by millions of users globally
              </li>
              <li>
                Built real-time voice-to-LLM pipeline with interruption handling
                (GPT-style streaming)
              </li>
              <li>
                Implemented low-latency AI conversational systems using WebRTC &
                PCM streaming
              </li>
              <li>
                Designed production-grade logging & monitoring for AI pipelines
              </li>
              <li>Reduced operational costs through workflow automation</li>
              <li>
                Modernized legacy React Native codebases without disruption
              </li>
              <li>
                Developed AI-powered audio interaction systems with TTS/STT
                integration
              </li>
              <li>
                Built high-performance custom native audio libraries supporting
                multiple streams
              </li>
              <li>Mentored developers and conducted code reviews</li>
              <li>
                Implemented analytics and crash monitoring (Firebase
                Crashlytics, Adobe Analytics)
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                Platforms & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "Expo",
                  "React.js",
                  "iOS",
                  "Android",
                  "tvOS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                State Management & Data
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Redux",
                  "TanStack Query",
                  "Context API",
                  "REST APIs",
                  "GraphQL",
                  "Firebase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "JavaScript", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                Tools & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "GitHub",
                  "Bitbucket",
                  "GitLab",
                  "GitHub Actions",
                  "TestFlight",
                  "Play Store",
                  "EAS Builds",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                AI & Real-Time Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "OpenAI",
                  "Claude",
                  "LLM APIs",
                  "Voice-to-LLM",
                  "WebRTC",
                  "PCM Streaming",
                  "TTS/STT",
                  "Real-time Audio",
                  "Bluetooth Audio",
                  "AudioRTC",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.title}
                className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {proj.desc}
                </p>
                <div className="mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
                    💼 My Role:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {proj.role}
                  </p>
                </div>
                {proj.tech_stacks && proj.tech_stacks.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      🛠️ Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tech_stacks.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {(proj.challenges || proj.challenges) &&
                  (proj.challenges?.length > 0 ||
                    proj.challenges?.length > 0) && (
                    <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                      <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
                        ⚡ Challenges Overcome:
                      </p>
                      <ul className="space-y-1">
                        {(proj.challenges || proj.challenges)?.map(
                          (challenge, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2"
                            >
                              <span className="text-amber-600 dark:text-amber-400 mt-0.5">
                                •
                              </span>
                              <span>{challenge}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
                <div className="flex gap-3">
                  {proj.android_url && (
                    <a
                      href={proj.android_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700 transition"
                    >
                      📱 Android
                    </a>
                  )}
                  {proj.ios_url && (
                    <a
                      href={proj.ios_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition"
                    >
                      🍎 iOS
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-4">Contact & Connect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-lg">
                📧 Email:
                <a
                  className="underline text-blue-500 hover:text-blue-700 ml-2"
                  href="mailto:preetrana883@gmail.com"
                >
                  preetrana883@gmail.com
                </a>
              </p>
              <p className="text-lg">
                📞 Phone:
                <a
                  className="underline text-blue-500 hover:text-blue-700 ml-2"
                  href="tel:+919478133303"
                >
                  +91 9478133303
                </a>
              </p>
              <p className="text-lg">
                🔗 Portfolio:
                <a
                  className="underline text-blue-500 hover:text-blue-700 ml-2"
                  href="https://manpreet-portfolio-ruby.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  manpreet-portfolio-ruby.vercel.app
                </a>
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-lg">
                💼 LinkedIn:
                <a
                  className="underline text-blue-500 hover:text-blue-700 ml-2"
                  href="https://www.linkedin.com/in/manpreet-singh-37467556/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect with me
                </a>
              </p>
              <p className="text-lg">
                💻 GitHub:
                <a
                  className="underline text-blue-500 hover:text-blue-700 ml-2"
                  href="https://github.com/manpreetsingh3215"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my projects
                </a>
              </p>
              <p className="text-lg">
                🧠 Stack Overflow:
                <a
                  className="underline text-blue-500 hover:text-blue-700 ml-2"
                  href="https://stackoverflow.com/users/8344220/manpreet-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My answers
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-32 py-6 text-center border-t border-gray-200 dark:border-zinc-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Manpreet Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

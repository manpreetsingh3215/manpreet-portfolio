"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type SkillGroup = {
  title: string;
  items: string[];
};

type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  summary: string;
  highlights: string[];
};

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  role: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  links?: ProjectLink[];
};

const resumePath = "/Manpreet-Singh-Senior-Frontend-Engineer-2026.pdf";

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    items: [
      "React Native",
      "React.js",
      "Next.js",
      "Expo",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "State & APIs",
    items: [
      "Redux Toolkit",
      "Context API",
      "TanStack Query",
      "REST APIs",
      "WebSockets",
      "API Integrations",
    ],
  },
  {
    title: "AI & Real-Time Systems",
    items: [
      "OpenAI APIs",
      "Claude APIs",
      "Conversational AI",
      "Prompt Engineering",
      "STT/TTS Pipelines",
      "Audio Streaming",
      "WebRTC",
    ],
  },
  {
    title: "Architecture & Performance",
    items: [
      "Scalable Frontend Architecture",
      "Reusable Component Systems",
      "Performance Optimization",
      "Rendering Optimization",
      "Code Refactoring",
      "Memory Leak Resolution",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Jest",
      "Detox",
      "Unit Testing",
      "Debugging",
      "Production Monitoring",
      "Crash Monitoring",
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Firebase",
      "Firebase Crashlytics",
      "Adobe Analytics",
      "GitHub Actions",
      "EAS Builds",
      "TestFlight",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Cursor",
      "Copilot",
    ],
  },
];

const achievements = [
  "Delivered enterprise mobile and web applications used by millions of users globally.",
  "Led modernization of large React Native codebases while preserving production stability.",
  "Reduced technical debt through reusable component systems and scalable frontend architecture.",
  "Improved application performance, responsiveness, and production reliability across enterprise platforms.",
  "Built AI-powered conversational systems with real-time voice and streaming capabilities.",
  "Implemented crash monitoring and analytics workflows using Firebase Crashlytics and Adobe Analytics.",
  "Mentored developers and contributed to frontend engineering standards and architecture discussions.",
];

const experience: ExperienceItem[] = [
  {
    title: "Senior Frontend Engineer (React Native & React.js)",
    company: "Freelancing & Enterprise Projects",
    duration: "Sept 2025 - Present",
    summary:
      "Leading frontend architecture and development of scalable AI-powered mobile and web applications using React Native, React.js, and TypeScript.",
    highlights: [
      "Integrated OpenAI and Claude APIs to build conversational AI systems with streaming responses and workflow automation.",
      "Implemented STT/TTS pipelines and WebRTC-based communication for low-latency voice interactions.",
      "Introduced reusable component systems and modular architecture to improve maintainability and scalability.",
      "Optimized rendering performance, responsiveness, and production stability across large-scale projects.",
    ],
  },
  {
    title: "Senior Consultant (React Native & React.js)",
    company: "Xebia India, Gurgaon",
    duration: "Sept 2021 - Sept 2025",
    summary:
      "Led frontend delivery for enterprise fintech and banking platforms built with React Native and React.js.",
    highlights: [
      "Designed scalable frontend architecture and reusable UI systems for faster delivery and easier maintenance.",
      "Modernized legacy React Native applications and improved large-scale codebases.",
      "Resolved critical production issues including crashes, memory leaks, and rendering bottlenecks.",
      "Conducted code reviews, mentored developers, and helped define frontend engineering standards.",
    ],
  },
  {
    title: "Software Developer",
    company: "Freelancing",
    duration: "Apr 2019 - Sept 2021",
    summary:
      "Developed and maintained scalable mobile and web applications across fintech, e-commerce, and media platforms.",
    highlights: [
      "Integrated payment gateways, analytics systems, push notifications, and third-party SDKs.",
      "Built reusable UI components and optimized rendering performance in React Native apps.",
      "Collaborated directly with clients and cross-functional teams to deliver production-ready solutions.",
    ],
  },
  {
    title: "Software Developer",
    company: "Mobilyte Solutions, Mohali",
    duration: "June 2018 - Apr 2019",
    summary:
      "Built and maintained React Native mobile applications with a strong focus on responsive UI development and performance.",
    highlights: [
      "Integrated REST APIs and shipped scalable frontend features.",
      "Improved app responsiveness and resolved production issues across Android and iOS.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Igniva Infotech, Mohali",
    duration: "Mar 2017 - June 2018",
    summary:
      "Contributed to React Native application development, feature delivery, and production bug fixing.",
    highlights: [
      "Improved UI consistency, application quality, and user experience.",
      "Worked closely with senior developers on feature delivery and app maintenance.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "IDFC First Bank",
    role: "Senior Frontend Engineer",
    summary:
      "Delivered secure mobile banking experiences spanning payments, account management, transfers, and dispute workflows for a large-scale enterprise platform.",
    techStack: ["React Native", "React.js", "TypeScript"],
    highlights: [
      "Built dispute and fraud reporting workflows inside the mobile app with secure API integrations.",
      "Supported internal workflow automation that reduced manual operational effort.",
      "Improved responsiveness and production reliability across critical banking journeys.",
    ],
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.idfcfirstbank.optimus&hl=en_IN",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/in/app/idfc-first-bank-mobilebanking/id1521443352",
      },
    ],
  },
  {
    title: "HelloBible",
    role: "Senior React Native Engineer",
    summary:
      "Built AI-powered conversational experiences backed by LLM APIs and real-time communication pipelines.",
    techStack: ["React Native", "OpenAI APIs", "Claude APIs", "WebRTC"],
    highlights: [
      "Implemented STT/TTS functionality with streaming AI responses and interruption handling.",
      "Designed conversational context workflows and prompt engineering strategies.",
      "Optimized real-time interaction performance for smoother voice-driven experiences.",
    ],
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.hellobible.app&hl=en_IN",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/us/app/hellobible-bible-chat/id6502768944",
      },
    ],
  },
  {
    title: "Medipyxis",
    role: "Senior Frontend Engineer",
    summary:
      "Developed scalable healthcare workflow modules, operational dashboards, and role-based experiences for a healthcare platform.",
    techStack: ["React.js", "TypeScript"],
    highlights: [
      "Built workflow automation tools and billing-related frontend systems.",
      "Improved operational efficiency through centralized healthcare workflow management.",
      "Focused on reusable architecture, performance optimization, and secure data handling.",
    ],
  },
  {
    title: "Tonik Bank",
    role: "Senior React Native Engineer",
    summary:
      "Modernized a legacy React Native codebase for a digital-only neobank and improved long-term scalability.",
    techStack: ["React Native"],
    highlights: [
      "Upgraded the application architecture and refactored native modules for maintainability.",
      "Resolved critical production crashes and optimized rendering performance.",
      "Improved release stability across a complex banking product.",
    ],
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.tonik.mobile&hl=en_IN",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/ph/app/tonik-bank-loans-deposits/id1541576007",
      },
    ],
  },
  {
    title: "Ferns N Petals UAE",
    role: "React Native Engineer",
    summary:
      "Developed e-commerce mobile features with payment integrations, region-specific workflows, and improved user flows for a high-traffic gifting app.",
    techStack: ["React Native"],
    highlights: [
      "Worked on country-specific ordering, shipping flows, and pricing calculations.",
      "Improved responsiveness and optimized rendering performance across devices.",
      "Enhanced customer experience for high-traffic e-commerce journeys.",
    ],
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=ae.fnp&hl=en_IN",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/ae/app/fnp-flowers-gifts-delivery/id1274924764",
      },
    ],
  },
  {
    title: "TopMusic",
    role: "React Native Engineer",
    summary:
      "Improved application stability and responsiveness for a music streaming experience while supporting ongoing production maintenance.",
    techStack: ["React Native"],
    highlights: [
      "Resolved critical production issues and improved rendering performance.",
      "Enhanced responsiveness across mobile platforms without breaking existing functionality.",
      "Supported continuous feature delivery and maintenance work.",
    ],
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.topchretien.topmusic&hl=en_IN",
      },
    ],
  },
];

const quickHighlights = [
  "9+ years building cross-platform mobile and web apps",
  "Frontend architecture for fintech, healthcare, AI, and e-commerce",
  "Real-time voice, WebRTC, and conversational AI systems",
  "Performance, stability, and large-scale React Native modernization",
];

export default function Home() {
  useEffect(() => {
    document.title = "Manpreet Singh | Senior Frontend Engineer";
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white text-gray-900 dark:from-zinc-900 dark:to-black dark:text-white">
      <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-bold">Manpreet Singh</h1>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#tech" className="hover:underline">
              Skills
            </a>
            <a href="#experience" className="hover:underline">
              Experience
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

      <main className="mx-auto max-w-6xl space-y-28 px-4 pt-28 md:px-12">
        <motion.section
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center">
            <Image
              src="/profile-pic.png"
              alt="Manpreet Singh"
              width={128}
              height={128}
              className="rounded-full border-4 border-white shadow-lg dark:border-zinc-800"
            />
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">
            Hi, I&apos;m Manpreet
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
            Senior Frontend Engineer focused on React Native, React.js, Next.js,
            AI integrations, WebRTC, and cross-platform application
            architecture.
          </p>
          <p className="mx-auto max-w-3xl text-base text-gray-600 dark:text-gray-400">
            I build and modernize production-grade mobile and web products
            across fintech, banking, healthcare, AI, e-commerce, and enterprise
            platforms, with an emphasis on performance, scalability, and
            engineering reliability.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={resumePath}
              download
              className="rounded bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
            >
              Download Resume
            </a>
            <button
              onClick={scrollToContact}
              className="rounded border border-gray-400 px-5 py-2 transition hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-zinc-800"
            >
              Let&apos;s Connect
            </button>
          </div>
        </motion.section>

        <section id="about">
          <h2 className="mb-4 text-3xl font-bold">About Me</h2>
          <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4 text-sm dark:border-zinc-800">
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
              <span>
                💻{" "}
                <a
                  href="https://github.com/manpreetsingh3215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </span>
            </div>

            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
              <p>
                Senior Frontend Engineer with 9+ years of experience building
                scalable mobile and web applications using React Native,
                React.js, Next.js, and TypeScript across fintech, banking,
                healthcare, AI, e-commerce, and enterprise platforms.
              </p>
              <p>
                I specialize in frontend architecture, cross-platform
                application development, AI-powered systems, real-time
                communication pipelines, and production-scale performance
                optimization. My work has included modernizing large React
                Native applications, reducing technical debt, and shipping
                enterprise-grade products used by millions of users.
              </p>
              <p>
                I also have strong experience building conversational AI systems
                using OpenAI and Claude APIs, implementing STT/TTS workflows,
                debugging production issues, and partnering across engineering,
                product, QA, and leadership teams in distributed Agile
                environments.
              </p>
            </div>
          </div>
        </section>

        <section id="tech">
          <h2 className="mb-4 text-3xl font-bold">Core Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <h3 className="mb-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2 className="mb-4 text-3xl font-bold">Professional Experience</h2>
          <div className="space-y-5">
            {experience.map((item) => (
              <div
                key={`${item.title}-${item.company}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      {item.company}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.duration}
                  </p>
                </div>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 text-indigo-500">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">Key Achievements</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="mb-4 text-3xl font-bold">Key Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      {project.role}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {project.summary}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-zinc-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mb-4 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">
                    Highlights
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 text-indigo-500">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded bg-slate-900 px-3 py-1.5 text-sm text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-3xl font-bold">Education</h2>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
            <h3 className="text-xl font-semibold">
              Bachelor of Engineering in Electronics & Communication
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Chitkara University, Himachal Pradesh
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2011 - 2015
            </p>
          </div>
        </section>

        <section id="contact">
          <h2 className="mb-4 text-3xl font-bold">Contact & Connect</h2>
          <div className="grid gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="space-y-3">
              <p className="text-lg">
                📧 Email:
                <a
                  className="ml-2 underline text-blue-500 hover:text-blue-700"
                  href="mailto:preetrana883@gmail.com"
                >
                  preetrana883@gmail.com
                </a>
              </p>
              <p className="text-lg">
                📞 Phone:
                <a
                  className="ml-2 underline text-blue-500 hover:text-blue-700"
                  href="tel:+919478133303"
                >
                  +91 9478133303
                </a>
              </p>
              <p className="text-lg">
                🌐 Portfolio:
                <a
                  className="ml-2 underline text-blue-500 hover:text-blue-700"
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
                  className="ml-2 underline text-blue-500 hover:text-blue-700"
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
                  className="ml-2 underline text-blue-500 hover:text-blue-700"
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
                  className="ml-2 underline text-blue-500 hover:text-blue-700"
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

      <footer className="mt-24 border-t border-gray-200 py-6 text-center dark:border-zinc-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Manpreet Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

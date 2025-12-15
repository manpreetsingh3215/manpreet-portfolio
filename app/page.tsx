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
      tech_stacks: ["React Native", "Redux", "TypeScript", "JavaScript", "unit testing", "jest"],
      challenges: ["Integrating with legacy banking systems", "Ensuring high security and compliance", "following the standards of banking apps",],
      android_url: "https://play.google.com/store/apps/details?id=com.idfcfirstbank.optimus&hl=en_IN",
      ios_url: "https://apps.apple.com/in/app/idfc-first-bank-mobilebanking/id1521443352",
    },
    {
      title: "Tonik Bank",
      desc: "Tonik Bank is a digital-only neobank that provides mobile-first banking services such as savings accounts, time deposits, payments, and financial management tools. The app focuses on delivering a seamless, secure, and fully digital banking experience for customers without the need for physical branches.",
      role: "Worked on enhancing the version of react native to the latest and updated all the modules according to the newer version and fixed various bugs and crashes from the app to make the app stable for production release",
      tech_stacks: ["React Native", "Redux", "TypeScript", "JavaScript"],
      challenges: ["To make the changes in native customise libraries for security purpose to make them compatible with react native ", "Debugging issues and finding the solutions manually", "go through the complex flows of banking app to find the root cause of the issues without breaking any existing functionality"],
      android_url: "https://play.google.com/store/apps/details?id=com.tonik.mobile&hl=en_IN",
      ios_url: "https://apps.apple.com/ph/app/tonik-bank-loans-deposits/id1541576007",
    },
    {
      title: "Ferns N Petals",
      desc: "Ferns N Petals UAE is a mobile application for the UAE branch of the popular floral and gifting brand. The app allows users to browse and order flowers, gifts, cakes, and personalized items with convenient delivery options. It emphasizes a seamless shopping experience, real-time order tracking, and secure payments.",
      role: "I worked on multiple features of the app including selecting the specific country while placing the order, adding gifts in checklist, its quantity and final calculated value including shipping and all. Also worked on currency conversion and adding the addrerssing for shipping. ",
      tech_stacks: ["React Native", "Redux", "TypeScript", "JavaScript",],
      challenges: ["since this was my first e-commerce app , I faced issues creating new flows and their complex logics", "handling multiple currencies and their conversions", "working with 3rd party libraries for payments and shipping integrations"],
      android_url: "https://play.google.com/store/apps/details?id=ae.fnp&hl=en_IN",
      ios_url: "https://apps.apple.com/ae/app/fnp-flowers-gifts-delivery/id1274924764",
    },
    {
      title: "HelloBible",
      desc: "HelloBible is a mobile application designed to provide users with easy access to the Bible, devotional content, and related audio-visual resources. The app focuses on delivering an interactive and user-friendly experience, including features like scripture reading, audio playback, and personalized devotional plans.",
      role: "I worked on feature to chat with AI and convert the text to speech using advanced AI models to generate human-like responses and audio",
      tech_stacks: ["React Native", "Expo", "Redux", "TypeScript", "JavaScript", "TanStack Query"],
      challenges: ["Integrating advanced AI models for chat and text-to-speech", "Optimizing performance for audio playback", "Ensuring a seamless user experience across devices"],
      android_url: "https://apps.apple.com/us/app/hellobible-bible-chat/id6502768944",
      ios_url: "https://play.google.com/store/apps/details?id=com.hellobible.app&hl=en_IN",
    },
    {
      title: "TopMusic",
      desc: "TopMusic is a mobile application designed to provide users with access to a wide range of music, playlists, and audio content. The app emphasizes personalized recommendations, smooth streaming, and an engaging user experience for music lovers.",
      role: "Worked on fixing the critical bugs and crashes from the app and improved the performance of the app by optimizing various components and implemented the new design for the app to make it more user-friendly",
      tech_stacks: ["React Native", "Expo", "Redux", "TypeScript", "JavaScript", "TanStack Query"],
      challenges: ["Debugging and resolving critical bugs and crashes", "Optimizing performance for smoother streaming", "understanding complex code and make the changes accordinly without breaking existing functionality",],
      android_url: "https://play.google.com/store/apps/details?id=com.topchretien.topmusic&hl=en_IN",
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
              src="/profile-pic.png"
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
            🚀 Expert React Native Developer | AI Expert | 9+ Years of Experience |
            Full-stack Architect | TVOS Specialist
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/Manpreet_Singh_Resume_2025.pdf"
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
          <div className="prose dark:prose-invert max-w-none text-lg">
            <p>
              👋 I&apos;m a passionate and experienced mobile engineer
              specializing in <strong>React Native</strong>,{" "}
              <strong>Expo</strong>, and{" "}
              <strong>cross-platform development</strong> for iOS, Android, and
              Smart TV (tvOS). With over <strong>9 years in tech</strong> and
              8+ years building mobile-first experiences, I create sleek,
              scalable, and high-performance apps users love.
            </p>
            <p>
              🛠️ I&apos;ve led and built production-grade solutions across
              FinTech, Healthcare, E-commerce, IoT, and Streaming. From custom
              DRM-based KYC tools to Smart TV integrations, I blend deep
              technical skill with business strategy to drive results.
            </p>
            <p>
              🚀 I&apos;ve worked with startups and global enterprises
              alike—delivering polished products from scratch or helping scale
              existing systems. I believe in ownership, automation, test-driven
              development, and delivering impact, not just code.
            </p>
            <p>
              💬 Let&rsquo;s collaborate if you&rsquo;re building something
              exciting — I love helping products go from idea 💡 to shipped 🚀.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech">
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React Native",
              "Expo",
              "Redux",
              "Zustand",
              "GraphQL",
              "Firebase",
              "Node.js",
              "TypeScript",
              "Tailwind CSS",
              "Fastlane",
              "Detox",
              "Docker",
              "Git",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-zinc-100 dark:bg-zinc-700 px-4 py-1 text-sm rounded-full shadow"
              >
                {tech}
              </span>
            ))}
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
                {(proj.challenges || proj.challenges) && (proj.challenges?.length > 0 || proj.challenges?.length > 0) && (
                  <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
                    <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
                      ⚡ Challenges Overcome:
                    </p>
                    <ul className="space-y-1">
                      {(proj.challenges || proj.challenges)?.map((challenge, idx) => (
                        <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-amber-600 dark:text-amber-400 mt-0.5">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
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
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">
            📬 Email me at{" "}
            <a
              className="underline text-blue-500"
              href="mailto:preetrana883@gmail.com"
            >
              preetrana883@gmail.com
            </a>
            <br />
            🔗 Connect on{" "}
            <a
              className="underline text-blue-500"
              href="https://www.linkedin.com/in/manpreet-singh-37467556/"
            >
              LinkedIn
            </a>
            <br />
            💻 Check out my{" "}
            <a
              className="underline text-blue-500"
              href="https://github.com/manpreetsingh3215"
            >
              GitHub
            </a>
            <br />
            🧠 See my answers on{" "}
            <a
              className="underline text-blue-500"
              href="https://stackoverflow.com/users/8344220/manpreet-singh"
            >
              Stack Overflow
            </a>
          </p>
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

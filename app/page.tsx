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
      desc: "Live event streaming app with Chromecast, Bitmovin analytics, and custom video SDKs.",
    },
    {
      title: "tonik Bank",
      desc: "FinTech money transfer platform. Built full-stack features with Node.js, GraphQL, React Native, and integrated end-to-end tests using Detox.",
    },
    {
      title: "Ferns N Petals",
      desc: "Handled mobile development for India’s top gifting platform. Built features, fixed critical issues, and led a 10-engineer team.",
    },
    {
      title: "weatherman App",
      desc: "Built byte-sized insurance purchase experience with full identity verification using custom camera/KYC tools.",
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
            🚀 Expert React Native Developer | 8+ Years of Experience |
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
              Smart TV (tvOS). With over <strong>10 years in tech</strong> and
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
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {proj.desc}
                </p>
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

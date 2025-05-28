import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Zap,
  Brain,
  Users,
  ArrowRight,
  Check,
  Mail,
  Calendar,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const AutoflowSuite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: "🔁",
      title: "Lead-to-CRM Automation",
      description:
        "Automatically capture leads from forms, emails, or social DMs and push them straight into your CRM — with tags, tasks, and follow-ups preloaded.",
    },
    {
      icon: "🧠",
      title: "AI-Powered Backend Workflows",
      description:
        "Summarize long emails, sort support requests, or generate content — all with OpenAI-powered logic running invisibly in the background.",
    },
    {
      icon: "📦",
      title: "Client Onboarding Flows",
      description:
        "Turn chaos into calm. From intake form → folder creation → Slack alerts → welcome email, we'll automate your entire onboarding process.",
    },
  ];

  const caseStudies = [
    {
      icon: "🧩",
      title: "Zervise – RBAC Helpdesk UI",
      description:
        "Built a secure, role-based dashboard for a support platform inside Microsoft Teams.",
      result: "Faster team onboarding and cleaner access control.",
    },
    {
      icon: "🏭",
      title: "BTERPX – ERP Automation for Manufacturing",
      description:
        "Automated unit tracking, shift logs, and performance reporting for a factory.",
      result: "Saved 100+ hours/month of manual work.",
    },
    {
      icon: "🏋️‍♂️",
      title: "FitForge – AI Fitness App (Top 4 on Product Hunt)",
      description:
        "Built a fully automated fitness plan generator using React.",
      result: "200+ users in 48 hours with zero ads.",
    },
  ];

  const steps = [
    {
      icon: "🧭",
      title: "Book a Free Audit",
      description:
        "Tell us what's slowing you down — we'll find what's worth automating.",
    },
    {
      icon: "🔧",
      title: "We Build Custom Workflows",
      description:
        "Using tools like Make.com, Zapier, OpenAI & custom code, we automate your core systems.",
    },
    {
      icon: "⚡",
      title: "You Scale with Less Drag",
      description:
        "No more repetitive tasks. You'll save hours every week — guaranteed.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white relative overflow-hidden cursor-none"
      style={{
        fontFamily:
          '"SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(1)",
        }}
      />
      <div
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-50 transition-transform duration-75"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      />
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/5 to-violet-500/8"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-400/15 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-400/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-blue-500/8 via-violet-500/6 via-pink-500/4 to-blue-500/8 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "30s" }}
        ></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-2xl border-b border-gradient-to-r border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {/* Logo SVG */}
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="logoGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  {/* Circular segments */}
                  <path
                    d="M 100 20 A 80 80 0 0 1 151.42 48.58 L 125.71 74.29 A 40 40 0 0 0 100 60 Z"
                    fill="url(#logoGradient)"
                    opacity="0.9"
                  />
                  <path
                    d="M 151.42 48.58 A 80 80 0 0 1 180 100 L 140 100 A 40 40 0 0 0 125.71 74.29 Z"
                    fill="url(#logoGradient)"
                    opacity="0.8"
                  />
                  <path
                    d="M 180 100 A 80 80 0 0 1 151.42 151.42 L 125.71 125.71 A 40 40 0 0 0 140 100 Z"
                    fill="url(#logoGradient)"
                    opacity="0.9"
                  />
                  <path
                    d="M 151.42 151.42 A 80 80 0 0 1 100 180 L 100 140 A 40 40 0 0 0 125.71 125.71 Z"
                    fill="url(#logoGradient)"
                    opacity="0.7"
                  />
                  <path
                    d="M 100 180 A 80 80 0 0 1 48.58 151.42 L 74.29 125.71 A 40 40 0 0 0 100 140 Z"
                    fill="url(#logoGradient)"
                    opacity="0.8"
                  />
                  <path
                    d="M 48.58 151.42 A 80 80 0 0 1 20 100 L 60 100 A 40 40 0 0 0 74.29 125.71 Z"
                    fill="url(#logoGradient)"
                    opacity="0.9"
                  />
                  <path
                    d="M 20 100 A 80 80 0 0 1 48.58 48.58 L 74.29 74.29 A 40 40 0 0 0 60 100 Z"
                    fill="url(#logoGradient)"
                    opacity="0.8"
                  />
                  <path
                    d="M 48.58 48.58 A 80 80 0 0 1 100 20 L 100 60 A 40 40 0 0 0 74.29 74.29 Z"
                    fill="url(#logoGradient)"
                    opacity="0.7"
                  />
                </svg>
                <div className="absolute inset-0 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400/20 to-violet-400/20 blur-sm"></div>
                </div>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                Autoflow Suite
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://calendly.com/aditya-autoflowsuite/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-btn-primary group flex items-center gap-2 text-sm no-underline transition-transform duration-300"
              >
                <Calendar className="w-4 h-4" />
                Book Free Audit
                <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
              <span className="text-blue-400 font-medium text-lg tracking-wide">
                AI-Powered Business Automation
              </span>
              <Sparkles className="w-6 h-6 text-violet-400 animate-pulse delay-300" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Automate the Work.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Unlock the Growth.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              At Autoflow Suite, we build{" "}
              <span className="text-blue-400 font-semibold">
                AI-powered automations
              </span>{" "}
              that save you hours and scale your business — without hiring more
              people.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://calendly.com/aditya-autoflowsuite/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-primary group flex items-center gap-3 text-lg no-underline transition-transform duration-300 hover:bg-gradient-to-r from-blue-500 to-violet-500 hover:shadow-2xl hover:shadow-blue-500/40 px-4 py-2 rounded-2xl"
              >
                🚀 Book Free Automation Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <button
                className="hero-btn-secondary group flex items-center gap-3 text-lg no-underline transition-transform duration-300 hover:bg-gradient-to-r from-blue-500 to-violet-500 hover:shadow-2xl hover:shadow-blue-500/20 px-4 py-2 rounded-2xl"
                onClick={() =>
                  document
                    .getElementById("case-studies")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Case Studies
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ⚙️ Built for Founders Who Value
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {" "}
                Time Over Tedium
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We create high-impact workflows that connect your tools, automate
              your backend, and eliminate repetitive work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-700 hover:transform hover:scale-105 hover:rotate-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              📂 Real Automations.
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Real Results.
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              From productivity boosts to hours reclaimed — here's what we've
              built.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-card bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-500 group"
              >
                <div className="text-4xl mb-4">{study.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-green-400 font-medium">
                    Result: {study.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              💡 Simple Process.
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Powerful Results.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 left-3 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-8">
              👋 Meet Aditya —
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Dev, Builder, Automator
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm Aditya Majhi — founder of Autoflow Suite, frontend developer,
              and automation specialist. After building web platforms like
              Zervise and BTERPX, and launching <strong>FitForge</strong> (Top 4
              on Product Hunt), I turned my focus to helping teams scale with
              smarter systems — powered by AI and automation.
            </p>
            <p className="text-lg text-blue-300 font-medium">
              I don't just plug in tools. I design{" "}
              <strong>reliable, future-ready systems</strong> that save time and
              get out of your way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ⚡ Ready to Stop Doing the Same Tasks
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Over and Over?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's automate the work and put your business on autopilot. No
              bots. Just smart, solid systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://calendly.com/aditya-autoflowsuite/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-primary flex items-center gap-3 text-lg no-underline transition-transform duration-300 hover:bg-gradient-to-r from-blue-600 to-violet-600 hover:shadow-2xl hover:shadow-blue-500/50 px-4 py-2 rounded-2xl"
              >
                💬 Book a Free Automation Audit
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:hello@autoflowsuite.com"
                className="cta-btn-secondary group flex items-center gap-3 text-lg no-underline transition-transform duration-300 hover:bg-gradient-to-r from-blue-600 to-violet-600 hover:shadow-2xl hover:shadow-blue-500/50 px-4 py-2 rounded-2xl"
              >
                📥 Drop a Message
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
            Autoflow Suite
          </div>
          <p className="text-gray-400">
            AI-powered automations for the modern business
          </p>
        </div>
      </footer>

      <style jsx>{`
        /* Navigation Button */
        .nav-btn-primary {
          @apply px-6 py-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-xl 
                 transition-all duration-300 flex items-center gap-2 text-sm no-underline
                 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105;
        }

        /* Hero Section Buttons */
        .hero-btn-primary {
          @apply px-10 py-5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold rounded-2xl 
                 transition-all duration-300 flex items-center gap-3 text-lg no-underline
                 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 hover:-translate-y-1
                 border border-blue-400/20 hover:border-blue-300/40;
          background-size: 200% 200%;
        }

        .hero-btn-primary:hover {
          background-position: right center;
        }

        .hero-btn-secondary {
          @apply px-10 py-5 bg-gray-900/60 text-blue-300 font-bold rounded-2xl border border-blue-400/30
                 backdrop-blur-sm transition-all duration-300 flex items-center gap-3 text-lg
                 hover:bg-gray-800/60 hover:border-blue-300/50 hover:text-blue-200 
                 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover:-translate-y-1;
        }

        /* CTA Section Buttons */
        .cta-btn-primary {
          @apply px-10 py-5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-2xl 
                 transition-all duration-300 flex items-center gap-3 text-lg no-underline
                 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1
                 border border-blue-400/30 hover:border-blue-300/50;
          background-size: 200% 200%;
        }

        .cta-btn-primary:hover {
          background-position: right center;
          background-image: linear-gradient(
            to right,
            #2563eb,
            #7c3aed,
            #06b6d4
          );
        }

        .cta-btn-secondary {
          @apply px-10 py-5 bg-gray-900/70 text-blue-300 font-bold rounded-2xl border border-blue-400/40
                 backdrop-blur-sm transition-all duration-300 flex items-center gap-3 text-lg no-underline
                 hover:bg-gray-800/70 hover:border-blue-300/60 hover:text-blue-200 
                 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 hover:-translate-y-1;
        }

        /* Cursor Effects */
        * {
          cursor: none !important;
        }

        a:hover ~ div,
        button:hover ~ div {
          transform: scale(1.5) !important;
        }

        /* Service Card Enhancements */
        .service-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(
            135deg,
            transparent,
            rgba(59, 130, 246, 0.4),
            transparent
          );
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        /* Smooth animations */
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes animate-gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: animate-gradient-x 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AutoflowSuite;

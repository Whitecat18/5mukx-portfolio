"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Shield, Terminal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <section className="flex flex-col items-center text-center pt-10 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pb-1 md:pb-2">
              Hey, I'm 5mukx.
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-xl md:text-2xl font-mono mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <Terminal className="h-5 w-5 text-red-500" />
                <span>Malware Developer</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <Shield className="h-5 w-5 text-red-500" />
                <span>Red Teamer</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2"
              >
                <Code className="h-5 w-5 text-blue-500" />
                <span>Software Engineer</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Exploring the dark corners of cybersecurity and developing tools for red teaming operations.
            Passionate about secure coding, exploit development, and reverse engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                Read My Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my most significant work in cybersecurity and software development
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Project 1 */}
            <motion.div variants={item} className="group">
              <MotionLink
                href="/projects#rust-malware"
                className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  Rust for Malware Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implementing cutting-edge malware techniques in Rust for better performance and evasion
                </p>
                <div className="flex items-center text-sm text-purple-400">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </MotionLink>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={item} className="group">
              <MotionLink
                href="/projects#powershell-hacking"
                className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  PowerShell For Hackers
                </h3>
                <p className="text-muted-foreground mb-4">
                  Collection of PowerShell scripts, hacks, and tutorials for cybersecurity professionals
                </p>
                <div className="flex items-center text-sm text-purple-400">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </MotionLink>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={item} className="group">
              <MotionLink
                href="/projects#javahexor"
                className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  Javahexor
                </h3>
                <p className="text-muted-foreground mb-4">
                  Automated malicious JavaScript payload builder for gathering information through phishing
                </p>
                <div className="flex items-center text-sm text-purple-400">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </MotionLink>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights and tutorials on cybersecurity, red teaming, and software development
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Blog Post 1 */}
            <motion.div variants={item} className="group">
              <MotionLink
                href="/blog/programming-for-infosec"
                className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <p className="text-sm text-muted-foreground mb-2">Nov 11, 2024 • 10 min read</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  The Art of Learning Programming for Red Teaming and CyberSecurity
                </h3>
                <p className="text-muted-foreground mb-4">
                  Exploring the importance of programming skills in red teaming operations and cybersecurity engagements
                </p>
                <div className="flex items-center text-sm text-purple-400">
                  Read article <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </MotionLink>
            </motion.div>

            {/* Blog Post 2 */}
            <motion.div variants={item} className="group">
              <MotionLink
                href="/blog/malware-essentials"
                className="block p-6 bg-secondary/30 rounded-lg border border-border hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <p className="text-sm text-muted-foreground mb-2">Mar 27, 2024 • 9 min read</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  Malware Development Essentials Part 1
                </h3>
                <p className="text-muted-foreground mb-4">
                  A comprehensive guide to the fundamentals of malware development, covering core concepts and techniques
                </p>
                <div className="flex items-center text-sm text-purple-400">
                  Read article <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </MotionLink>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">
                View all articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

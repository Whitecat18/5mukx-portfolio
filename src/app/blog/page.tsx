"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "programming-for-infosec",
    title: "The Art of Learning Programming for Red Teaming and Cybersecurity",
    date: "Nov 11, 2024",
    readTime: "10 min read",
    slug: "/blog/programming-for-infosec",
    description: "A deep dive into the essential programming skills for red teaming and cybersecurity engagements.",
    tags: ["Programming", "Red Teaming", "Cybersecurity"],
    isExternal: false
  },
  {
    id: "malware-essentials",
    title: "Malware Development Essentials Part 1",
    date: "Mar 27, 2024",
    readTime: "9 min read",
    slug: "/blog/malware-essentials",
    description: "Covering the fundamentals of malware development, from core concepts to OS internals.",
    tags: ["Malware", "Windows", "Basics"],
    externalLink: "https://systemweakness.com/malware-development-essentials-part-1-5f4626652ed9",
    isExternal: true
  },
  {
    id: "rust-cyber-security",
    title: "Rust for Cyber Security and Red Teaming",
    date: "Jan 24, 2024",
    readTime: "8 min read",
    slug: "/blog/rust-cyber-security",
    description: "An introduction to using Rust for developing secure and high-performance cybersecurity tools.",
    tags: ["Rust", "Security", "Tooling"],
    externalLink: "https://medium.com/bugbountywriteup/rust-for-cyber-security-and-red-teaming-275595d3fdec",
    isExternal: true
  },
  {
    id: "docker-privilege-escalation",
    title: "Docker Privilege Escalation",
    date: "Oct 2, 2024",
    readTime: "4 min read",
    slug: "/blog/docker-privilege-escalation",
    description: "A simple technique for escalating privileges from a normal user to root within a Docker container.",
    tags: ["Docker", "Security", "PrivEsc"],
    externalLink: "https://medium.com/@smukx/docker-privilege-escalation-18dceb7cf0d3",
    isExternal: true
  },
  {
    id: "self-deletion-technique",
    title: "Self-Deletion Technique using Alternate Data Stream",
    date: "Coming Soon",
    readTime: "",
    slug: "/blog/self-deletion-technique",
    description: "An innovative self-deletion technique for Windows using Alternate Data Streams.",
    tags: ["Malware", "Windows", "ADS"],
    isComingSoon: true
  }
];

const MotionLink = motion(Link);

export default function BlogPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center pt-12 pb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pb-2">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Sharing my knowledge and insights on cybersecurity, red teaming, malware development, and more.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={item}>
                <MotionLink
                  href={post.isComingSoon ? "#" : (post.isExternal ? post.externalLink : post.slug)}
                  target={post.isExternal ? "_blank" : "_self"}
                  className={`flex flex-col h-full bg-secondary/30 p-6 rounded-lg border border-border transition-all duration-300 ${post.isComingSoon ? "opacity-60 cursor-not-allowed" : "hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"}`}
                >
                  <h2 className="text-xl font-bold mb-3 flex-grow">
                    {post.title}
                  </h2>
                  
                  <div className="text-sm text-muted-foreground mb-4 space-y-2">
                    <div className="flex items-center"><Calendar className="h-4 w-4 mr-2"/> {post.date}</div>
                    {!post.isComingSoon && <div className="flex items-center"><Clock className="h-4 w-4 mr-2"/> {post.readTime}</div>}
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm flex-grow">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-background rounded-full text-xs font-medium text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex justify-between items-center">
                    <span className={`text-sm font-medium ${post.isComingSoon ? 'text-amber-400' : 'text-purple-400'}`}>
                      {post.isComingSoon ? 'Coming Soon' : (post.isExternal ? 'Read on external site' : 'Read more')}
                    </span>
                    {post.isExternal && !post.isComingSoon && <ExternalLink className="h-4 w-4 text-muted-foreground"/>}
                    {!post.isExternal && !post.isComingSoon && <ArrowRight className="h-4 w-4 text-muted-foreground"/>}
                  </div>
                </MotionLink>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 p-6 bg-red-900/20 text-red-300 rounded-lg border border-red-500/30">
            <h3 className="font-bold mb-2">Legal Disclaimer</h3>
            <p className="text-sm">
              All information on this site is for educational purposes only. I do not condone the use of this material for any malicious purposes.
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

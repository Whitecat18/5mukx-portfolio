"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "programming-for-infosec",
    title: "The art of Learning Programming for Red teaming and CyberSecurity",
    date: "Nov 11, 2024",
    readTime: "10 min read",
    slug: "/blog/programming-for-infosec",
    description: "This is a Blog Covering the Importance of learning programming for Red Teaming and CyberSecurity Engagements. If anyone says 'programming is not applicable for red team' fkem..",
    tags: ["Programming", "Red Teaming", "Skills"],
    externalLink: "https://5mukx.site/blog/11-02-2024/the_art_of_learning_programming_for_infosec.html",
    isExternal: false
  },
  {
    id: "malware-essentials",
    title: "Malware Development Essentials Part 1",
    date: "Mar 27, 2024",
    readTime: "9 min read",
    slug: "/blog/malware-essentials",
    description: "Become an Beginner to Intermediate on Maldev field. This covers Fundamentals, core concepts, Functions, OS Internets and more…",
    tags: ["malware", "windows", "Basics", "Kernels"],
    externalLink: "https://systemweakness.com/malware-development-essentials-part-1-5f4626652ed9",
    isExternal: true
  },
  {
    id: "rust-cyber-security",
    title: "Rust for Cyber Security and Red Teaming",
    date: "Jan 24, 2024",
    readTime: "8 min read",
    slug: "/blog/rust-cyber-security",
    description: "This blog covers about short Introduction of Rust and where you should start learning the basics to advance and how to implement it in Cyber Security, red teaming, Tool development. Providing you A..Z Resources to Kick Start into Rust.",
    tags: ["malware", "security", "windows", "Rust"],
    externalLink: "https://medium.com/bugbountywriteup/rust-for-cyber-security-and-red-teaming-275595d3fdec",
    isExternal: true
  },
  {
    id: "docker-privilege-escalation",
    title: "Docker Privilege Escalation",
    date: "Oct 2, 2024",
    readTime: "4 min read",
    slug: "/blog/docker-privilege-escalation",
    description: "From normal to R00T user using this simple technique on Docker.",
    tags: ["docker", "security", "privilege-escalation"],
    externalLink: "https://medium.com/@smukx/docker-privilege-escalation-18dceb7cf0d3",
    isExternal: true
  },
  {
    id: "self-deletion-technique",
    title: "Self-deletion technique using Alternate data stream",
    date: "Coming Soon",
    readTime: "Coming Soon",
    slug: "/blog/self-deletion-technique",
    description: "This article discusses the innovative self-deletion technique using the alternate data stream in Windows. A deep dive into how this can be implemented securely, its implications, and the potential security risks involved.",
    tags: ["malware", "security", "windows", "Rust"],
    externalLink: "",
    isExternal: false,
    isComingSoon: true
  }
];

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
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
            <p className="text-xl text-muted-foreground">
              Sharing my knowledge and insights on cybersecurity, red teaming, malware development, and more.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={item}
                id={post.id}
                className="scroll-mt-20"
              >
                <div className={`${post.isComingSoon ? "opacity-70" : ""}`}>
                  <Link
                    href={post.isComingSoon ? "#" : (post.isExternal ? post.externalLink : post.slug)}
                    target={post.isExternal ? "_blank" : "_self"}
                    className={`${!post.isComingSoon ? "hover:text-purple-400" : "cursor-not-allowed"} transition-colors`}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 transition-colors">
                      {post.title} {post.isExternal && <span className="text-xs align-top">↗</span>}
                    </h2>
                  </Link>

                  <p className="text-sm text-muted-foreground mb-4">
                    {post.date} • {post.readTime}
                  </p>

                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!post.isComingSoon && (
                    <Link
                      href={post.isExternal ? post.externalLink : post.slug}
                      target={post.isExternal ? "_blank" : "_self"}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>

                <Separator className="mt-8" />
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-16 p-6 bg-secondary/20 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-4">Legal Disclaimer</h3>
            <p className="text-muted-foreground text-sm">
              The information you gather from this site, social accounts, blogs, all the techniques, proofs-of-concept code,
              or whatever else you may possibly find here, are strictly for educational purposes. I do not condone the usage
              of anything you might gather from this blog or my videos for malicious purposes.
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, BookText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/5mukx",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Whitecat18",
    },
    {
      name: "Medium",
      icon: <BookText className="h-5 w-5" />,
      href: "https://smukx.medium.com/",
    },
  ];

  // const skills = [
  //   "Rust",
  //   "C/C++",
  //   "Python",
  //   "Malware Development",
  //   "Reverse Engineering",
  //   "Exploit Development",
  //   "Network Analysis",
  //   "Red Teaming",
  //   "Cloud Security",
  // ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-secondary/50 shadow-lg">
              <Image
                src="https://raw.githubusercontent.com/Whitecat18/Whitecat18/refs/heads/main/files/yacine.png"
                alt="5mukx profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="text-5xl font-bold mb-2">5mukx</h1>
            <p className="text-xl text-muted-foreground font-mono">
              Malware Researcher & Lead Developer
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="bg-secondary/20 hover:bg-secondary/50 border-border"
                >
                  <Link href={link.href} target="_blank">
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary/20 p-8 rounded-2xl border border-border shadow-inner"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Hello. I'm a Malware Researcher, Red teaming and MAKE 0-days and N-Days works.
              Initially making 
              Follow me for more cool and informative blogs.
            </p>

            <Separator className="my-10 bg-border/50" />

            {/* <h3 className="text-2xl font-bold mb-6 text-center">Skills & Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-background/50 rounded-full text-sm font-medium border border-border transition-all hover:bg-secondary/50 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div> */}

            {/* <Separator className="my-10 bg-border/50" /> */}

            {/* <div className="bg-background/20 p-6 rounded-lg border border-purple-500/30 text-center shadow-lg">
              <h4 className="text-xl font-bold text-purple-400 mb-3">
                Legal Disclaimer
              </h4>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                The information and code on this site are for educational
                purposes only. I do not condone malicious use of this material.
                All content is intended to promote ethical learning and security
                awareness.
              </p>
            </div> */}
            
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

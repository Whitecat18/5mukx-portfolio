"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "rust-malware",
    title: "Rust for Malware Development",
    description: "Using Rust as a weapon to create and build malwares. This repository contains my complete resources and coding practices for malware development.",
    longDescription: "This repository contains source codes of various techniques used by real-world malware authors, red teamers, threat actors, state-sponsored hacking groups etc. These techniques are well-researched and implemented in Rust.",
    features: [
      "AV Evasion",
      "Obfuscating Payloads",
      "Encryfer-X (Ransomware)",
      "Malwares and Keyloggers etc..."
    ],
    link: "https://github.com/Whitecat18/Rust-for-Malware-Development",
    // stars: 2030,
    tags: ["Rust", "Malware", "Red Teaming", "Security"]
  },
  {
    id: "powershell-hacking",
    title: "PowerShell For Hackers and Pentesters",
    description: "A collection of PowerShell Scripts, Hacks, Tutorials etc. These are my complete resources that I coded to automate hacks, red team operations, and pentesting tasks.",
    longDescription: "This Repository contains all kinds of Hacks and PowerShell Tricks, from basics to advanced PowerShell commands and scripts that will help you in day-to-day life of an IT Sectors, cybersecurity or Windows Automation.",
    link: "https://github.com/Whitecat18/Powershell-Scripts-for-Hackers-and-Pentesters",
    // stars: 399,
    tags: ["PowerShell", "Hacking", "Windows", "Security"]
  },
  {
    id: "windows-activator",
    title: "Windows Activator",
    description: "A Windows Activator using batch and PowerShell scripts that automatically activates Windows 10 and 11 within minutes.",
    longDescription: "Tested on Windows 10 and 11 versions. The code is open source, designed for educational purposes.",
    link: "https://github.com/Whitecat18/Windows-Activator",
    // stars: 88,
    tags: ["Windows", "Batch", "PowerShell", "Activation"]
  },
  {
    id: "javahexor",
    title: "Javahexor",
    description: "An automated malicious JavaScript payload builder to receive various information through phishing.",
    longDescription: "Collects Public IP address, Live Location, Browser Usage, screen dimensions, Bookmarks, cookie status, Network Monitoring, and more through phishing techniques.",
    link: "https://github.com/Whitecat18/Javahexor",
    // stars: 36,
    tags: ["JavaScript", "Phishing", "Information Gathering", "Web Security"]
  }
];

export default function ProjectsPage() {
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
            <h1 className="text-4xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-muted-foreground">
              Here you can see my project details with short explanations along with links.
              Click the project titles to redirect to repositories.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                id={project.id}
                className="scroll-mt-20"
              >
                <Card className="bg-secondary/20 border-border hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      <Link href={project.link} target="_blank" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {project.longDescription}
                    </p>

                    {project.features && (
                      <div className="mt-4">
                        <p className="font-medium mb-2">Key Features:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-muted-foreground">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      {/* <span>{project.stars}</span> */}
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.link} target="_blank" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View Repository
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

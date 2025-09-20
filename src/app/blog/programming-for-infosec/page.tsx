"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { ArrowLeft, GitGraph, FileText, Bot, ShieldCheck, TerminalSquare, Code, BrainCircuit, AlignLeft, Scale } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TableOfContents = () => (
  <div className="p-6 bg-secondary/30 rounded-lg border border-border sticky top-24">
    <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
    <ul className="space-y-2 text-muted-foreground">
      <li><a href="#importance" className="hover:text-primary transition-colors">1. Importance of Programming</a></li>
      <li><a href="#languages" className="hover:text-primary transition-colors">2. Choosing Languages</a></li>
      <li><a href="#environment" className="hover:text-primary transition-colors">3. Development Environment</a></li>
      <li><a href="#core-concepts" className="hover:text-primary transition-colors">4. Core Concepts</a></li>
      <li><a href="#first-tools" className="hover:text-primary transition-colors">5. Your First Tools</a></li>
      <li><a href="#advanced-techniques" className="hover:text-primary transition-colors">6. Advanced Techniques</a></li>
      <li><a href="#ethics" className="hover:text-primary transition-colors">7. Ethical Considerations</a></li>
      <li><a href="#community" className="hover:text-primary transition-colors">8. Community Engagement</a></li>
      <li><a href="#conclusion" className="hover:text-primary transition-colors">9. Conclusion</a></li>
    </ul>
  </div>
);

const Section = ({ id, title, children, icon: Icon }: { id: string, title: string, children: React.ReactNode, icon: React.ElementType }) => (
  <motion.section 
    id={id} 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 mr-3 text-primary" />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="prose dark:prose-invert max-w-none text-muted-foreground">
      {children}
    </div>
  </motion.section>
);

export default function BlogPost() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/blog" className="flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
            </Link>
          </Button>

          <header className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold mb-4 text-neutral-200 pb-2"
            >
              The Art of Learning Programming for Red Teaming and Cybersecurity
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-muted-foreground"
            >
              <span>November 11, 2024</span>
              <span className="mx-2">•</span>
              <span>10 min read</span>
            </motion.div>
          </header>

          <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden my-12 shadow-2xl shadow-purple-500/10">
            <Image
              src="https://ext.same-assets.com/2215973886/3206004924.jpeg"
              alt="Red teaming illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <Section id="introduction" title="Hello Friend, It's Me, 5mukx!" icon={AlignLeft}>
                <p>
                  Welcome to the advanced realm of red teaming, where programming isn't just a skill—it's a weapon. This guide will walk you through the essentials of developing tools for red teaming, focusing on programming techniques that give you a competitive edge in cybersecurity.
                </p>
              </Section>

              <Section id="importance" title="1. The Importance of Programming in Red Teaming" icon={BrainCircuit}>
                <p>Red teaming means playing the adversary to strengthen defenses. Here's why programming is critical in this role:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Custom Exploits</strong>: Off-the-shelf tools won't always cut it. Coding your own exploits lets you target specific vulnerabilities with precision.</li>
                  <li><strong>Automation</strong>: Manual attacks are tedious. Scripts and programs automate repetitive tasks, saving time and effort.</li>
                  <li><strong>Reverse Engineering</strong>: Dissect software or malware through code to understand its mechanics—or bend it to your will.</li>
                </ul>
              </Section>

              <Section id="languages" title="2. Choosing the Right Programming Languages" icon={Code}>
                <p>Selecting languages that balance performance, control, and usability is key. Here's a breakdown of top choices:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 bg-secondary/40 border border-border rounded-lg"><strong>C/C++</strong>: High performance, direct hardware access, ideal for exploit development.</div>
                  <div className="p-4 bg-secondary/40 border border-border rounded-lg"><strong>Rust</strong>: Memory safety without sacrificing speed, modern syntax.</div>
                  <div className="p-4 bg-secondary/40 border border-border rounded-lg"><strong>C#</strong>: Performance with safety, seamless Windows API integration.</div>
                </div>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Python</strong>: Perfect for rapid prototyping, scripting, and automation.</li>
                  <li><strong>PowerShell</strong>: Excels in Windows environments for post-exploitation.</li>
                  <li><strong>Bash</strong>: Essential for Linux scripting and system management.</li>
                </ul>
              </Section>

              <Section id="environment" title="3. Setting Up Your Development Environment" icon={TerminalSquare}>
                <p>A robust setup ensures security and efficiency. Key components include VMs (Kali, Windows), IDEs (VS Code, Rider), Debuggers (GDB, WinDbg), Network Tools (Fiddler, Wireshark), and C2 Frameworks (Cobalt Strike, Mythic).</p>
              </Section>

              <Section id="core-concepts" title="4. Core Concepts for Tool Development" icon={GitGraph}>
                <p>Master these fundamentals: Memory Management, Network Programming, Scripting, Cryptography, and OS Internals.</p>
              </Section>

              <Section id="first-tools" title="5. Developing Your First Red Team Tools" icon={Bot}>
                <p>Start with practical projects like a Keylogger, Port Scanner, Web Shell, or Password Cracker to build foundational skills.</p>
              </Section>

              <Section id="advanced-techniques" title="6. Advanced Red Teaming Techniques" icon={ShieldCheck}>
                <p>Elevate your skills with Exploit Development (Buffer Overflows, ROP), Payload Obfuscation, Privilege Escalation, and Adversary Simulation.</p>
              </Section>

              <Section id="ethics" title="7. Ethical Considerations and Legal Frameworks" icon={Scale}>
                <p>Stay compliant by securing written permission, understanding relevant laws (CFAA, GDPR), and using legal platforms like Hack The Box for practice.</p>
              </Section>

              <Section id="community" title="8. Community Engagement and Continuous Learning" icon={FileText}>
                <p>Stay connected by contributing to open-source projects, participating in CTFs, and following industry blogs and conferences.</p>
              </Section>

              <Section id="conclusion" title="9. Conclusion: The Path Ahead" icon={AlignLeft}>
                <p>Red teaming is a journey of continuous learning. Your tools will evolve, sharpening your cybersecurity expertise. The aim? To understand and secure systems.</p>
                <p className="mt-4 font-semibold">Stay curious, ethical, and keep coding. See you on the flip side!</p>
              </Section>

            </div>
            
            <aside className="lg:col-span-1">
              <TableOfContents />
            </aside>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {['Programming', 'Red Teaming', 'Cybersecurity'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium border border-border">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-red-900/20 text-red-300 p-4 rounded-lg border border-red-500/30 my-8 max-w-2xl mx-auto">
              <h3 className="font-bold mb-2">Legal Disclaimer</h3>
              <p className="text-sm">
                This content is for educational purposes only. Techniques, code, and information here are not endorsed for malicious use.
              </p>
            </div>

            <Button variant="outline" asChild>
              <Link href="/blog" className="flex items-center">
                More Articles
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/blog" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                The art of Learning Programming for Red teaming and CyberSecurity
              </h1>

              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span>November 11, 2024</span>
                <span className="mx-2">•</span>
                <span>10 min read</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose dark:prose-invert max-w-none mb-8"
          >
            <p className="text-lg">
              Hello Friend, It's me 5mukx here.
            </p>

            <p>
              Welcome to the advanced realm of red teaming, where programming isn't just a skill
              but a weapon. This guide will navigate you through the essentials of developing tools for red teaming,
              focusing on programming techniques that give you an edge in cybersecurity.
            </p>

            <div className="relative w-full aspect-video rounded-lg overflow-hidden my-8">
              <Image
                src="https://ext.same-assets.com/1319243742/1259024389.jpeg"
                alt="Red teaming illustration"
                fill
                className="object-cover"
              />
            </div>

            <h2>1. The Importance of Programming in Red Teaming</h2>

            <p>
              Alright, so you're into red teaming - that's where you play the bad guy to help the
              good guys get better, right? Here's the deal with programming in this gig:
            </p>

            <ul>
              <li>
                <strong>Custom Exploits</strong>: Think of it like this: You're not just using off-the-shelf tools.
                Sometimes, you need something bespoke, tailored to hit a specific weak spot in a system.
                That's where coding your own exploit comes in.
              </li>
              <li>
                <strong>Automation for the Win</strong>: Imagine having to manually do every step of an attack.
                Boring, right? With programming, you can write scripts or programs to automate the boring stuff.
              </li>
              <li>
                <strong>Taking Things Apart</strong>: Ever wonder how your favorite toy works? In red teaming,
                you're doing that with software or malware. You code to dissect these things, figure out how they tick,
                and sometimes, how to make them tick in your favor.
              </li>
            </ul>

            <h2>2. Choosing the Right Programming Languages for Red Teaming</h2>

            <p>
              When it comes to developing tools for red teaming, focusing on languages that offer
              both performance and control over system resources is crucial. Here's why C/C++, C#,
              and Rust are particularly valuable:
            </p>

            <Card className="p-4 my-6">
              <h3 className="text-xl font-bold mb-2">Language Comparison</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold mb-1">C/C++</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Direct hardware access</li>
                    <li>High performance</li>
                    <li>Fine-grained memory control</li>
                    <li>Ideal for exploit development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Rust</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Memory safety</li>
                    <li>Near C/C++ performance</li>
                    <li>Modern features</li>
                    <li>Safe concurrency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Python</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Rapid prototyping</li>
                    <li>Extensive libraries</li>
                    <li>Easy to learn and use</li>
                    <li>Great for scripting and automation</li>
                  </ul>
                </div>
              </div>
            </Card>

            <p>
              For the full article, please visit:{" "}
              <Link
                href="https://5mukx.site/blog/11-02-2024/the_art_of_learning_programming_for_infosec.html"
                target="_blank"
                className="text-purple-400 hover:text-purple-300"
              >
                The art of Learning Programming for Red teaming and CyberSecurity
              </Link>
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                Programming
              </span>
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                Red Teaming
              </span>
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                Skills
              </span>
            </div>
          </motion.div>

          <Separator className="my-8" />

          <div className="bg-secondary/20 p-4 rounded-lg border border-border my-8">
            <h3 className="text-lg font-bold text-purple-400 mb-2">Legal Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              The information you gather from this site, social accounts, blogs, all the techniques, proofs-of-concept code,
              or whatever else you may possibly find here, are strictly for educational purposes. I do not condone the usage
              of anything you might gather from this blog or my videos for malicious purposes.
            </p>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> More articles
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

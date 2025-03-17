"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      color: "text-blue-400"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Whitecat18",
      color: "text-gray-400"
    },
    {
      name: "Medium",
      icon: <BookText className="h-5 w-5" />,
      href: "https://smukx.medium.com/",
      color: "text-green-400"
    }
  ];

  const skills = [
    "Rust", "C/C++", "Python", "Malware Development", 
    "Reverse Engineering", "Exploit Development",
    "Network Analysis", "Red Teaming", "Cloud Security"
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-secondary/20 p-4 overflow-hidden">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://raw.githubusercontent.com/Whitecat18/Whitecat18/refs/heads/main/files/yacine.png"
                      alt="5mukx profile"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-bold mb-2 text-center">5mukx</h2>
                  <p className="text-muted-foreground text-center mb-4">Kavin, 20</p>

                  <div className="flex justify-center space-x-4 mb-4">
                    {socialLinks.map((link) => (
                      <Button
                        key={link.name}
                        variant="ghost"
                        size="icon"
                        asChild
                        className={`hover:${link.color} hover:bg-secondary`}
                      >
                        <Link href={link.href} target="_blank">
                          {link.icon}
                        </Link>
                      </Button>
                    ))}
                  </div>

                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="text-sm font-mono">
                      <span className="text-purple-400">$</span> whoami<br />
                      <span className="text-green-400">›</span> Malware Developer<br />
                      <span className="text-green-400">›</span> Red Teamer<br />
                      <span className="text-green-400">›</span> Software Engineer
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-secondary/20 p-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <h3 className="text-xl font-bold mb-4">Hello friend</h3>

                    <p className="text-muted-foreground mb-4">
                      Hello friend, your friendly neighborhood 5mukx here. My name is Kavin, i am 20 years old who's really into security stuff like red teaming and making malware. When I'm not coding, i am engaged with cloud activities like deployment and scaling, Full stack development.
                    </p>

                    <h3 className="text-xl font-bold mb-4 mt-8">Skills & Expertise</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Separator className="my-6" />

                    <div className="bg-secondary/30 p-4 rounded-lg border border-border mb-6">
                      <h4 className="text-lg font-bold text-purple-400 mb-2">Legal Disclaimer</h4>
                      <p className="text-sm text-muted-foreground">
                        The information you gather from this site, social accounts, blogs, all the techniques, proofs-of-concept code, or whatever else you may possibly find here, are strictly for educational purposes. I do not condone the usage of anything you might gather from this blog or my videos for malicious purposes.
                      </p>
                    </div>

                    <h4 className="text-lg font-bold text-center">HELP LIKE NO ONE, BUT DONT DEPEND ON ANYONE</h4>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

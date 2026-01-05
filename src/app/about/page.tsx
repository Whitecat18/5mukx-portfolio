'use client';

import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, BookText, Mail, Fingerprint, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';

export default function AboutPage() {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      href: 'https://x.com/5mukx',
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com/Whitecat18',
    },
    {
      name: 'Medium',
      icon: <BookText className="h-5 w-5" />,
      href: 'https://smukx.medium.com/',
    },
  ];

  const contactDetails = [
    {
      name: 'Twitter / DM',
      value: '@5mukx',
      href: 'https://x.com/5mukx',
      icon: <Twitter className="h-5 w-5 text-purple-400" />,
    },
    {
      name: 'Mail',
      value: 'smukx@proton.me',
      href: 'mailto:smukx@proton.me',
      icon: <Mail className="h-5 w-5 text-purple-400" />,
    },
    // {
    //   name: 'TOX ID',
    //   value: '3DFBC2AF2419FC045A2AFD2FBCC07F5B578F2374C7EC90A3910EA821D8247628D8004BF964B9',
    //   icon: <Fingerprint className="h-5 w-5 text-purple-400" />,
    //   copyable: true,
    // },
  ];

  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((text: string) => {
    if (copied) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  }, [copied]);

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
              Hello. I'm a Malware Researcher, Red teamer and freelancer. 
              Follow me for more cool and informative blogs.
            </p>

            <Separator className="my-10 bg-border/50" />

            <h3 className="text-2xl font-bold mb-6 text-center">Contact Details</h3>
            <div className="max-w-md mx-auto space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.name} className="flex items-center bg-background/50 p-4 rounded-lg border border-border">
                  {detail.icon}
                  <div className="ml-4 flex-1 overflow-hidden">
                    <p className="text-sm font-bold text-foreground">{detail.name}</p>
                    <div className="flex items-center justify-between gap-2">
                        {detail.href ? (
                            <Link href={detail.href} target={detail.href.startsWith('mailto:') ? '_self' : '_blank'} className="text-sm text-muted-foreground break-all hover:text-purple-400 transition-colors">{detail.value}</Link>
                        ) : (
                            <p className="text-sm text-muted-foreground break-all">{detail.value}</p>
                        )}
                        {/* {detail.copyable && (
                            <Button variant="ghost" size="icon" onClick={() => handleCopy(detail.value)} className="h-8 w-8 flex-shrink-0">
                                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                            </Button>
                        )} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

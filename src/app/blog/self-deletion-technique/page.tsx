"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CalendarClock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
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
                Self-deletion technique using Alternate data stream
              </h1>

              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <span className="text-purple-400">Coming Soon</span>
              </div>
            </motion.div>
          </div>

          <Card className="bg-secondary/20 p-8 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <CalendarClock className="h-16 w-16 mx-auto text-purple-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">This article is coming soon!</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                I'm currently working on this comprehensive article about self-deletion techniques using Alternate Data Streams in Windows.
                It will be a deep dive into the implementation, security implications, and potential risks involved.
                Stay tuned!
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-2 justify-center mt-8">
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                malware
              </span>
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                security
              </span>
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                windows
              </span>
              <span className="px-2 py-1 bg-secondary rounded-md text-xs font-medium">
                Rust
              </span>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to get notified when this article is published?
              Follow me on social media for updates.
            </p>

            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link href="https://x.com/5mukx" target="_blank" className="flex items-center">
                  Follow on X
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/Whitecat18" target="_blank" className="flex items-center">
                  Follow on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

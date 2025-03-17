"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageLayout from "@/components/PageLayout";

export default function RedirectPage() {
  const router = useRouter();
  const externalUrl = "https://medium.com/@smukx/docker-privilege-escalation-18dceb7cf0d3";

  useEffect(() => {
    // Redirect to external site after a brief delay
    const redirectTimer = setTimeout(() => {
      window.location.href = externalUrl;
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-6">Redirecting you to Medium...</h1>
          <p className="text-muted-foreground mb-6">
            You are being redirected to the full article on Medium.
            If you are not redirected automatically, please click the link below.
          </p>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            Go to article
          </a>
        </div>
      </div>
    </PageLayout>
  );
}

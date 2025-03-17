import Link from "next/link";
import { Github, Twitter, BookText } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 5mukx. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/Whitecat18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/5mukx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://smukx.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Medium"
            >
              <BookText className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex justify-center md:justify-start">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            HELP LIKE NO ONE, BUT DONT DEPEND ON ANYONE
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Socials from "@/sections/socials";
const goldenSignature = localFont({
  src: "../assets/GoldenSignature.otf",
  display: "swap",
});

export default function Header() {
  const links = ["about", "projects", "skills", "contact"];

  return (
    <>
      <nav className="fixed z-50 border-b justify-center py-3 shadow-sm bg-background/60 backdrop-blur-md flex w-full select-none font-light md:px-28">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <div
            className={cn(
              "text-5xl drop-shadow-2xl pt-1 hover:scale-105 transition-all",
              goldenSignature.className
            )}
          >
            <Link href="/">Tanishq Kumar</Link>
          </div>
          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer font-semibold hover:text-emerald-500"
                onClick={() => {
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            ))}

            <span>
              <Socials />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

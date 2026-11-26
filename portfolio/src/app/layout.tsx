import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { person } from "../data/content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${person.fullName} | ${person.role}`,
  description:
    "Software engineer building RAG systems and production web apps. Explore Cortex, NexMind, experience at Aanvikshiki AI Solutions, and more.",
  openGraph: {
    title: `${person.fullName} | ${person.role}`,
    description:
      "Software engineer building RAG systems and production web apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}})();`,
          }}
        />
      </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}

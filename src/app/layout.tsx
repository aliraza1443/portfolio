import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-ready.vercel.app"
  ),
  title: "Ali Raza | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in AI-integrated SaaS systems, scalable backend architecture, and modern web applications using Next.js, TypeScript, NestJS, and Supabase.",
  openGraph: {
    title: "Ali Raza | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in AI-integrated SaaS systems, scalable backend architecture, and modern web applications using Next.js, TypeScript, NestJS, and Supabase.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Raza | Full-Stack Developer",
    description:
      "Portfolio focused on AI-integrated SaaS systems, backend architecture, and modern production web applications.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prathyush's Portfolio",
  description: "Prathyush's personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="p-4 bg-blue-600 text-white">
          <nav className="flex justify-center space-x-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/experience" className="hover:text-gray-200">Experience</Link>
            <Link href="/projects" className="hover:text-gray-200">Projects</Link>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="p-4 bg-blue-600 text-white text-center">
          <p>&copy; 2024 Prathyush. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
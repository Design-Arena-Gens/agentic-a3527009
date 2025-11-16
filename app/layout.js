import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Radhe Cyber Academy | Networking Basics",
  description:
    "Learn Networking Basics for Ethical Hacking in simple Hinglish by Radhe Cyber Academy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="site-container">
          <header className="site-header">
            <div className="brand">
              <span className="logo">??</span>
              <span className="brand-text">Radhe Cyber Academy</span>
            </div>
            <nav className="site-nav">
              <a href="#intro">Intro</a>
              <a href="#topics">Topics</a>
              <a href="#quiz">Quiz</a>
              <a href="#resources">Resources</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <span>? {new Date().getFullYear()} Radhe Cyber Academy</span>
          </footer>
        </div>
      </body>
    </html>
  );
}

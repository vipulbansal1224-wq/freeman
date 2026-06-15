import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Freeman Group - Clone",
  description: "Measuring Tapes Manufacturer in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          {/* Top Bar */}
          <div className="top-bar">
            <div className="container top-bar-content">
              <div className="top-left">World class Measuring Tools</div>
              <div className="top-right">
                <span>Sales Query: 124-418-5950</span>
                <span>sales@freemansgroup.com</span>
              </div>
            </div>
          </div>

          {/* Middle Bar */}
          <div className="middle-bar container">
            <div className="logo-container">
              <Link href="/">
                <img src="/images/FREEMANS-LOGO-28th-april-1.jpg" alt="FMI Limited" className="header-logo" />
              </Link>
            </div>
            
            <div className="search-container">
              <div className="search-box">
                <input type="text" placeholder="Search products..." />
                <button type="submit" aria-label="Search">
                  🔍
                </button>
              </div>
            </div>
            
            <div className="header-actions">
              <a href="#" className="btn-catalogue">DOWNLOAD CATALOGUE</a>
              <Link href="/admin/login" className="btn-login">Dealer Login</Link>
            </div>
          </div>

          {/* Bottom Nav Bar */}
          <div className="nav-bar">
            <div className="container">
              <nav className="main-navigation">
                <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li className="menu-item-has-children">
                  <Link href="/products">Products</Link>
                  <ul className="sub-menu">
                    <li><Link href="/products/measuring-tapes">Measuring Tapes</Link></li>
                    <li><Link href="/products/spirit-levels">Spirit Levels</Link></li>
                    <li><Link href="/products/measuring-wheels">Measuring Wheels</Link></li>
                    <li><Link href="/products/test-and-measure-tools">Test & Measure Tools</Link></li>
                    <li><Link href="/products/precision-tools">Precision Tools</Link></li>
                    <li><Link href="/products/power-tool-accessories">Power Tools Accessories</Link></li>
                    <li><Link href="/products/hand-tools">Hand Tools</Link></li>
                  </ul>
                </li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {children}
        <Footer />
      </body>
    </html>
  );
}

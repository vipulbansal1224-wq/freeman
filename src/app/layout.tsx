import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Footer from "./components/Footer";
import fs from "fs/promises";
import path from "path";

export const metadata: Metadata = {
  title: "Freeman Group - Clone",
  description: "Measuring Tapes Manufacturer in India",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuPath = path.join(process.cwd(), "src/data/menu.json");
  let menuData: any = [];
  try {
    const file = await fs.readFile(menuPath, "utf-8");
    menuData = JSON.parse(file);
  } catch(e) {}

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
                  {menuData.map((item: any) => (
                    <li key={item.id} className={item.subItems ? "menu-item-has-children" : ""}>
                      <Link href={item.href}>{item.title}</Link>
                      {item.subItems && (
                        <ul className="sub-menu">
                          {item.subItems.map((sub: any) => (
                            <li key={sub.id}><Link href={sub.href}>{sub.title}</Link></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
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

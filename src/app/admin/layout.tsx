import Link from "next/link";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Freeman Admin</h2>
        <nav>
          <ul>
            <li>
              <Link href="/admin">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/products">Products</Link>
            </li>
            <li>
              <Link href="/admin/news">News</Link>
            </li>
            <li>
              <Link href="/admin/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/">← Back to Site</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}

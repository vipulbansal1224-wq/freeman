import { prisma } from "@/lib/prisma";
import { addPage, deletePage } from "./actions";

export default async function AdminPages() {
  const pages = await prisma.page.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="admin-page">
      <h1>Manage Pages</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>Create New Page</h3>
        <form action={addPage} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
          <input name="title" placeholder="Page Title (e.g. About Us)" required style={{ padding: '0.5rem' }} />
          <input name="slug" placeholder="URL Slug (e.g. about)" required style={{ padding: '0.5rem' }} />
          <textarea name="content" placeholder="HTML Content" required style={{ padding: '0.5rem', minHeight: '200px' }}></textarea>
          <button type="submit" style={{ padding: '0.75rem', background: '#e11b22', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
            Publish Page
          </button>
        </form>
      </div>

      <div className="admin-table-container">
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>URL Slug</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pages.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ padding: '1rem', textAlign: 'center' }}>No pages found.</td>
              </tr>
            ) : (
              pages.map((p) => (
                <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem' }}>{p.title}</td>
                  <td style={{ padding: '1rem' }}>/{p.slug}</td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <form action={deletePage.bind(null, p.id)}>
                      <button type="submit" style={{ padding: '0.5rem 1rem', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Delete</button>
                    </form>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

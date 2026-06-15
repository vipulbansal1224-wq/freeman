import { addNews, deleteNews } from "./actions";
import fs from "fs/promises";
import path from "path";

export default async function AdminNews() {
  const dataFilePath = path.join(process.cwd(), "src/app/news/news-data.json");
  let data: any[] = [];
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    data = JSON.parse(fileContent);
  } catch(e) {}

  return (
    <div className="admin-page">
      <h1>Manage News & Press</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>Add New Press Release</h3>
        <form action={addNews} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <input name="year" placeholder="Year (e.g., 2026)" required style={{ padding: '0.5rem' }} />
          <input name="title" placeholder="News Title" required style={{ padding: '0.5rem' }} />
          <input name="date" placeholder="Date (e.g., 15/06/2026)" style={{ padding: '0.5rem' }} />
          <input name="imgUrl" placeholder="Image URL (e.g., https://...)" required style={{ padding: '0.5rem' }} />
          <input name="link" placeholder="Article Link URL" style={{ padding: '0.5rem' }} />
          <button type="submit" style={{ padding: '0.75rem', background: '#e11b22', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
            Add News
          </button>
        </form>
      </div>

      <div className="admin-table-container" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Year</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Image</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '1rem', textAlign: 'center' }}>No news found.</td>
              </tr>
            ) : (
              data.map((yearGroup, yIdx) => (
                yearGroup.items.map((item: any, iIdx: number) => (
                  <tr key={`${yIdx}-${iIdx}`} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem' }}>{yearGroup.year}</td>
                    <td style={{ padding: '1rem' }}>
                      <img src={item.img} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                    </td>
                    <td style={{ padding: '1rem' }}>{item.title}</td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <form action={deleteNews.bind(null, yIdx, iIdx)}>
                        <button type="submit" style={{ padding: '0.5rem 1rem', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Delete</button>
                      </form>
                    </td>
                  </tr>
                ))
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

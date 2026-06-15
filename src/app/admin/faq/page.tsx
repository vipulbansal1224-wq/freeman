import { addFaq, deleteFaq } from "./actions";
import fs from "fs/promises";
import path from "path";

export default async function AdminFAQ() {
  const dataFilePath = path.join(process.cwd(), "src/app/faq/faq-data.json");
  let data: any[] = [];
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    data = JSON.parse(fileContent);
  } catch(e) {}

  return (
    <div className="admin-page">
      <h1>Manage FAQ</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>Add New FAQ</h3>
        <form action={addFaq} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <input name="categoryTitle" placeholder="Category (e.g., WARRANTY/ GUARANTEE)" required style={{ padding: '0.5rem' }} />
          <input name="question" placeholder="Question" required style={{ padding: '0.5rem' }} />
          <textarea name="answer" placeholder="Answer" required style={{ padding: '0.5rem', minHeight: '100px' }}></textarea>
          <button type="submit" style={{ padding: '0.75rem', background: '#e11b22', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
            Add FAQ
          </button>
        </form>
      </div>

      <div className="admin-table-container" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Category</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Question</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={3} style={{ padding: '1rem', textAlign: 'center' }}>No FAQs found.</td>
              </tr>
            ) : (
              data.map((catGroup, cIdx) => (
                catGroup.faqs.map((faq: any, fIdx: number) => (
                  <tr key={`${cIdx}-${fIdx}`} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{catGroup.categoryTitle}</td>
                    <td style={{ padding: '1rem' }}>{faq.question}</td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <form action={deleteFaq.bind(null, cIdx, fIdx)}>
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

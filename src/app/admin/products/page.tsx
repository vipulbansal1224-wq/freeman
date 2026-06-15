import { addProduct, deleteProduct } from "./actions";
import fs from "fs/promises";
import path from "path";

export default async function AdminProducts() {
  const dataFilePath = path.join(process.cwd(), "src/app/products/all-categories-data.json");
  let data: any = {};
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    data = JSON.parse(fileContent);
  } catch(e) {}

  // Flatten products for display
  const allProducts: any[] = [];
  Object.keys(data).forEach(catSlug => {
    const category = data[catSlug];
    if (category.products) {
      category.products.forEach((p: any, index: number) => {
        allProducts.push({
          categorySlug: catSlug,
          categoryTitle: category.title,
          index: index,
          title: p.title,
          img: p.img
        });
      });
    }
  });

  return (
    <div className="admin-page">
      <h1>Manage Products</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>Add New Product</h3>
        <form action={addProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <select name="categorySlug" required style={{ padding: '0.5rem' }}>
            <option value="">Select Category...</option>
            {Object.keys(data).map(slug => (
              <option key={slug} value={slug}>{data[slug].title}</option>
            ))}
          </select>
          <input name="title" placeholder="Product Title" required style={{ padding: '0.5rem' }} />
          <input name="imgUrl" placeholder="Image URL (e.g., https://...)" required style={{ padding: '0.5rem' }} />
          <button type="submit" style={{ padding: '0.75rem', background: '#e11b22', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
            Add Product
          </button>
        </form>
      </div>

      <div className="admin-table-container" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Image</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Category</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '1rem', textAlign: 'center' }}>No products found.</td>
              </tr>
            ) : (
              allProducts.map((p, idx) => (
                <tr key={`${p.categorySlug}-${p.index}-${idx}`} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem' }}>
                    <img src={p.img} alt={p.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                  </td>
                  <td style={{ padding: '1rem' }}>{p.title}</td>
                  <td style={{ padding: '1rem' }}>{p.categoryTitle}</td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <form action={deleteProduct.bind(null, p.categorySlug, p.index)}>
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

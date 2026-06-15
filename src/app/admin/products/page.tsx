import { prisma } from "@/lib/prisma";
import { addProduct, deleteProduct } from "./actions";

export default async function AdminProducts() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="admin-page">
      <h1>Manage Products</h1>
      
      <div className="admin-form-container" style={{ background: '#fff', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h3>Add New Product</h3>
        <form action={addProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <input name="title" placeholder="Product Title" required style={{ padding: '0.5rem' }} />
          <input name="category" placeholder="Category (e.g., Measuring Tapes)" required style={{ padding: '0.5rem' }} />
          <textarea name="description" placeholder="Description" required style={{ padding: '0.5rem', minHeight: '100px' }}></textarea>
          <input name="imageUrl" placeholder="Image URL" style={{ padding: '0.5rem' }} />
          <button type="submit" style={{ padding: '0.75rem', background: '#e11b22', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '0.25rem' }}>
            Add Product
          </button>
        </form>
      </div>

      <div className="admin-table-container">
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#1e293b', color: '#fff' }}>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Category</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Date Added</th>
              <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '1rem', textAlign: 'center' }}>No products found.</td>
              </tr>
            ) : (
              products.map((p: any) => (
                <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem' }}>{p.title}</td>
                  <td style={{ padding: '1rem' }}>{p.category}</td>
                  <td style={{ padding: '1rem' }}>{p.createdAt.toLocaleDateString()}</td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <form action={deleteProduct.bind(null, p.id)}>
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

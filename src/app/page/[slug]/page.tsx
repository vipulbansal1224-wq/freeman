import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

export default async function CustomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const pagesPath = path.join(process.cwd(), "src/data/pages.json");
  let pagesData: any[] = [];
  try {
    const fileContent = await fs.readFile(pagesPath, "utf-8");
    pagesData = JSON.parse(fileContent);
  } catch (err) {}

  const page = pagesData.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main>
      {/* Banner */}
      <div className="inner-banner" style={{ backgroundImage: `url('${page.bannerImage || "/images/banner-contact.jpg"}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="banner-title" style={{ color: '#fff', fontSize: '3rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{page.title}</h1>
      </div>

      <div className="container" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '50vh' }}>
        <div 
          className="custom-page-content" 
          dangerouslySetInnerHTML={{ __html: page.content }} 
          style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}
        />
      </div>
    </main>
  );
}

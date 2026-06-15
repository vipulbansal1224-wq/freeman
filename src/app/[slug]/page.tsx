import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const page = await prisma.page.findUnique({
    where: { slug },
  });

  if (!page) {
    notFound();
  }

  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 className="section-title">{page.title}</h1>
      <div 
        className="page-content" 
        dangerouslySetInnerHTML={{ __html: page.content }} 
        style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}
      />
    </main>
  );
}

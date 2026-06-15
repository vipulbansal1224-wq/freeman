import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany({});
  
  const products = [
    {
      title: 'Pocket Measuring Tape',
      description: 'Durable and highly accurate pocket measuring tapes for everyday use.',
      category: 'Measuring Tapes',
      imageUrl: '/images/Pocket-Tape.png'
    },
    {
      title: 'Fibreglass Measuring Tape',
      description: 'Heavy duty fibreglass tape for long distance measuring.',
      category: 'Measuring Tapes',
      imageUrl: '/images/Fibreglass-2.png'
    },
    {
      title: 'Steel Long Tape',
      description: 'Professional grade steel tape for construction.',
      category: 'Measuring Tapes',
      imageUrl: '/images/Steel-Long-tape-1.png'
    },
    {
      title: 'Spirit Levels',
      description: 'High precision spirit levels.',
      category: 'Spirit Levels',
      imageUrl: '/images/spirit-levels-2.png'
    },
    {
      title: 'Measuring Wheels',
      description: 'Accurate distance measuring wheels.',
      category: 'Measuring Wheels',
      imageUrl: '/images/Measuring-Wheels-3.png'
    }
  ];

  const pages = [
    { slug: 'about', title: 'About Us', content: '<p>FMI Limited is the pioneer and the largest manufacturer of measuring tapes, spirit levels and measuring wheels in the Indian sub-continent.</p>' },
    { slug: 'news', title: 'News & Events', content: '<p>Stay updated with our latest news and events.</p>' },
    { slug: 'faq', title: 'Frequently Asked Questions', content: '<p>Have questions? Find answers here.</p>' },
    { slug: 'careers', title: 'Careers', content: '<p>Join our team of dedicated professionals.</p>' },
    { slug: 'contact', title: 'Contact Us', content: '<p>Get in touch with us at our corporate office.</p>' }
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  for (const page of pages) {
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: page,
      create: page
    });
  }

  console.log('Database seeded with original Freemans products and dynamic pages!');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

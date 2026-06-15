import React from 'react';
import './category.css';
import allCategoriesData from '../all-categories-data.json';

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // @ts-ignore
  const categoryData = allCategoriesData[slug];

  if (!categoryData) {
    return <div className="container" style={{padding: '50px 0'}}><h1>Category not found</h1></div>;
  }

  return (
    <div className="product-category-page">
      <div 
        className="inner-header" 
        style={{ 
          backgroundImage: `url(${categoryData.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          position: 'relative',
          marginBottom: '40px'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)' }}></div>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', position: 'relative', zIndex: 2 }}>
          <div className="inner-header-wrap" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: 700, margin: '0 0 10px 0', textTransform: 'uppercase' }}>{categoryData.title}</h1>
            <div className="breadcrumb" style={{ color: '#fff', fontSize: '14px' }}>
              <span className="item-home"><a style={{ color: '#fff', textDecoration: 'none' }} href="/">Home</a></span>
              <span style={{ margin: '0 10px' }}>»</span>
              <span className="item-cat"><a style={{ color: '#fff', textDecoration: 'none' }} href="/products/">Products</a></span>
              <span style={{ margin: '0 10px' }}>»</span>
              <span className="item-current"><strong>{categoryData.title}</strong></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', display: 'flex', gap: '30px' }}>
        <div className="filter-outer" style={{ width: '25%' }}>
          <div className="filter-wrap">
            <div className="filter-cat" style={{ background: '#e11b22', color: '#fff', padding: '15px 20px', fontSize: '16px', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Filter <span>+</span>
            </div>
            <div className="filter-list" style={{ border: '1px solid #eee', padding: '20px', borderTop: 'none' }}>
              <div className="filter-list-title" style={{ fontSize: '18px', fontWeight: 600, marginBottom: '15px', color: '#333' }}>Category</div>
              <ul id="filter" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {categoryData.sidebarLinks && categoryData.sidebarLinks.map((link: any, i: number) => (
                  <li key={i} style={{ marginBottom: '10px' }}>
                    <a href={link.href} style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }}>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="page-wrap" style={{ width: '75%' }}>
          {categoryData.introText && (
            <div style={{ marginBottom: '40px', color: '#555', lineHeight: '1.8', fontSize: '15px' }}>
              <p>{categoryData.introText}</p>
            </div>
          )}

          <div className="prod-wrap">
            <div className="prod-items-wrap">
              {categoryData.products && categoryData.products.map((prod: any, idx: number) => (
                <div className="prod-item" key={idx}>
                  <div className="prod-inner">
                    <div className="prod-info">
                      <a href={prod.link || "#"}>
                        <img src={prod.img} alt={prod.title} />
                        <div className="prod-bottom">
                          <span className="prod-name">{prod.title}</span>
                        </div>
                      </a>
                    </div>
                    <div className="prod-overlay" dangerouslySetInnerHTML={{ __html: prod.overlayHtml }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

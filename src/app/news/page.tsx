import React from 'react';
import './news.css';
import newsData from './news-data.json';

export default function NewsAndPressPage() {
  return (
    <div className="news-and-press-page">
      <div 
        className="inner-header" 
        style={{ 
          backgroundImage: 'url(https://www.freemansgroup.com/wp-content/themes/freemans/images/inner-header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)' }}></div>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', position: 'relative', zIndex: 2 }}>
          <div className="inner-header-wrap" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: 700, margin: '0 0 10px 0', textTransform: 'uppercase' }}>News & Press Releases</h1>
            <div className="breadcrumb" style={{ color: '#fff', fontSize: '14px' }}>
              <span className="item-home"><a style={{ color: '#fff', textDecoration: 'none' }} href="/">Home</a></span>
              <span style={{ margin: '0 10px' }}>»</span>
              <span className="item-current"><strong>News & Press Releases</strong></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="company-about">
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <ul>
            {newsData.map((yearGroup: any, idx: number) => (
              <div key={idx} style={{ marginBottom: '40px' }}>
                <h2 className="title">{yearGroup.year}</h2>
                <ul className="news-wrapper">
                  {yearGroup.items.map((item: any, j: number) => (
                    <li key={j}>
                      <div className="image-container">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <span className="date">{item.date}</span>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="news_title">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import './careers.css';

export default function CareersPage() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById('apply-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="careers-page">
      <div 
        className="inner-header" 
        style={{ 
          backgroundImage: 'url(https://www.freemansgroup.com/wp-content/themes/freemans/images/inner-header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          position: 'relative',
          marginBottom: '60px'
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)' }}></div>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', position: 'relative', zIndex: 2 }}>
          <div className="inner-header-wrap" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: 700, margin: '0 0 10px 0', textTransform: 'uppercase' }}>Careers</h1>
            <div className="breadcrumb" style={{ color: '#fff', fontSize: '14px' }}>
              <span className="item-home"><a style={{ color: '#fff', textDecoration: 'none' }} href="/">Home</a></span>
              <span style={{ margin: '0 10px' }}>»</span>
              <span className="item-current"><strong>Careers</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="page-layout" style={{ display: 'flex', gap: '50px' }}>
          
          <div className="left-content" style={{ flex: '1 1 60%' }}>
            <h3 className="sec-title">Why Choose Us</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <div className="benefit-content">
                  <h4>Join a Flagship Brand</h4>
                  <p>FREEMANS has recently been recognised as the undisputed leader in India’s measuring tools industry, with the SUPERBRANDS accolade.</p>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <div className="benefit-content">
                  <h4>Tremendous Growth Potential</h4>
                  <p>We are excited about the future, and see unlimited possibilities in terms of the number of products we could launch and verticals we could grow into. The potential of what could be, and what you could help us achieve, provides a great opportunity.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <div className="benefit-content">
                  <h4>Excellent Working Environment</h4>
                  <p>A healthy working environment where our employees’ voice and ideas are valued, is something we strive to maintain across our organisation.</p>
                </div>
              </div>
            </div>

            <h3 className="sec-title">Current Openings</h3>
            <div className="openings-list">
              <div className="opening-item">
                <div className="opening-title">1. Senior Executive - Sales & Marketing</div>
                <a href="#apply-form" onClick={scrollToForm} className="apply-btn">Apply Now</a>
              </div>
              <div className="opening-item">
                <div className="opening-title">2. Assistant Manager - Human Resources</div>
                <a href="#apply-form" onClick={scrollToForm} className="apply-btn">Apply Now</a>
              </div>
              <div className="opening-item">
                <div className="opening-title">3. Quality Assurance Engineer</div>
                <a href="#apply-form" onClick={scrollToForm} className="apply-btn">Apply Now</a>
              </div>
            </div>
          </div>

          <div className="right-sidebar" style={{ flex: '1 1 40%' }} id="apply-form">
            <h3 className="sec-title">Drop Your CV here</h3>
            <div className="form-area">
              <form onSubmit={(e) => { e.preventDefault(); alert('Application Submitted Successfully!'); }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>First Name*</label>
                    <input type="text" required placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name*</label>
                    <input type="text" required placeholder="Doe" />
                  </div>
                  <div className="form-group full-width">
                    <label>Email*</label>
                    <input type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group full-width">
                    <label>Contact no*</label>
                    <input type="tel" required placeholder="+91 9876543210" />
                  </div>
                  <div className="form-group full-width">
                    <label>City</label>
                    <input type="text" placeholder="Your City" />
                  </div>
                  <div className="form-group full-width">
                    <label>State</label>
                    <input type="text" placeholder="Your State" />
                  </div>
                  <div className="form-group full-width">
                    <label>Upload Resume (PDF/DOC)*</label>
                    <input type="file" required accept=".pdf,.doc,.docx" />
                  </div>
                  <div className="form-group full-width">
                    <button type="submit" className="submit-btn">Submit Application</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

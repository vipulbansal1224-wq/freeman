"use client";

import React, { useState } from 'react';
import './contact.css';

export default function ContactPage() {
  const [formType, setFormType] = useState('enquiry');

  return (
    <div className="contact-page">
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
            <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: 700, margin: '0 0 10px 0', textTransform: 'uppercase' }}>Contact Us</h1>
            <div className="breadcrumb" style={{ color: '#fff', fontSize: '14px' }}>
              <span className="item-home"><a style={{ color: '#fff', textDecoration: 'none' }} href="/">Home</a></span>
              <span style={{ margin: '0 10px' }}>»</span>
              <span className="item-current"><strong>Contact Us</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="page-layout" style={{ display: 'flex', gap: '50px' }}>
          
          <div className="left-content" style={{ flex: '1 1 45%' }}>
            <h3 className="sec-title">Our Offices</h3>
            
            <div className="locations-list">
              <div className="location-card">
                <h4>Sales Office</h4>
                <div className="contact-detail-row">
                  <span className="detail-icon">📍</span>
                  <p className="detail-text">FMI Limited<br/>8-005, 8-006 and 8-007, 8th Floor, Emaar Capital Tower No. 1, MG Road Gurugram – 122002 (Sector 26) Haryana. India.</p>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">✉️</span>
                  <p className="detail-text"><a href="mailto:customercare@freemansgroup.com">customercare@freemansgroup.com</a></p>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">📞</span>
                  <p className="detail-text"><a href="tel:+911244185950">+91-124-418-5950</a></p>
                </div>
              </div>

              <div className="location-card">
                <h4>Unit 1 (Manufacturing)</h4>
                <div className="contact-detail-row">
                  <span className="detail-icon">📍</span>
                  <p className="detail-text">FMI Limited (FREEMANS)<br/>G.T. Road, Doraha<br/>Ludhiana-141421 Punjab, India</p>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">✉️</span>
                  <p className="detail-text"><a href="mailto:customercare@freemansgroup.com">customercare@freemansgroup.com</a></p>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">📞</span>
                  <p className="detail-text"><a href="tel:+911244185950">+91-124-418-5950</a></p>
                </div>
              </div>

              <div className="location-card">
                <h4>Unit 2 (Warehouse)</h4>
                <div className="contact-detail-row">
                  <span className="detail-icon">📍</span>
                  <p className="detail-text">FMI Limited (FREEMANS)<br/>Naurangpur Road, 45th Mile stone<br/>Delhi-Jaipur Highway Gurgaon-122001 Haryana, India</p>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">✉️</span>
                  <p className="detail-text"><a href="mailto:customercare@freemansgroup.com">customercare@freemansgroup.com</a></p>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">📞</span>
                  <p className="detail-text"><a href="tel:+911244185950">+91-124-418-5950</a></p>
                </div>
              </div>

              <div className="location-card">
                <h4>Unit 3 (Manufacturing 2)</h4>
                <div className="contact-detail-row">
                  <span className="detail-icon">📍</span>
                  <p className="detail-text">FMI Limited (FREEMANS)<br/>25B-9B-5B, Khata No. 164/200<br/>Village Bowani Ludhiana-141416 Punjab, India</p>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">✉️</span>
                  <p className="detail-text"><a href="mailto:customercare@freemansgroup.com">customercare@freemansgroup.com</a></p>
                </div>
                <div className="contact-detail-row">
                  <span className="detail-icon">📞</span>
                  <p className="detail-text"><a href="tel:+911244185950">+91-124-418-5950</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-sidebar" style={{ flex: '1 1 55%' }}>
            <h3 className="sec-title">Get In Touch</h3>
            <div className="form-area">
              <div className="form-tabs">
                <div 
                  className={`form-tab ${formType === 'enquiry' ? 'active' : ''}`}
                  onClick={() => setFormType('enquiry')}
                >
                  ENQUIRY
                </div>
                <div 
                  className={`form-tab ${formType === 'complaint' ? 'active' : ''}`}
                  onClick={() => setFormType('complaint')}
                >
                  COMPLAINT
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert('Form Submitted Successfully!'); }}>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>Name</label>
                    <input type="text" required placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label>Company</label>
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" required placeholder="your@email.com" />
                  </div>
                  <div className="form-group full-width">
                    <label>Phone</label>
                    <input type="tel" required placeholder="+91" />
                  </div>
                  <div className="form-group full-width">
                    <label>Street</label>
                    <input type="text" placeholder="Street Address" />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" placeholder="City" />
                  </div>
                  <div className="form-group">
                    <label>State/Province</label>
                    <input type="text" placeholder="State" />
                  </div>
                  <div className="form-group">
                    <label>Zip</label>
                    <input type="text" placeholder="Zip Code" />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input type="text" placeholder="Country" />
                  </div>
                  <div className="form-group full-width">
                    <label>Description</label>
                    <textarea placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="form-group full-width">
                    <button type="submit" className="submit-btn">Submit {formType === 'enquiry' ? 'Enquiry' : 'Complaint'}</button>
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

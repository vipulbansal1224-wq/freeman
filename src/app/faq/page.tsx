"use client";

import React, { useState, useRef, useEffect } from 'react';
import './faq.css';
import faqData from './faq-data.json';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="faq-sub-item">
      <button 
        type="button" 
        className="faq-sub-toggle" 
        aria-expanded={isOpen} 
        onClick={toggleOpen}
      >
        <span className="faq-sub-question">{question}</span>
        <span className="faq-sub-icon" aria-hidden="true"></span>
      </button>

      <div 
        className="faq-sub-answer" 
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <div 
          className="faq-sub-answer-inner" 
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </article>
  );
};

export default function FAQPage() {
  return (
    <div className="faq-page">
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
            <h1 style={{ fontSize: '40px', color: '#fff', fontWeight: 700, margin: '0 0 10px 0', textTransform: 'uppercase' }}>Frequently Asked Questions</h1>
            <div className="breadcrumb" style={{ color: '#fff', fontSize: '14px' }}>
              <span className="item-home"><a style={{ color: '#fff', textDecoration: 'none' }} href="/">Home</a></span>
              <span style={{ margin: '0 10px' }}>»</span>
              <span className="item-current"><strong>FAQ</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="faq-shell">
          <div className="faq-hero">
            <h3 className="sec-title">Find Answers Fast</h3>
          </div>
          
          <div className="faq-categories">
            {faqData.map((category: any, idx: number) => (
              <section className="faq-category-item" key={idx}>
                <div className="faq-category-header">
                  <h4 className="faq-category-title">{category.categoryTitle}</h4>
                </div>
                <div className="faq-category-content">
                  {category.faqs.map((faq: any, j: number) => (
                    <FaqItem key={j} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

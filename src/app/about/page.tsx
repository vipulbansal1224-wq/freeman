"use client";
import React, { useState } from "react";
import "./about.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Controller, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

const GlobeComponent = dynamic(() => import("./GlobeComponent"), {
  ssr: false,
});

export default function AboutPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const historyData = [
    {
      year: "1950",
      img: "/images/about/1950_Company-Founded-3-yw0ik67e8g51e2bb6augao.jpg",
      title: "From humble beginnings in 1950 to a SUPERBRAND in 2023",
      desc: "Our company was founded in 1950 by Mr. Madan Mohan Nayar, when he started manufacturing metal wired measuring tapes by hand in his garage. This marked the start of the journey, one which has seen us transition from selling measuring tapes door to door on bicycles to becoming the largest manufacturer of measuring tapes, measuring wheels and spirit levels in the Indian sub-continent.",
    },
    {
      year: "1960",
      img: "/images/about/story-image-3-yw0ipw9q8a9v5mh2uy1se8.jpg",
      title: "First factory built",
      desc: "Our first FREEMANS factory was built in 1960 at Ferozepur road, Ludhiana in the state of Punjab, India. The factory employed 35 workers and had a production capacity of over 100 metal wired measuring tapes per day.",
    },
    {
      year: "1962",
      img: "/images/about/First-Fibreglass-tape-2-yw0gjfoa708of2is5pxtds.jpg",
      title: "Launch of fibreglass measuring tapes",
      desc: "The FREEMANS product portfolio expanded to include fibreglass measuring tapes in 1962. Today, we are one of the largest manufacturers of fibreglass measuring tapes in the world, with a production capacity of more than 15,000 tapes per day. Our product range includes a wide variety of closed reel and open reel fibreglass measuring tapes, ranging in size from 5m to 100m.",
    },
    {
      year: "1965",
      img: "/images/about/1965_First-Steel-Tape-3-yw0ijxerbytuuo2a7nwjy8.jpg",
      title: "Launch of long steel and pocket measuring tapes",
      desc: "In 1965, we imported our first long steel measuring tape printing machine from Rabone Chesterman, USA. Today, long steel measuring tapes form an integral part of our product portfolio, ranging in size from 5m to 100m, in both 9.5mm and 13mm widths.",
    },
    {
      year: "1967",
      img: "/images/about/5export-yw0g58a5g6w9dmiii3h5a8.jpg",
      title: "5 export customers",
      desc: "By 1967, we achieved our initial, modest target of 5 happy and satisfied export customers.",
    },
    {
      year: "1990",
      img: "/images/about/Starting-in-house-injection-moulding-3-yw0gj9e44dl9gn76wep14w.jpg",
      title: "Started in-house injection moulding for measuring tape components",
      desc: "Our backward vertical integration journey started in 1990, with the purchase of two hand moulding machines. Our injection moulding department has developed into a large facility of 31 fully automatic injection moulding machines today. All plastic components of measuring tapes, measuring wheels and spirit levels are now manufactured in-house, enabling better quality control and shorter lead times.",
    },
    {
      year: "1994",
      img: "/images/about/Starting-inhouse-treatment-of-steel-3-yw0gj4d6go9qapcbhrasxs.jpg",
      title: "Starting in-house heat treatment of steel, using German technology",
      desc: "In 1994, we took another big step in our backward vertical integration journey with the purchase of slitting and heat treatment machines from Germany. Over the years, our heat treatment department has grown and we now have six heat treatment lines for the hardening and tempering of cold rolled steel strips.",
    },
    {
      year: "2002",
      img: "/images/about/IntroductiontoSL-3-yw0gizc8syy74rhg33wkqo.jpg",
      title: "Launch of spirit levels",
      desc: "In 2002, we established India's first and only spirit levels manufacturing facility in Gurgaon, India. FMI Limited is one of the most vertically integrated spirit level manufacturers in the world, with in-house cutting, punching and powder coating operations. We manufacture more than 3,000 spirit levels per day.",
    },
    {
      year: "2014",
      img: "/images/about/CE-3-yw0iiugih9lhbmo0t4laf4.png",
      title: "CE Certification",
      desc: "Increasing interest from European wholesalers and retail chain stores spurred us to successfully apply for CE (MID) certification for our pocket, long steel and fibreglass measuring tapes in 2014. This certification has been instrumental in driving our export growth in the subsequent years.",
    },
    {
      year: "2015",
      img: "/images/about/Vertical-Integration-through-Purchase-of-cold-rolling-mill-1-yw0givkjk6yjrb3aj4cwlc.jpg",
      title: "Vertical integration via purchase of cold rolling mill",
      desc: "In 2015, we continued on our vertical integration journey with the installation of a cold rolling mill in our Doraha manufacturing facility. This strategic decision has helped us shorten our supply chain and increase our cost competitiveness vis-a-vis competitors.",
    },
    {
      year: "2018",
      img: "/images/about/Daily-Production-of-100-1-yw0giqjlwhn0ld8f4gyoe8.jpg",
      title: "Daily production of 100,000+ measuring tapes",
      desc: "2018 was a landmark year for us, as it saw us surpass our long term ambition of manufacturing more than 100,000 measuring tapes per day.",
    },
    {
      year: "2023",
      img: "/images/about/Super-Brand-10xmkj3xgk35bg9i3rq2osg.jpg",
      title: "FREEMANS THE Superbrand for 2023-24",
      desc: "FREEMANS is awarded the Superbrands seal of excellence in 2023! We are proud to attain recognition as an undisputed leader in the Measuring Tools category.",
    },
    {
      year: "2025",
      img: "/images/about/75-year-Log-10xmkdp68akzft2isr1id4w.png",
      title: "FREEMANS celebrates 75 years of Manufacturing Excellence",
      desc: "FREEMANS has been voted a Superbrand for the second year in a row—a recognition that underscores our unwavering commitment to quality, precision, and innovation. In 2025, as we celebrate 75 years of Manufacturing Excellence, this honour further motivates us to continue delivering world-class products that meet the highest standards.",
    },
  ];

  return (
    <main>
      {/* 1. Inner Header */}
      <div
        className="inner-header"
        style={{ backgroundImage: "url(/images/about/inner-header.jpg)" }}
      >
        <div className="container">
          <div className="inner-header-wrap">
            <h1>About Us</h1>
          </div>
        </div>
      </div>

      <div className="page-wrap">
        {/* 2. Company About Section */}
        <div className="company-about">
          <div className="container">
            <h3 className="sec-title">Our Company</h3>
            <div className="comp-about-content">
              <p>
                Founded in 1950, FMI Limited is the largest manufacturer of measuring tapes, spirit levels and measuring wheels in the Indian sub-continent. We are a highly vertically integrated measuring tape manufacturing company, with state-of-the-art in-house injection moulding and steel cold rolling facilities. In 2018, we achieved our long-term ambition of manufacturing more than 150,000 high quality measuring tapes per day. The FREEMANS product portfolio now extends beyond linear measurement tools to encompass a wide range of hand tools, precision measuring tools, digital measuring tools and power tool accessories. We are proud to announce that FREEMANS has been voted a <strong>Superbrand</strong> for two consecutive years in 2023 and in 2025. This prestigious accolade reflects the trust and loyalty of our customers, reaffirming our position as a leader in Measuring Tools.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Our History */}
        <div className="company-story" id="history">
          <div className="container">
            <h3 className="sec-title">Our History</h3>
            <div className="story-slider-wrap">
              <div className="story-year-slider">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  slidesPerView={"auto"}
                  watchSlidesProgress={true}
                  modules={[Thumbs]}
                  breakpoints={{
                    320: { slidesPerView: 3 },
                    768: { slidesPerView: 6 },
                    1024: { slidesPerView: 13 },
                  }}
                >
                  {historyData.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="story-year-item">
                        <span>{item.year}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="story-content-slider">
                  <Swiper
                    modules={[Thumbs, Controller, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    thumbs={{ swiper: thumbsSwiper }}
                    slidesPerView={1}
                  >
                  {historyData.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="story-cont-item">
                        <div className="story-cont-left">
                          <div className="story-cont-image">
                            <img src={item.img} alt={item.title} />
                          </div>
                        </div>
                        <div className="story-cont-right">
                          <div className="story-cont-year">{item.year}</div>
                          <h3 className="story-cont-title">{item.title}</h3>
                          <div className="story-cont-desc">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Competitive Advantages */}
        <div className="advantages-sec" id="advantages">
          <div className="container">
            <h3 className="sec-title">Competitive Advantages</h3>
            <div className="adv-items-wrap">
              <div className="adv-item">
                <div className="adv-item-inner">
                  <div className="adv-item-icon">
                    <img src="/images/about/about-us-3.png" alt="Vertically Integrated" />
                  </div>
                  <div className="adv-item-content">
                    <h4>VERTICALLY INTEGRATED</h4>
                    <ul>
                      <li>In-house cold rolling mill</li>
                      <li>31 injection moulding machines, all plastic components manufactured in-house</li>
                      <li>High degree of quality control</li>
                      <li>Competitive pricing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="adv-item">
                <div className="adv-item-inner">
                  <div className="adv-item-icon">
                    <img src="/images/about/adv-2-2.png" alt="Local Sourcing" />
                  </div>
                  <div className="adv-item-content">
                    <h4>LOCAL SOURCING</h4>
                    <ul>
                      <li>Locally sourced raw materials and components have helped us build a shorter and more responsive supply chain</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="adv-item">
                <div className="adv-item-inner">
                  <div className="adv-item-icon">
                    <img src="/images/about/adv-3-1.png" alt="Customer Service Focus" />
                  </div>
                  <div className="adv-item-content">
                    <h4>CUSTOMER SERVICE FOCUS</h4>
                    <ul>
                      <li>Our dedicated sales team and cutting edge customer facing technology empower us to provide an exceptional client experience</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="adv-item">
                <div className="adv-item-inner">
                  <div className="adv-item-icon">
                    <img src="/images/about/adv-4-2.png" alt="Commitment to Quality" />
                  </div>
                  <div className="adv-item-content">
                    <h4>COMMITMENT TO QUALITY</h4>
                    <ul>
                      <li>Dedicated engineering staff</li>
                      <li>Quality control lab</li>
                      <li>Quality certifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Global Presence */}
        <div className="globe-section" id="global-presence">
          <div className="container">
            <h3 className="sec-title">Global Presence</h3>
            <p style={{ textAlign: "center", color: "#666" }}>
              Our products are available in, more than 60 countries worldwide.
            </p>
            <div className="globe-wrapper">
              <GlobeComponent />
              <div className="info-txt">Click to Scroll</div>
            </div>
          </div>
        </div>

        {/* 6. Commitment to Quality */}
        <div className="commit-sec" id="quality">
          <div className="container">
            <h3 className="sec-title">COMMITMENT TO QUALITY</h3>
            <div className="commit-top-content">
              <div className="ctc-left">
                <p>
                  Best in class machinery and equipment, an in-house fully equipped quality control laboratory, and a team of 25 quality engineers help us consistently deliver world class quality.
                </p>
              </div>
              <div className="ctc-right">
                <div className="ctc-slider">
                  <Swiper
                    modules={[Autoplay, EffectFade]}
                    slidesPerView={1}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                  >
                    <SwiperSlide>
                      <img src="/images/about/Quality2-3.jpg" alt="Quality Control 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/about/Quality1-3.jpg" alt="Quality Control 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/images/about/Quality3-2.jpg" alt="Quality Control 3" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="commit-bottom-content">
              <div className="cbc-item">
                <img src="/images/about/IQAS.png" alt="IQAS" />
              </div>
              <div className="cbc-item">
                <img src="/images/about/ISI.png" alt="ISI" />
              </div>
              <div className="cbc-item">
                <img src="/images/about/ISO.png" alt="ISO" />
              </div>
              <div className="cbc-item">
                <img src="/images/about/NABL.png" alt="NABL" />
              </div>
              <div className="cbc-item">
                <img src="/images/about/SUPER-BRAND-1.jpg" alt="Super Brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

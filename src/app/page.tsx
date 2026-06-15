import Link from "next/link";
import BannerSlider from "./components/BannerSlider";
import TestimonialsSlider from "./components/TestimonialsSlider";

export default async function Home() {

  return (
    <main>
      <BannerSlider />


      {/* 2. 75+ Years About Section */}
      <section className="about-75-section">
        <div className="container about-grid">
          <div className="about-image-col">
            <img src="/images/sec-about-image-3.jpg" alt="FMI Limited Factory" className="about-main-img" />
            <img src="/images/75plus-Year-new_200x200-1.png" alt="75+ Years" className="about-badge-img" />
          </div>
          <div className="about-text-col">
            <h2 className="red-heading">Pioneer Since 1950</h2>
            <h3>FMI Limited is the pioneer and the largest manufacturer of measuring tapes, spirit levels and measuring wheels in the Indian sub-continent.</h3>
            <p>Our products have been marketed under the FREEMANS brand since 1950 and are manufactured at our state-of-the-art facility in Ludhiana, Punjab. We are an ISO 9001:2015 certified company and our CE MID certified products are exported to over 60 countries.</p>
            <Link href="/about" className="btn-read-more">READ MORE</Link>
          </div>
        </div>
      </section>

      {/* 3. Stats / Features Section */}
      <section className="about-features-section">
        <div className="container">
          <div className="about-features">
            <div className="row">
              <div className="abt-feature-item">
                <div className="abt-feature-icon">
                  <img src="/images/75plus-Year-new_200x200-1.png" alt="75+ Years" width="120" height="120" />
                </div>
                <div className="abt-feature-title"><i>75</i>+</div>
                <div className="abt-feature-desc">Years of Manufacturing Excellence</div>
              </div>
              <div className="abt-feature-item">
                <div className="abt-feature-icon">
                  <img src="/images/icon-02-3.png" alt="150,000+" width="120" height="120" />
                </div>
                <div className="abt-feature-title"><i>150,000</i>+</div>
                <div className="abt-feature-desc">Measuring Tapes<br />Manufactured per Day</div>
              </div>
              <div className="abt-feature-item">
                <div className="abt-feature-icon">
                  <img src="/images/icon-03-1.png" alt="2000+" width="120" height="120" />
                </div>
                <div className="abt-feature-title"><i>2000</i>+</div>
                <div className="abt-feature-desc">Product Portfolio</div>
              </div>
              <div className="abt-feature-item">
                <div className="abt-feature-icon">
                  <img src="/images/icon-01-3.png" alt="60+" width="120" height="120" />
                </div>
                <div className="abt-feature-title"><i>60</i>+</div>
                <div className="abt-feature-desc">Countries Worldwide</div>
              </div>
              <div className="abt-feature-item">
                <div className="abt-feature-icon">
                  <img src="/images/icon-04-3.png" alt="1600" width="120" height="120" />
                </div>
                <div className="abt-feature-title"><i>1,600</i></div>
                <div className="abt-feature-desc">Dedicated Employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tools Grid Section */}
      <section className="tools-grid-section">
        <div className="container">
          <h2 className="section-title">Choose Your Tools</h2>
          <div className="tools-grid">
            <Link href="/products/measuring-tapes" className="tool-box">
              <img src="/images/tools-1-3.jpg" alt="Measuring Tapes" />
              <div className="choose-item-overlay"><h5>Measuring Tapes</h5></div>
            </Link>
            <Link href="/products/measuring-wheels" className="tool-box">
              <img src="/images/Measuring-Wheel-Image-370x310px-2.jpg" alt="Measuring Wheels" />
              <div className="choose-item-overlay"><h5>Measuring Wheels</h5></div>
            </Link>
            <Link href="/products/spirit-levels" className="tool-box">
              <img src="/images/tools-2-3.jpg" alt="Spirit Levels" />
              <div className="choose-item-overlay"><h5>Spirit Levels</h5></div>
            </Link>
            <Link href="/products/test-and-measure-tools" className="tool-box">
              <img src="/images/tools-3-3.jpg" alt="Test & Measure Tools" />
              <div className="choose-item-overlay"><h5>Test And Measure Tools</h5></div>
            </Link>
            <Link href="/products/precision-tools" className="tool-box">
              <img src="/images/PRECISION-TOOLS-1.jpg" alt="Precision Tools" />
              <div className="choose-item-overlay"><h5>Precision Tools</h5></div>
            </Link>
            <Link href="/products/power-tool-accessories" className="tool-box">
              <img src="/images/POWER-TOOL-1.jpg" alt="Power Tool Accessories" />
              <div className="choose-item-overlay"><h5>Power Tool Accessories</h5></div>
            </Link>
            <Link href="/products/hand-tools" className="tool-box">
              <img src="/images/HAND-TOOLS-2.jpg" alt="Hand Tools" />
              <div className="choose-item-overlay"><h5>Hand Tools</h5></div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <TestimonialsSlider />

    </main>
  );
}

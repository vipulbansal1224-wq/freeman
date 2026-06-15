import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="footer-tape-animation"></div>
      <footer id="colophon" className="site-footer">
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            {/* Company */}
            <div className="fw-item">
              <h4 className="widget-title">Company</h4>
              <ul className="menu">
                <li><Link href="/about#history">Our History</Link></li>
                <li><Link href="/about#advantages">Competitive Advantages</Link></li>
                <li><Link href="/about#global-presence">Global Presence</Link></li>
                <li><Link href="/about#quality">Commitment to Quality</Link></li>
                <li><Link href="/sports-sponsorships">Sponsorships &amp; Partnerships</Link></li>
                <li><Link href="/corporate-social-responsibility">CSR</Link></li>
                <li><Link href="/investors-desk">Investor's Desk</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>

            {/* Product Categories */}
            <div className="fw-item fw-cats">
              <h4 className="widget-title">Product Categories</h4>
              <ul className="menu">
                <li><Link href="/product-category/measuring-tapes">Measuring Tapes</Link></li>
                <li><Link href="/product-category/spirit-levels">Spirit Levels</Link></li>
                <li><Link href="/product-category/measuring-wheels">Measuring Wheels</Link></li>
                <li><Link href="/product-category/test-and-measure-tools">Test And Measure Tools</Link></li>
                <li><Link href="/product-category/precision-tools">Precision Tools</Link></li>
                <li><Link href="/product-category/hand-tools">Hand Tools</Link></li>
                <li><Link href="/product-category/power-tool-accessories">Power Tool Accessories</Link></li>
              </ul>
            </div>

            {/* Sales Office */}
            <div className="fw-item fw-address">
              <h4 className="widget-title">Sales Office</h4>
              <div className="fw-address-item">
                <span className="fw-icon">
                  <img height="19px" width="15px" src="/images/address-icon-footer.png" alt="Address" />
                </span>
                <p>
                  FMI Limited<br />
                  <span>8-005, 8-006 and 8-007, 8th Floor</span>, Emaar Capital Tower No. 1,<br />
                  MG Road Gurugram – 122002 (Sector 26) Haryana. India
                </p>
              </div>
              <div className="fw-address-item">
                <span className="fw-icon">
                  <img height="14px" width="16px" src="/images/email-icon-footer.png" alt="Email" />
                </span>
                <p><a href="mailto:sales@freemansgroup.com">sales@freemansgroup.com</a></p>
              </div>
              <div className="fw-address-item">
                <span className="fw-icon">
                  <img height="17px" width="17px" src="/images/phone-icon-footer.png" alt="Phone" />
                </span>
                <p>+91-124-418-5950</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <div className="container">
          <a href="https://www.facebook.com/Freemans_FMI-104249888012770" target="_blank" rel="noreferrer">
            <img height="20px" width="12px" src="/images/fb-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/freemans-fmi/" target="_blank" rel="noreferrer">
            <img height="20px" width="20px" src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/freemans_fmi/" target="_blank" rel="noreferrer">
            <img height="20px" width="20px" src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/channel/UCB_FI2-xuEX8zO8skT-X-Ag" target="_blank" rel="noreferrer">
            <img height="15px" width="20px" src="/images/yt-icon.png" alt="YouTube" />
          </a>
        </div>
      </div>

      <div className="footer-copy">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 copy-text">
              &copy; {new Date().getFullYear()} <a href="/">FMI Limited</a>. All Rights Reserved.
            </div>
            <div className="col-sm-4 footer-logo">
              <img height="30px" width="163px" src="/images/logo-footer.png" alt="FMI Logo" />
            </div>
            <div className="col-sm-4 footer-right">
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

import Link from "next/link";
import "./products.css";

const categories = [
  {
    title: "Measuring Tapes",
    link: "/products/measuring-tapes",
    img: "/images/tools-1-3.jpg"
  },
  {
    title: "Measuring Wheels",
    link: "/products/measuring-wheels",
    img: "/images/Measuring-Wheel-Image-370x310px-2.jpg"
  },
  {
    "title": "Spirit Levels",
    "link": "/products/spirit-levels",
    "img": "/images/tools-2-3.jpg"
  },
  {
    "title": "Test & Measure Tools",
    "link": "/products/test-and-measure-tools",
    "img": "/images/tools-3-3.jpg"
  },
  {
    "title": "Precision Tools",
    "link": "/products/precision-tools",
    "img": "/images/PRECISION-TOOLS-1.jpg"
  },
  {
    "title": "Power Tool Accessories",
    "link": "/products/power-tool-accessories",
    "img": "/images/POWER-TOOL-1.jpg"
  },
  {
    "title": "Hand Tools",
    "link": "/products/hand-tools",
    "img": "/images/HAND-TOOLS-2.jpg"
  }
];

export default function ProductsPage() {
  return (
    <main>
      {/* Banner */}
      <section className="inner-header" style={{ backgroundImage: "url(/images/about-banner-1.jpg)" }}>
        <div className="container">
          <div className="inner-header-wrap">
            <h1>Product Categories</h1>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="product-page-wrap">
        <div className="container">
          <div className="product-cat-list">
            {categories.map((cat, idx) => (
              <div key={idx} className="product-cat-item">
                <Link href={cat.link}>
                  <img src={cat.img} alt={cat.title} />
                  <div className="product-cat-title">
                    <h4>{cat.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

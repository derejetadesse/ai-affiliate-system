const products = [
  {
    slug: "chair",
    name: "Ergonomic Chair",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1000&q=80",
    description: "Comfortable office chair for long work hours and better posture.",
    tag: "Best Seller",
  },
  {
    slug: "laptop-stand",
    name: "Laptop Stand",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1000&q=80",
    description: "Adjustable stand for airflow, posture, and cleaner desk setup.",
    tag: "Top Pick",
  },
  {
    slug: "keyboard",
    name: "Wireless Keyboard",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1000&q=80",
    description: "Slim wireless keyboard for productivity and everyday comfort.",
    tag: "Popular",
  },
];

export default function ReviewsPage() {
  return (
    <main style={{ background: "#f3f4f6", minHeight: "100vh" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #111827, #1f2937)",
          color: "white",
          padding: "70px 20px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#fbbf24",
            }}
          >
            Trusted Product Picks
          </p>

          <h1
            style={{
              fontSize: "48px",
              margin: "16px 0 14px",
              lineHeight: 1.1,
              fontWeight: 800,
            }}
          >
            Best Product Reviews
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#d1d5db",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Discover practical, affordable products for comfort, productivity,
            and a better workspace setup.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px 70px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {products.map((p) => (
            <div
              key={p.slug}
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #e5e7eb",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "240px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "#f59e0b",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "7px 10px",
                    borderRadius: "999px",
                  }}
                >
                  {p.tag}
                </span>
              </div>

              <div style={{ padding: "22px" }}>
                <h2
                  style={{
                    margin: "0 0 10px",
                    fontSize: "24px",
                    color: "#111827",
                  }}
                >
                  {p.name}
                </h2>

                <p
                  style={{
                    margin: "0 0 12px",
                    color: "#2563eb",
                    fontWeight: 800,
                    fontSize: "24px",
                  }}
                >
                  {p.price}
                </p>

                <p
                  style={{
                    margin: "0 0 20px",
                    color: "#4b5563",
                    lineHeight: 1.7,
                    minHeight: "54px",
                  }}
                >
                  {p.description}
                </p>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href={`/reviews/${p.slug}`}
                    style={{
                      display: "inline-block",
                      background: "#f59e0b",
                      color: "#ffffff",
                      padding: "12px 18px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    View Review
                  </a>

                  <a
                    href={`/reviews/${p.slug}`}
                    style={{
                      display: "inline-block",
                      background: "#111827",
                      color: "#ffffff",
                      padding: "12px 18px",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    See Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

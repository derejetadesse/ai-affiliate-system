const products = [
  {
    slug: "chair",
    name: "Ergonomic Chair",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1505843490701-5be5d1b29956?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Comfortable office chair for long work hours.",
  },
  {
    slug: "laptop-stand",
    name: "Laptop Stand",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Adjustable stand for better posture and airflow.",
  },
  {
    slug: "keyboard",
    name: "Wireless Keyboard",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Slim wireless keyboard for home and office use.",
  },
];

export default function ReviewsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Best Product Reviews
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#4b5563",
            fontSize: "18px",
            marginBottom: "40px",
          }}
        >
          Explore our top picks for productivity, comfort, and workspace setup.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.slug}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                border: "1px solid #e5e7eb",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    color: "#111827",
                  }}
                >
                  {product.name}
                </h2>

                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#2563eb",
                    marginBottom: "10px",
                  }}
                >
                  {product.price}
                </p>

                <p
                  style={{
                    color: "#4b5563",
                    marginBottom: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  {product.shortDescription}
                </p>

                <a
                  href={`/reviews/${product.slug}`}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#f59e0b",
                    color: "#ffffff",
                    padding: "12px 18px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Review
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

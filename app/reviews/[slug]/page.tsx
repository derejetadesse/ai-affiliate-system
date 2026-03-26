const products: Record<
  string,
  {
    name: string;
    price: string;
    image: string;
    description: string;
    features: string[];
    rating: string;
  }
> = {
  chair: {
  name: "Ergonomic Chair",
  image:
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
  description:
    "This ergonomic chair is designed for comfort during long working hours. It supports posture, improves everyday comfort, and works well for home office setups.",
  features: [
    "Comfort-focused design",
    "Modern workspace style",
    "Good for long sitting sessions",
    "Simple home office upgrade",
  ],
},
    rating: "4.7/5",
  },
  "laptop-stand": {
    name: "Laptop Stand",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80",
    description:
      "A practical laptop stand that improves screen height, supports better posture, and helps create a cleaner desk setup.",
    features: [
      "Helps reduce neck strain",
      "Improves desk organization",
      "Lightweight design",
      "Good value for the price",
    ],
    rating: "4.6/5",
  },
  keyboard: {
    name: "Wireless Keyboard",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
    description:
      "A sleek wireless keyboard made for productive work, clean desk aesthetics, and everyday convenience.",
    features: [
      "Slim and modern design",
      "Comfortable typing feel",
      "Good for office or home",
      "Pairs well with minimalist setups",
    ],
    rating: "4.5/5",
  },
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) {
    return (
      <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
        <h1>Product not found</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "40px 20px 70px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#f59e0b",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            Featured Review
          </p>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.1,
              margin: "12px 0 16px",
              color: "#111827",
            }}
          >
            {product.name}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "18px",
            }}
          >
            <span
              style={{
                fontSize: "30px",
                fontWeight: 800,
                color: "#2563eb",
              }}
            >
              {product.price}
            </span>

            <span
              style={{
                background: "#ecfdf5",
                color: "#065f46",
                padding: "7px 12px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Rating: {product.rating}
            </span>
          </div>

          <p
            style={{
              color: "#4b5563",
              fontSize: "17px",
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              padding: "18px",
              marginBottom: "26px",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "12px", color: "#111827" }}>
              Why people like it
            </h3>

            <ul style={{ margin: 0, paddingLeft: "20px", color: "#374151", lineHeight: 1.8 }}>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                background: "#f59e0b",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Buy on Amazon
            </a>

            <a
              href="/reviews"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                background: "#111827",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Back to Reviews
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

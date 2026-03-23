const products: Record<
  string,
  {
    name: string;
    price: string;
    image: string;
    description: string;
  }
> = {
  chair: {
    name: "Ergonomic Chair",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80",
    description:
      "This ergonomic chair is designed for comfort during long working hours.",
  },
  "laptop-stand": {
    name: "Laptop Stand",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80",
    description:
      "Adjustable laptop stand to improve posture and reduce neck strain.",
  },
  keyboard: {
    name: "Wireless Keyboard",
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
    description:
      "Slim wireless keyboard for productivity and clean desk setup.",
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
        <p>Slug: {slug}</p>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "18px",
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
            height: "420px",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div style={{ padding: "30px" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#2563eb",
              marginBottom: "20px",
            }}
          >
            {product.price}
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#374151",
              marginBottom: "24px",
            }}
          >
            {product.description}
          </p>

          <a
            href="https://amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 20px",
              background: "orange",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </main>
  );
}

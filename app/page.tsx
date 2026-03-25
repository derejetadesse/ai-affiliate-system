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

export default function HomePage() {
  return (
    <main
      style={{
        fontFamily:
          'Inter, Arial, sans-serif',
        background:
          "linear-gradient(180deg, #f8fafc 0%, #eef2ff 45%, #f8fafc 100%)",
        minHeight: "100vh",
        color: "#0f172a",
      }}
    >
      <section
        style={{
          padding: "72px 20px 36px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(245, 158, 11, 0.12)",
              color: "#b45309",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.3px",
              marginBottom: "18px",
            }}
          >
            Premium Workspace Pick
          </span>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 62px)",
              lineHeight: 1.05,
              margin: "0 0 16px",
              fontWeight: 800,
              letterSpacing: "-1.5px",
            }}
          >
            Upgrade Your Desk Setup
            <br />
            With a Smarter Ergonomic Chair
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#475569",
            }}
          >
            A cleaner, more comfortable seating upgrade for long work hours,
            home offices, and focused productivity.
          </p>
        </div>
      </section>

      <section style={{ padding: "20px 20px 80px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "28px",
              padding: "24px",
              boxShadow: "0 20px 60px rgba(15, 23, 42, 0.10)",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "22px",
                overflow: "hidden",
                background: "#ffffff",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "#111827",
                  color: "#ffffff",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                Best Seller
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "#f59e0b",
                  color: "#ffffff",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                {product.discount}
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 14px",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "999px",
                boxShadow: "0 8px 20px rgba(15, 23, 42, 0.06)",
                marginBottom: "18px",
              }}
            >
              <span style={{ color: "#f59e0b", fontSize: "15px" }}>★★★★★</span>
              <span style={{ fontSize: "14px", color: "#475569", fontWeight: 600 }}>
                {product.rating} rating · {product.reviews} reviews
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 44px)",
                lineHeight: 1.15,
                margin: "0 0 18px",
                fontWeight: 800,
                letterSpacing: "-1px",
              }}
            >
              {product.name}
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#475569",
                margin: "0 0 24px",
                maxWidth: "640px",
              }}
            >
              Built for people who spend long hours at a desk and want a chair
              that feels supportive, breathable, and modern without making the
              workspace look bulky.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#2563eb",
                }}
              >
                {product.price}
              </span>
              <span
                style={{
                  fontSize: "18px",
                  color: "#94a3b8",
                  textDecoration: "line-through",
                }}
              >
                {product.oldPrice}
              </span>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#16a34a",
                }}
              >
                Save {product.discount}
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gap: "12px",
                marginBottom: "30px",
              }}
            >
              {product.features.map((feature) => (
                <div
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid #e2e8f0",
                    borderRadius: "16px",
                    padding: "14px 16px",
                  }}
                >
                  <span
                    style={{
                      color: "#2563eb",
                      fontWeight: 900,
                      marginTop: "1px",
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      color: "#334155",
                      lineHeight: 1.6,
                      fontSize: "15px",
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
              }}
            >
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #f59e0b, #f97316)",
                  color: "#ffffff",
                  padding: "16px 24px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "16px",
                  boxShadow: "0 14px 30px rgba(249, 115, 22, 0.28)",
                }}
              >
                Check Price on Amazon →
              </a>

              <span
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                }}
              >
                Fast way to view current price and details
              </span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 20px 70px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {[
            ["Comfort First", "Designed for long sitting sessions and daily work."],
            ["Clean Modern Look", "Fits home office and productivity desk setups."],
            ["Strong Build", "Supports up to 330 lbs with solid construction."],
            ["Easy Setup", "Quick assembly with included hardware."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                background: "#ffffff",
                borderRadius: "22px",
                padding: "24px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "18px",
                  color: "#0f172a",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  lineHeight: 1.7,
                  fontSize: "15px",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "0 20px 40px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#64748b",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          As an Amazon Associate, we earn from qualifying purchases. Prices and
          availability may change on Amazon at any time.
        </p>
      </footer>
    </main>
  );
}
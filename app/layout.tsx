import "./globals.css";

export const metadata = {
  title: "OurReviews",
  description: "Product reviews and recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f3f4f6" }}>
        <header
          style={{
            background: "#111827",
            color: "white",
            padding: "16px 24px",
            borderBottom: "1px solid #1f2937",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href="/reviews"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "24px",
                fontWeight: 800,
              }}
            >
              Our Reviews
            </a>

            <nav style={{ display: "flex", gap: "18px" }}>
              <a href="/disclosure" style={{ color: "white", textDecoration: "none" }}>
              Disclosure</a>
              <a href="/reviews" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                Reviews
              </a>
              <a href="/about" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                About
              </a>
              <a href="/privacy" style={{ color: "#e5e7eb", textDecoration: "none" }}>
              Privacy
              </a>
              <a href="/contact" style={{ color: "#e5e7eb", textDecoration: "none" }}>
              Contact
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer
          style={{
            background: "#111827",
            color: "#e5e7eb",
            padding: "28px 20px",
            marginTop: "40px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ margin: "0 0 8px" }}>© 2026 Our Reviews</p>
            <p style={{ margin: 0 }}>
              As an Amazon Associate, I earn from qualifying purchases.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

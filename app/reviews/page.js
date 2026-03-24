export default function ReviewsPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px 20px" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>All Reviews</h1>
      <p style={{ fontSize: "18px", color: "#374151", marginBottom: "30px" }}>
        Browse our latest product reviews and recommendations.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        <div style={{ background: "white", borderRadius: "12px", padding: "20px" }}>
          <h2>Ergonomic Chair</h2>
          <a href="/reviews/chair">Read Review</a>
        </div>

        <div style={{ background: "white", borderRadius: "12px", padding: "20px" }}>
          <h2>Laptop Stand</h2>
          <a href="/reviews/laptop-stand">Read Review</a>
        </div>

        <div style={{ background: "white", borderRadius: "12px", padding: "20px" }}>
          <h2>Wireless Keyboard</h2>
          <a href="/reviews/keyboard">Read Review</a>
        </div>
      </div>
    </div>
  );
}
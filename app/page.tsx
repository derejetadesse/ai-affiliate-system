const products = [
  {
    slug: "chair",
    name: "Ergonomic Chair",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Comfortable office chair for long work hours.",
  },
  {
    slug: "laptop-stand",
    name: "Laptop Stand",
    price: "$29",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&q=80",
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
    <main style={{ padding: "40px" }}>
      <h1>Best Product Reviews</h1>

      {products.map((product) => (
        <div key={product.slug} style={{ marginBottom: "20px" }}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <a href={`/reviews/${product.slug}`}>View Review</a>
        </div>
      ))}
    </main>
  );
}

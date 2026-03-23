import Link from "next/link";

const products = [
  { slug: "chair", title: "Ergonomic Chair", price: "$99" },
  { slug: "laptop", title: "Laptop Stand", price: "$29" },
  { slug: "keyboard", title: "Wireless Keyboard", price: "$49" },
];

export default function ReviewsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {products.map((p) => (
        <div key={p.slug} className="mb-4">
          <h2>{p.title}</h2>
          <p>{p.price}</p>
          <Link href={`/reviews/${p.slug}`} className="text-blue-500 underline">
            View Review
          </Link>
        </div>
      ))}
    </main>
  );
}
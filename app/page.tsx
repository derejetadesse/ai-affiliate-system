import Link from "next/link";

const products = [
  {
    slug: "chair",
    name: "Ergonomic Office Chair",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable chair for long work hours.",
  },
  {
    slug: "standing-desk",
    name: "Standing Desk",
    image: "/products/standing-desk.png",
    description: "Adjustable desk with wheels for flexible workspace.",
  },
];

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Top Picks
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.slug}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">
              {product.name}
            </h2>

            <p className="text-gray-600 mb-4">
              {product.description}
            </p>

            <Link
              href={`/reviews/${product.slug}`}
              className="inline-block bg-yellow-400 px-4 py-2 rounded font-semibold"
            >
              View Review
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

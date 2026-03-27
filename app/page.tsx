import Link from "next/link";
<<<<<<< HEAD
=======
import { products } from "../data/products";
>>>>>>> 4920463 (Update products and images)

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
<<<<<<< HEAD
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
=======
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="bg-white shadow-sm px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">
          AI Product Reviews
        </h1>
      </header>

      {/* HERO */}
      <section className="text-center py-12 bg-white border-b">
        <h1 className="text-4xl font-bold mb-4">
          Best Office Setup Products (2026)
        </h1>
        <p className="text-gray-600 text-lg">
          Top-rated chairs and accessories to boost your productivity.
        </p>
      </section>

      {/* MAIN */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-8">🔥 Top Picks</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain"
              />

              <h3 className="text-xl font-semibold mt-4 text-blue-700 hover:underline">
                {product.name}
              </h3>

              {/* ⭐ TRUST SIGNAL */}
              <p className="text-sm text-gray-500 mt-1">
                ⭐ 4.7/5 • 120+ reviews • 200+ bought this month
              </p>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>

              <div className="mt-5 flex gap-3">
                <Link
                  href={`/reviews/${product.slug}`}
                  className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg font-medium text-center"
                >
                  View Review
                </Link>

                <a
                  href={product.link}
                  target="_blank"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-center"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-600">
        <a href="/disclosure" className="text-blue-600 hover:underline">
          Affiliate Disclosure
        </a>
      </footer>

    </div>
>>>>>>> 4920463 (Update products and images)
  );
}
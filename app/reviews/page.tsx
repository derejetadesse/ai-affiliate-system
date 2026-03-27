import Link from "next/link";
import { products } from "../../data/products";

export default function ReviewsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 border-b pb-4">
        Our Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.slug}
            className="border border-gray-300 rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row gap-6 h-full">
              <div className="flex justify-center items-center bg-white w-full md:w-[280px] h-[280px] border rounded-md shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[240px] max-w-[220px] object-contain"
                />
              </div>

              <div className="flex flex-col flex-1">
                <h2 className="text-2xl font-semibold text-blue-700 hover:text-orange-500 leading-snug">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-yellow-500 text-lg">★★★★★</span>
                  <span className="text-sm text-blue-600">124 reviews</span>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  200+ bought in past month
                </p>

                <p className="text-2xl font-bold text-gray-900 mt-4">$89.99</p>

                <p className="text-sm text-gray-500 mt-1">Free delivery</p>

                <p className="text-gray-700 mt-4 leading-7">
                  {product.description}
                </p>

                <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/reviews/${product.slug}`}
                    className="inline-block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-5 py-2 rounded-full"
                  >
                    View Review
                  </Link>

                  <a
                    href="#"
                    className="inline-block text-center bg-orange-400 hover:bg-orange-500 text-black font-medium px-5 py-2 rounded-full"
                  >
                    Check on Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "../../../data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 bg-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-gray-300 rounded-lg p-6 bg-white flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[420px] max-w-full object-contain"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <span className="text-sm text-blue-600">124 reviews</span>
          </div>

          <p className="text-sm text-gray-600 mt-3">
            200+ bought in past month
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-6">$89.99</p>

          <p className="text-sm text-gray-500 mt-1">Free delivery</p>

          <p className="text-gray-700 mt-6 leading-8 text-lg">
            {product.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
            href={product.link}
            target="_blank"
            className="inline-block text-center bg-orange-400 hover:bg-orange-500 text-black font-medium px-6 py-3 rounded-full"
            >
                Check on Amazon
            </a>
            
            <Link
              href="/reviews"
              className="inline-block text-center bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-full"
            >
              Back to Reviews
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
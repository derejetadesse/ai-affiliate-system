import Image from "next/image";

export default function ProductPage() {
  const features = [
    "Ergonomic support for head, back, hips, and arms",
    "Adjustable lumbar support and seat height",
    "Breathable mesh back with padded seat",
    "330 lb maximum weight capacity",
    "360° swivel base with smooth rolling casters",
    "Useful for office work, study, and gaming",
  ];

  const pros = [
    "Comfortable for long sitting hours",
    "Breathable mesh back",
    "Headrest and lumbar support included",
    "Modern design for home office setups",
  ];

  const cons = [
    "Assembly may take some time",
    "May feel large for very small desks",
  ];

  return (
    <main className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-sm text-blue-700 mb-4">
          Home & Kitchen &gt; Office Furniture &gt; Office Chairs
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Product Image */}
          <div className="border rounded-xl p-6 bg-white shadow-sm">
            <div className="flex justify-center">
              <Image
                src="/chair.png"
                alt="TRALT Ergonomic Office Chair"
                width={500}
                height={500}
                className="rounded-lg object-contain"
                priority
              />
            </div>

            <div className="grid grid-cols-4 gap-3 mt-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="border rounded-lg p-2 flex items-center justify-center bg-gray-50"
                >
                  <Image
                    src="/chair.png"
                    alt={`TRALT chair thumbnail ${item}`}
                    width={90}
                    height={90}
                    className="rounded object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
              TRALT Ergonomic Office Chair Review
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-sm text-blue-700">4.4 out of 5</span>
              <span className="text-sm text-gray-500">|</span>
              <span className="text-sm text-blue-700">1,240 ratings</span>
            </div>

            <div className="border-t border-b py-4 mb-6">
              <p className="text-sm text-gray-500">Brand</p>
              <p className="text-lg font-medium mb-3">TRALT</p>

              <p className="text-sm text-gray-500">Availability</p>
              <p className="text-green-700 font-semibold mb-3">In Stock</p>

              <p className="text-sm text-gray-500">Recommended Use</p>
              <p className="text-base">Office, study, home workspace, gaming</p>
            </div>

            <p className="text-gray-700 leading-7 mb-6">
              The TRALT ergonomic office chair is designed for daily comfort,
              better sitting posture, and long work sessions. With headrest,
              lumbar support, breathable mesh, and smooth rolling wheels, it is
              a strong option for home offices, remote work, and study setups.
            </p>

            <div className="bg-gray-50 border rounded-xl p-5 mb-6">
              <h2 className="text-xl font-semibold mb-3">About this item</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Our Review</p>
              <p className="text-2xl font-bold mb-2">Best for daily office use</p>
              <p className="text-gray-700 mb-5">
                This chair stands out for comfort, airflow, and posture support.
                It is a practical pick for people who spend many hours at a desk.
              </p>

              <a
                href="https://amzn.to/4uOyXKR"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block w-full text-center rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300 transition"
              >
                View on Amazon
              </a>

              <p className="text-xs text-gray-500 mt-3">
                As an Amazon Associate, we may earn from qualifying purchases.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom sections */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <section className="md:col-span-2 border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Why we recommend it</h2>
            <p className="text-gray-700 leading-7 mb-4">
              The TRALT chair is a solid choice for anyone looking for an
              ergonomic upgrade without making their workspace look bulky. The
              mesh back helps with airflow, while the adjustable support points
              make it more flexible for different body types and desk habits.
            </p>
            <p className="text-gray-700 leading-7">
              It works especially well for remote workers, students, and anyone
              building a more comfortable desk setup for daily use.
            </p>
          </section>

          <aside className="border rounded-xl p-6 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">Quick Summary</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-500">Comfort</p>
                <p className="font-medium">4.5/5</p>
              </div>
              <div>
                <p className="text-gray-500">Adjustability</p>
                <p className="font-medium">4.4/5</p>
              </div>
              <div>
                <p className="text-gray-500">Breathability</p>
                <p className="font-medium">4.6/5</p>
              </div>
              <div>
                <p className="text-gray-500">Value</p>
                <p className="font-medium">4.3/5</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <section className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Pros</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </section>

          <section className="border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-700">Cons</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-12 border rounded-2xl p-8 text-center bg-yellow-50">
          <h2 className="text-2xl font-bold mb-3">
            Ready to improve your desk comfort?
          </h2>
          <p className="text-gray-700 mb-6">
            Check the TRALT Ergonomic Office Chair on Amazon and see if it fits
            your workspace needs.
          </p>
          <a
            href="https://amzn.to/4uOyXKR"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block rounded-full bg-yellow-400 px-8 py-4 text-lg font-semibold text-black hover:bg-yellow-300 transition"
          >
            Check Latest Price on Amazon
          </a>
        </section>
      </div>
    </main>
  );
}

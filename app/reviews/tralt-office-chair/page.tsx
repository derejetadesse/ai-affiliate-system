export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">
          Our Reviews
        </h1>
        <p className="mt-4 text-gray-600">
          We review the best products so you can make smart buying decisions.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Product
        </h2>

        <div className="max-w-md mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition">
          <img
            src="https://images.unsplash.com/photo-1505843490701-5be5d1b29956?auto=format&fit=crop&w=1000&q=80"
            alt="TRALT Office Chair"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-bold">
              TRALT Ergonomic Office Chair
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Comfortable ergonomic chair with mesh back support and high-back design for long work hours.
            </p>

            <a
              href="/reviews/tralt-office-chair"
              className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Read Review
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
